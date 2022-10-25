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
import LoadingSpinner from '../Components/LoadingSpinner';
import FirstNavBar from '../Components/FirstNavBar';
var Datalength;

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) { 
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  } 
  return array;
}
export default function All() {
    const [address, setAddress] = useState("");
    const [coordinates,setCoordinates] = useState({
      lat:null,
      lng:null
    });
  const [isLoading, setIsLoading] = useState(false);
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
  setIsLoading(true);
  fetch("https://nodejs-rental-api.herokuapp.com/property/searchProperty", requestOptions)
    .then(response => response.json())
    .then(result => {
      setPosts(result.users)
      setIsLoading(false) })
    .catch(error => console.log('error', error));
  //   .then((response) =>{
  //     // console.log(res);
  //     Datalength = response.users.length;
  // })
  }, []);
    console.log(posts.length)
    Datalength = posts.length;
    var setData = [{id: 0, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'},{ id: 1, image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80' },{ id: 2, image: 'https://images.unsplash.com/photo-1617104678098-de229db51175?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1828&q=80' }, { id: 3, image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' },{ id: 4, image: 'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80' },];    
    var shuffleData = shuffle(setData);
    // console.log(posts)
    // var check = post
    // console.log(check)
  return (

    <div>
      <FirstNavBar />
      <Navbar />
        <div className='text-center bg-black text-slate-50 flex flex-row justify-around ' >
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
              {isLoading ? <LoadingSpinner /> :(
                  <>
                  { (!Datalength == 0) ?
                  ( 
                    <>                      
                    { posts.map((item, index)=>{
                      return <PropertyCard id = {item.id} propertyImage = {item.propertyImage}  propertyName = {item.propertyName}  bedrooms = {item.rooms} bathroom = {item.bathrooms} address ={item.address} area = {item.area} price = {item.price} propertyType = {item.propertyType} securityDeposit = {item.securityDeposit} data = {posts} shuffleData = {shuffleData} />
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
                  </>
              )}
            </div>    
          </div>
        </div>
      <Footer />
    </div>
  )
}