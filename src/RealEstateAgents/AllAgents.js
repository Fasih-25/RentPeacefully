import React, { useState, useEffect } from 'react'
import  axios  from 'axios';
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocation} from '@fortawesome/free-solid-svg-icons';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
import ServiceProvider from '../Components/ServiceProvider';
import RealEstateAgents from '../Components/RealEstateAgents';
import LoadingSpinner from '../Components/LoadingSpinner';
import FirstNavBar from '../Components/FirstNavBar';
var Datalength;

export default function AllAgents() {
    const [address, setAddress] = useState("");
    const [coordinates,setCoordinates] = useState({
      lat:null,
      lng:null
    });

 const handleSelect = async value => {
  const results = await geocodeByAddress(value);
  const latlng = await getLatLng(results[0]);
  console.log(latlng);
  setAddress(value);
  setCoordinates(latlng);
 }

 const [posts, setPosts] = useState([]);
 const [isLoading, setIsLoading] = useState(false);
useEffect(() => {
    setIsLoading(true);
            axios.get(
          `https://nodejs-rental-api.herokuapp.com/topUsers/allEstateAgent`
        )
        .then((res) =>{
        console.log(res);
        Datalength = res.data.length;
        setPosts(res.data);
        setIsLoading(false)
        // console.log(Datalength)
    })
        .catch (err => { 
        console.log(err);
    })
  }, []);

  return (
    <div>
      <FirstNavBar />
      <Navbar />
      <div className='text-center bg-sky-400 text-slate-50 flex flex-row justify-around ' >
            {/* <div className='flex justify-center items-center'>
                <button className='btn btn-primary'>filters</button>
            </div> */}
            <h2 className='lg:text-2xl py-2 xl:text-3xl xl:!py-4 '> Top Real Estate Agents </h2>
            {/* <div className='flex flex-row justify-center items-center'>
                <FontAwesomeIcon icon={faLocation} className=" items-center justify-center py-2 px-2 text-white text-xl rounded-full text "></FontAwesomeIcon>
                <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
                >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div className='flex justify-center flex-col' >
                    <input
                        {...getInputProps({
                        placeholder: ' Search',
                        className: 'location-search-input',
                        })}
                    className=" text-black 2xl:w-80 shadow-sm text-left py-1 flex justify-start outline-0 "

                    />
                    <div className="autocomplete-dropdown-container text-black z-10">
                        {loading && <div>Loading...</div>}
                        {suggestions.map(suggestion => {
                        console.log (suggestion);
                        const className = suggestion.active
                            ? 'suggestion-item--active'
                            : 'suggestion-item';
                        // inline style for demonstration purpose
                        const style = suggestion.active
                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                        return (
                            <div
                            {...getSuggestionItemProps(suggestion, {
                                className,
                                style,
                            })}
                            >
                            <span>{suggestion.description}</span>
                            </div>
                        );
                        })}
                    </div>
                    </div>
                )}
                </PlacesAutocomplete>
            </div>  */}
        </div>
        <div className='flex justify-center items-center py-8 '>
            <h1 className='text-3xl'>Results: <span className='text-white bg-blue-500 text-2xl px-2 pb-1 font-bold'>{Datalength}</span></h1>
        </div>
        <div className='flex justify-center items-center mt-10 mb-10'>
        
        {isLoading ? <LoadingSpinner /> 
        :
        (
            <>
                <div className='flex flex-wrap shadowBox flex-col px-2 py-2'>
            
                    { 
                        (!Datalength == 0) ?
                        ( 
                            <>                      
                                {posts.map((item)=>{
                                    return  <RealEstateAgents userName = {item.userName} />
                                })}
                            </>
                        )
                        :
                        (
                            <>
                                <div className='font-medium  text-3xl text-center py-20 '> <h1 className=''> Nothing found 😢</h1> </div>
                            </>
                        )
                    }
                </div>
            </>
        )}   
        </div>
      <Footer />
    </div>
  )
}
