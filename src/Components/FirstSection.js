import React from 'react'
import "../App.css";
import { faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {contract} from "../assets/contract1.png"; 

export default function firstSection() {
  return (
    <>
        <div className=' pt-5 '>
        <div className='firstSection top-3 '>
         <section className='h-screen relative overflow-hidden cursor-default rgbaGradient -mt-12  flex'>
         <div className='absolute top-0 w-full h-full left-0 right-0 bottom-0 px-2 mx-3' >
            <div className=' flex items-center justify-center '>
                <div className='row flex flex-col sm:flex-row items-center justify-center fle pt-2 md:pt-5 mt-3 mr-4 sm:mr-0'>
                    <div className='col-12 mt-1 sm:mt-8 text-center'>
                        <h1 className='blinkText text-white font-bold text-2xl sm:text-4xl 2xl:text-5xl sm:mx-40 mb-4 animate-flash'>Launching Soon</h1>
                        <h1 className='blinkText text-white font-bold text-xl sm:text-3xl 2xl:text-5xl px-0 sm:px-0 text-center animate-flash'>Free Registration For First 100 Landlords and Agents </h1>
                    </div>
                    <div className='flex flex-wrap sm:flex-row justify-center items-center lg:px-10'>
                        <div className="col-md-6  text-center md:text-left justify-center sm:justify-start items-center sm:items-start ">
                            <div className="flex-col text-white justify-center sm:justify-start text-left items-center sm:items-start">
                                <h2 className='fadeInLeft font-bold text-xl sm:text-3xl xl:text-4xl 2xl:text-5xl  sm:px-0 sm:pr-4 xl:pr-14 sm:text-left pt-10 md:pt-36 mb-1 sm:!mb-4'>Manage descentralized rental agreements easily with our app</h2>
                                <hr className='text-white border border-t-4 mb-2 sm:!mb-4 ' />
                                <h6 className='text-base sm:text-left '>Let your Residential Lease Agreement be managed by an Ethereum Smart Contract created by the Tenant and approved by the Landlord.</h6>
                            </div>
                             <br />
                            <div className=" flex flex-row justify-start items-start pr-3 sm:pr-16 xl:pr-64 2xl:pr-96">
                                <a className='CreateAccbtn  text-white border bottom-2 border-white text-xs py-2 px-3 ' href='/signUp'>CREATE AN ACCOUNT</a>
                                <a className='CreateAccbtn  text-white border bottom-2 border-white text-xs py-2 px-3 ml-1' href='/login'>LOG IN <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon></a>
                            </div>

                        </div>
                        <div className="col-md-6 flex justify-center pt-10 sm:pt-48 ">
                            <img src={require('../assets/contract1.png')} className='h-5/6 w-5/6 z-10' alt="" />
                        </div>
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
