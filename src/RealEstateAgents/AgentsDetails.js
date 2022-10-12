import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faLink, faShare, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom"
import FirstNavBar from '../Components/FirstNavBar';

export default function AgentsDetail() {
  const navigate = useNavigate();
  return (
    <div>
      <FirstNavBar />
      <Navbar />
      <div className='text-center bg-sky-400 text-slate-50 flex flex-row justify-around ' >
            <h2 className='lg:text-2xl py-2 xl:text-3xl xl:!py-4 '> RealEstateAgenttestRent's Profile </h2>    
      </div>
      <div className=' px-16 sm:px-32'>
        <div className='mainDiv flex flex-wrap py-8 justify-center items-center xl:justify-between'> 
          <div className='flex flex-wrap justify-center items-center md:items-start pb-4 xl:!pb-0'>
            <div className='flex flex-wrap flex-col justify-center items-center'>
              <div className=''>
              <img src={require('../assets/noProfilePicture.png')} alt="" className='h-56 w-56 rounded-full shadowBox' />
              </div>
              <div className='pt-4'>
              <button className="signUpbtn bg-green-500 text-white text-xs font-medium  py-3 w-36 rounded-full " onClick={()=>navigate("/")}>
                <FontAwesomeIcon icon={faShareNodes} className=" items-center justify-center  text-white text-lg rounded-full text px-1"></FontAwesomeIcon>  
                SHARE PROFILE
              </button>
              </div>
              <div className='pt-3'>
                <h3>Member since October 21st, 2019</h3>
              </div>
            </div>
            <div className='flex flex-col md:pl-24  justify-center items-center md:justify-start md:items-start pt-4 md:!pt-0'>
              <div>
                <h1 className='text-xl font-normal text-black'>Real Estate Agent test Rent</h1>
              </div>
              <div className='pt-3 '>
                <p className='font-thin '>Nice to meet you! I'm Real Estate Agent test Rent</p>
              </div>
            </div>
          </div>
          <div className='flex shadowBox flex-col'>
            <div className=' flex flex-col pt-3 pl-3 pr-3 sm:!pr-32 h-fit'>
              <div className='pb-2'>
                <h1 className='text-gray-400 font-bold text-xl text-left'><FontAwesomeIcon icon={faCertificate} className=" items-center justify-center  text-gray-400 text-lg rounded-full text px-1"></FontAwesomeIcon> Free Member</h1>
              </div>
              <div className='flex flex-row pt-2'>
                <span className='text-white bg-amber-400 text-base px-2 pb-1 font-bold shadowBox'> 4 </span> 
                <div className="flex items-center">
                    <svg aria-hidden="true" className="w-7 h-7 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-7 h-7 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-7 h-7 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-7 h-7 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    {/* <svg aria-hidden="true" className="w-7 h-7 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> */}
                    <svg aria-hidden="true" className="w-7 h-7 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                </div> 
                <p className='font-semibold text-lg ml-1 text-slate-400'> (1 review)</p>
              </div>
              <div className='flex flex-row pt-4  items-center'>
                <h1 className='font-bold'>Total rented: </h1>
                <p className='ml-2'> 1</p>
              </div>
              <div className='flex flex-row pt-3 items-center'>
                <h1 className='font-bold'>Total Tenants:  </h1>
                <p className='ml-2'> 1</p>
              </div>
              <div className='flex flex-row pt-3 items-center'>
                <h1 className='font-bold'>Total Landlords: </h1>
                <p className='ml-2'> 1</p>
              </div>
            </div>
            <div className=' flex justify-center items-center pt-5 pb-4'>
            <button className="signUpbtn bg-green-500 text-white text-xs font-medium  py-3 w-36 rounded-full " onClick={()=>navigate("/")}>
                CONTACT ME!
              </button> 
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center pt-6'>
          <div className='py-3'>
          <button className="signUpbtn bg-purple-500 text-white text-xs font-medium  py-3 px-14 rounded-full " onClick={()=>navigate("/listing/all")}>
                VIEW PROPERTIES FOR RENT
              </button> 
          </div>
          <div className='container flex flex-col justify-center items-center pt-3'>
            <h1 className='font-bold text-xl text-center'>Areas serving</h1>
            <div className='pt-2 flex flex-wrap sm:flex-row'>
              <div className='bg-cyan-600 rounded-3xl  mt-2 xl:!mt-0 py-2 px-3 mx-3 '>
                <p className='  font-bold text-white'>Washington D. C., Distrito de Columbia, EE. UU.</p>
              </div>
              <div className='bg-cyan-600 rounded-3xl  mt-2 xl:!mt-0 py-2 px-3 mx-3 '>
                <p className='  font-bold text-white'>New York, Nueva York, EE. UU.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center  sm:justify-start'>
          <div className='pt-16 pb-36'>
              <div className='flex flex-col'>
                <h1 className='text-4xl'>More about Realestateagenttest Rent</h1>
                <p className='pt-4'>I'm a great RentPeacefully user</p>
              </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center  sm:justify-start sm:items-start pb-28'>
          <div className='pt-2 pb-4'>
            <div className='flex flex-row justify-center items-center'>
              <h1 className='text-5xl pr-3'>Reviews </h1>
              <h1 className='text-white  bg-blue-500 text-3xl px-3 py-2 font-bold shadowBox'> 1 </h1>
            </div>
          </div>   
          <div className='flex flex-col justify-center items-center sm:justify-start sm:items-start sm:flex-row pt-9 px-3'>
            <div className=''>
              <img src={require('../assets/noProfilePicture.png')} alt="" className='h-28 w-28 rounded-full shadowBox' />
            </div>
            <div className='flex sm:items-start sm:justify-start justify-center items-center flex-col px-3 pt-2 sm:!pt-0'>
              <div className=''>
                <h1 className='text-2xl'>Landlordtest Rent</h1>
              </div>
              <div className="flex items-center pt-2 pb-2">
                <svg aria-hidden="true" className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                {/* <svg aria-hidden="true" className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> */}
                <svg aria-hidden="true" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
              <p >Awesome</p>
            </div>
          </div>  
        </div>
        </div>
      <Footer />
    </div>
  )
}