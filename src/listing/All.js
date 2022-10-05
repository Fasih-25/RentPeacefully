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
import {useLocation} from 'react-router-dom';
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
//   console.log(latlng);
//   setAddress(value);
  setCoordinates(latlng);
 }

 const [posts, setPosts] = useState([]);
 const location = useLocation();
//  console.log(location.state.longitude)
//  console.log(location.state.latitude)
var latitude = location.state.latitude;
var longitude = location.state.longitude;
// console.log(latitude)
// console.log(longitude)
//  let searchProperty = async (e) => {
//   // POST request using fetch with async/await
//   const requestOptions = {
//       method: 'POST   ',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ longitude: "66.990501", latitude: "24.860966" })
//   };
//   const response = await fetch('https://nodejs-rental-api.herokuapp.com/property/searchProperty', requestOptions);
//   const data = await response.json();
//   // setPosts(response.data);
//   // console.log(response)
// }



useEffect(() => {
   
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ longitude: "66.990501", latitude: "24.860966"})
  // };
  // fetch('https://nodejs-rental-api.herokuapp.com/property/searchProperty', requestOptions)
  // .then((res) =>{
  //       console.log(res);
  //       // Datalength = res.data.length;
       
  //       setPosts(res.data);
        
  //   })
  //       .catch (err => { 
  //       console.log(err);
  //   })
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "longitude": latitude,
  "latitude": longitude
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://nodejs-rental-api.herokuapp.com/property/searchProperty", requestOptions)
  .then(response => response.json())
  .then(result => setPosts(result.users))
  .catch(error => console.log('error', error));
//   .then((response) =>{
//     // console.log(res);
//     Datalength = response.users.length;
// })
  }, []);
  console.log(posts.length)
  Datalength = posts.length;
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
        <div className='px-2'>
        <div className="container flex justify-center items-center py-20">
            <div className="card flex justify-center items-center text-white 2xl:text-3xl font-bold bg-green-500 ">
               <h1 className='py-1 px-2'> {Datalength} Properties for Rent </h1>
            </div>
        </div>
        <div className=" flex justify-center ">
            <div className='flex flex-wrap justify-center '>
              
              
                    { posts == "" ? ( <>
                      <div className='font-medium  text-3xl text-center py-20'> <h1> Nothing found 😢</h1> </div>
                    </>)
                    :
                     (
                      <>
                      
                      { posts.map((item, index)=>{
                        return <PropertyCard id = {item.id} propertyImage = {item.propertyImage}  propertyName = {item.propertyName}  bedrooms = {item.rooms} bathroom = {item.bathrooms} address ={item.address} area = {item.area} price = {item.price} propertyType = {item.propertyType} securityDeposit = {item.securityDeposit} data = {posts} />
                    })}
                      </>
                    )
                    }
                  
            </div>    
        </div>
        </div>
      <Footer />
    </div>
  )
}
       //   axios.get(
          // `https://nodejs-rental-api.herokuapp.com/property/`, 
          // { 
    //         axios.get(
    //       `https://nodejs-rental-api.herokuapp.com/property/searchProperty`, 
    //       {
    //           longitude: "66.990501",
    //           latitude: "24.860966"
                
              
    //         }

    //     )
    //     .then((res) =>{
    //     console.log(res);
    //     Datalength = res.data.length;
    //     // console.log(location.state.id)
    //     // console.log(location.state.id)
    //     setPosts(res.data);
        
    // })
    //     .catch (err => { 
    //     console.log(err);
    // })