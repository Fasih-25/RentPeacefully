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
            <div className='container flex items-center justify-center '>
                <div className='row flex flex-col sm:flex-row items-center justify-evenly fle pt-2 md:pt-5 mt-3 mr-4 sm:mr-0'>
                    <div className='col-12 mt-8 text-center'>
                        <h1 className='blinkText text-white font-bold text-2xl sm:text-4xl 2xl:text-5xl sm:mx-40 mb-4 animate-flash'>Launching Soon</h1>
                        <h1 className='blinkText text-white font-bold text-xl sm:text-3xl 2xl:text-5xl px-0 sm:px-0 text-center animate-flash'>Free Registration For First 100 Landlords and Agents </h1>
                    </div>
                    <div className="col-md-6  text-center md:text-left justify-start items-start ">
                        <div className="text-white justify-start text-left items-start">
                            <h2 className='fadeInLeft font-bold text-xl sm:text-3xl xl:text-4xl 2xl:text-5xl  sm:px-0 sm:pr-4 xl:pr-14 sm:text-left pt-36 mb-4'>Manage descentralized rental agreements easily with our app</h2>
                            <hr className='text-white border border-t-4 mb-4 ' />
                            <h6 className='text-base sm:text-left '>Let your Residential Lease Agreement be managed by an Ethereum Smart Contract created by the Tenant and approved by the Landlord.</h6>
                        </div>
                        <br />
                        <div className=" justify-start items-start pr-10 sm:pr-16 xl:pr-80 2xl:pr-96">
                            <a className='CreateAccbtn  text-white border bottom-2 border-white text-xs py-2 px-3 ' href='/signUp'>CREATE AN ACCOUNT</a>
                            <a className='CreateAccbtn  text-white border bottom-2 border-white text-xs py-2 px-3 ml-1' href='/login'>LOG IN <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon></a>
                        </div>

                    </div>
                    <div className="col-md-6 flex justify-center pt-16 sm:pt-48 ">
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
