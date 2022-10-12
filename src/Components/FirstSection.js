import React from 'react'
import "../App.css";
import { faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {useNavigate} from "react-router-dom"

export default function FirstSection() {
    const navigate = useNavigate();
  return (
    <>
        <div className='  '>
        <div className='firstSection top-3 '>
         <section className='h-screen relative overflow-hidden cursor-default bg-gray-900 bg-opacity-70 flex flex-col  items-center justify-around '>
         <div className='flex top-0 w-full h-full left-0 right-0 bottom-0 px-3 justify-center items-center' >
            <div className=' flex justify-center items-center flex-col  mt-3   '>
                <div className=' flex  flex-col  mt-1 sm:!mt-14 text-center md:mb-5'>
                    <h1 className='blinkText text-white font-bold xsm:text-2xl sm:text-4xl 2xl:text-4xl sm:mx-40 lg:mb-4 mb-2 text-center animate-flash'>Launching Soon</h1>
                    {/* <h1 className='blinkText text-white font-bold xsm:text-xl sm:text-3xl 2xl:text-4xl px-0 sm:px-0 text-center animate-flash'>Free Registration For First 100 Landlords and Agents </h1> */}
                </div>
                <div className='flex flex-col  sm:flex-row justify-center items-center    xl:px-24'>
                    <div className="flex flex-col text-center  justify-center  items-center  2xl:px-16">
                        <div className="flex flex-col  text-white justify-center items-center text-center ">
                            <h2 className='fadeInLeft font-bold xsm:text-xl sm:text-3xl xl:text-4xl 2xl:text-4xl  sm:px-0   mb-1 sm:!mb-4'>Manage descentralized rental agreements easily with our app</h2>
                            {/* <hr className='text-white border border-t-8 bg-white mb-2 sm:!mb-4 ' /> */}
                            <hr className='text-white bg-white font-extrabold bg-opacity-100  pb-0  w-full  my-2'/>
                            <h6 className='xsm:text-base text-center  '>Let your Residential Lease Agreement be managed by an Ethereum Smart Contract created by the Tenant and approved by the Landlord.</h6>
                        </div>
                            <br />
                        <div className=" flex justify-center items-center ">
                            <button className='CreateAccbtn  text-white bg-yellow-500 bottom-2  text-base py-2 px-3 rounded-md' onClick={()=>navigate("/signUp")}>Register</button>
                            {/* <button className='CreateAccbtn  text-white border bottom-2 border-white text-xs py-2 xsm:px-3 px-4      xsm:ml-1 mt-2 xsm:!mt-0' onClick={()=>navigate("/login")}>LOG IN <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon></button> */}
                        </div>
                    </div>
                    {/* <div className="col-md-6 flex justify-center pt-10 md:pt-0">
                        <img src={require('../assets/contract1.png')} className='h-5/6 w-5/6 z-10' alt="" />
                    </div> */}
                </div>
            </div>
         </div>
         </section>
         </div>
        </div>
    </>
  )
}
