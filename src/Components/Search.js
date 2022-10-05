import React, { useState } from 'react';
import "../App.css";
import Navbar from './Navbar';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocation} from '@fortawesome/free-solid-svg-icons';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
import { useNavigate} from 'react-router-dom';

// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

export default function Search(props) {
  let navigate = useNavigate();
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

 const toDetails=()=>{
  if(props.title == "Properties For Rent")
  navigate('/listing/all',{state:{longitude: coordinates.lat, latitude:coordinates.lng  }});
  
  if(props.title == "Top Real Estate Agents")
     navigate('/realEstateAgents/AllAgents',{state:props});
  
     if(props.title == "Top Service Providers")
     navigate('/serviceProvider/All',{state:props});
}
    
  return (
    <div>
      <Navbar />
        <div className='text-center bg-sky-400 text-slate-50 flex flex-row justify-around ' >
          <h2 className='lg:text-2xl py-2 xl:text-3xl xl:!py-4 '> {props.title} </h2> 
        </div>
        <h2 className='pt-5 pb-1 text-center text-4xl font-normal'>Enter a city 🌇</h2>
        <div className="flex justify-center items-center flex-row">
            {/* <div className="flex flex-col justify-center items-center">
              <p>lat: {coordinates.lat}</p>
              <p>long: {coordinates.lng}</p>
              <p>address: {address}</p>
            </div> */}
            <div className="container flex justify-center mb-24 pt-10">
             
            <FontAwesomeIcon icon={faLocation} className=" items-center justify-center py-2 px-2 text-blue-900 hover:text-black text-xl rounded-full text "></FontAwesomeIcon>
            <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
              >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div className='flex justify-center  flex-col' >
                    <div className='flex flex-row'>
                    <input
                      {...getInputProps({
                        placeholder: ' Search',
                        className: 'location-search-input',
                      })}
                    className="xxsm:w-44 xsm:w-56  sm:w-96 shadow-sm text-left py-1 flex justify-start outline-0 px-2"

                    />
                    <button className="btn btn-primary px-2 mx-2 xxsm:text-sm mobile:text-base  " onClick={()=>toDetails()}  >search</button>
                    </div>
                    <div className="autocomplete-dropdown-container xxsm:w-44 xsm:w-56  sm:w-96 border outline-2 ">
                      {loading && <div>Loading...</div>}
                      {suggestions.map(suggestion => {
                        {/* console.log (suggestion); */}
                        const className = suggestion.active
                          ? 'suggestion-item--active'
                          : 'suggestion-item';
                        // inline style for demonstration purpose
                        const style = suggestion.active
                          ? { backgroundColor: '#3f729b', cursor: 'pointer', color: 'white', padding: '5px' }
                          : { backgroundColor: '#ffffff', cursor: 'pointer', padding: '5px' };
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                          >
                            <span>{suggestion.description}</span>
                            <hr />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            {/* <GooglePlacesAutocomplete selectProps={{ value, onChange: setValue, }} /> */}

            
            </div>
        </div>

      <Footer />
    </div>
  )
}
