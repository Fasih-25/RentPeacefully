import React, { useState, useEffect } from 'react'
import  axios  from 'axios';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocation} from '@fortawesome/free-solid-svg-icons';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
import PropertyCard from '../Components/PropertyCard';
var Datalength;


export default function All() {
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

useEffect(() => {
            axios.get(
          `https://nodejs-rental-api.herokuapp.com/property/`
        )
        .then((res) =>{
        console.log(res);
        Datalength = res.data.length;
        setPosts(res.data);
        
    })
        .catch (err => { 
        console.log(err);
    })
  }, []);

  return (

    <div>
      <Navbar />
        <div className='text-center bg-sky-400 text-slate-50 flex flex-row justify-around ' >
            {/* <div className='flex justify-center items-center'>
                <button className='btn btn-primary'>filters</button>
            </div> */}
            <h2 className='lg:text-2xl py-2 xl:text-3xl xl:!py-4 '> Properties for Rent </h2>
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
        <div className="container flex justify-center items-center py-20">
            <div className="card flex justify-center items-center text-white 2xl:text-3xl font-bold bg-green-500 ">
               <h1 className='py-1 px-2'> {Datalength} Properties for Rent </h1>
            </div>
        </div>
        <div className=" flex justify-center">
            <div className='flex flex-wrap justify-center '>
                    {posts.map((item)=>{
                        return <PropertyCard id = {item.id}  propertyName = {item.propertyName}  bedrooms = {item.rooms} bathroom = {item.bathrooms} address ={item.address} area = {item.area} price = {item.price} propertyType = {item.propertyType} securityDeposit = {item.securityDeposit} />
                    })}
            </div>    
        </div>
        
      <Footer />
    </div>
  )
}
