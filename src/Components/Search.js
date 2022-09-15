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
              <p>long: {coordinates.lat}</p>
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
                  <div className='flex justify-center flex-col' >
                    <input
                      {...getInputProps({
                        placeholder: ' Search',
                        className: 'location-search-input',
                      })}
                    className="w-96 shadow-sm text-left py-1 flex justify-start outline-0 "

                    />
                    <div className="autocomplete-dropdown-container">
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
            {/* <GooglePlacesAutocomplete selectProps={{ value, onChange: setValue, }} /> */}

            
            </div>
        </div>

      <Footer />
    </div>
  )
}
