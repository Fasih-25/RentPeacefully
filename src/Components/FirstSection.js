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
         <section className='h-screen relative overflow-hidden cursor-default rgbaGradient flex flex-col  items-center justify-around'>
         <div className=' top-0 w-full h-full left-0 right-0 bottom-0 px-3' >
            <div className=' flex justify-around flex-col pt-6 xsm:pt-16 md:pt-10 mt-3   '>
                <div className=' flex  flex-col  mt-1 sm:!mt-14 text-center md:mb-5'>
                    <h1 className='blinkText text-white font-bold xsm:text-2xl sm:text-4xl 2xl:text-4xl sm:mx-40 lg:mb-4 mb-2 text-center animate-flash'>Launching Soon</h1>
                    <h1 className='blinkText text-white font-bold xsm:text-xl sm:text-3xl 2xl:text-4xl px-0 sm:px-0 text-center animate-flash'>Free Registration For First 100 Landlords and Agents </h1>
                </div>
                <div className='flex flex-col  sm:flex-row justify-center items-center  md:pt-32 pt-16 lg:pt-24 xl:pt-44 xl:px-24'>
                    <div className="flex flex-col text-center md:text-left justify-center sm:!justify-start md:items-start items-center  2xl:px-16">
                        <div className="flex flex-col  text-white justify-center sm:!justify-start md:text-left items-center text-center md:items-start">
                            <h2 className='fadeInLeft font-bold xsm:text-xl sm:text-3xl xl:text-4xl 2xl:text-5xl  sm:px-0 sm:pr-4  sm:text-left  mb-1 sm:!mb-4'>Manage descentralized rental agreements easily with our app</h2>
                            {/* <hr className='text-white border border-t-8 bg-white mb-2 sm:!mb-4 ' /> */}
                            <hr className='text-white bg-white font-extrabold bg-opacity-100  pb-0  w-full  my-2'/>
                            <h6 className='xsm:text-base sm:text-left 2xl:text-lg'>Let your Residential Lease Agreement be managed by an Ethereum Smart Contract created by the Tenant and approved by the Landlord.</h6>
                        </div>
                            <br />
                        <div className=" flex xsm:!flex-row flex-col md:!justify-start md:!items-start justify-center items-center pr-3 sm:pr-16 xl:pr-64 2xl:pr-96">
                            <button className='CreateAccbtn  text-white border bottom-2 border-white text-xs py-2 px-3 ' onClick={()=>navigate("/signUp")}>CREATE AN ACCOUNT</button>
                            <button className='CreateAccbtn  text-white border bottom-2 border-white text-xs py-2 xsm:px-3 px-4      xsm:ml-1 mt-2 xsm:!mt-0' onClick={()=>navigate("/login")}>LOG IN <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon></button>
                        </div>
                    </div>
                    <div className="col-md-6 flex justify-center pt-10 md:pt-0">
                        <img src={require('../assets/contract1.png')} className='h-5/6 w-5/6 z-10' alt="" />
                    </div>
                </div>
            </div>
         </div>
         </section>
         </div>
        </div>
    </>
  )
}
