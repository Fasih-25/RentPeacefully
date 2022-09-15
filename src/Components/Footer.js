import React from 'react'
import "../App.css";
import {useNavigate} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faGooglePlus, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div>
      <footer className='bg-sky-800 text-center md:text-left pt-4 mt-4 text-white  bottom-0 w-full mb-0 '>
        <div className="container ">
            <div className="row mx-20 md:mx-44 flex justify-between">
                <hr className='md:hidden w-1 ' />
                <div className='col-md-3 text-center sm:!text-left  '>
                    <h5 className='text-xl font-medium'>RentalApp</h5>
                    <ul className='text-center sm:!text-left '>
                        <li><a className="dropdown-item text-white hover:bg-sky-700 text-sm pt-2 px-0" href="/">Contact us</a></li>
                    </ul>
                </div>
                <hr className='md:hidden w-1' />
                <div className='col-md-3 text-center sm:!text-left  top-4 md:top-0'>
                    <h5 className='text-xl font-medium'>Help</h5>
                    <ul className='text-center sm:!text-left pt-2'>
                        <li><a className=" text-white px-0  text-sm hover:no-underline  " href="/">How it works</a></li>
                        <li><button className=" text-white px-0 py-0 text-sm hover:no-underline" onClick={()=>navigate("/fAQs")}>FAQs</button></li>
                    </ul>
                </div>
                <hr className='md:hidden w-1' />
                <div className='col-md-3 text-center sm:!text-left top-8 md:top-0 '>
                    <h5 className='text-xl font-medium'>Legal</h5>
                    <ul className='text-center sm:!text-left pt-2 '>
                        <li><a className=" text-white px-0 text-sm hover:no-underline  " href="/">Terms of use</a></li>
                        <li><a className=" text-white px-0 py-0 text-sm hover:no-underline" href="/">Legal Disclaimer</a></li>
                        <li><a className=" text-white px-0 py-0  text-sm hover:no-underline" href="/">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className='py-2 my-14' />
        <div className='mb-4'>
          <div className='text-center'>
           <ul className='flex flex-row justify-center items-center mb-4'>
            <li className='mr-2 text-lg'><h5>Register for free</h5></li>
            <li><button className="signUpbtn bg-rose-500 text-white text-xs   py-3 w-28 rounded-full" onClick={()=>navigate("/signUp")}>
                  SIGN UP!
                </button></li>
           </ul>
          </div>
          <hr className='my-4' />
        </div>
        <div className="text-center mb-3 justify-center text-xl ">
          <a className="  px-2 " href="/"><FontAwesomeIcon icon={faFacebook} className="socialbtn items-center justify-center py-2 px-2 bg-gray-200 text-blue-900 hover:text-black text-xl rounded-full text "></FontAwesomeIcon></a>
          <a className="  px-2 " href="/"><FontAwesomeIcon icon={faTwitter} className="socialbtn items-center justify-center py-2 px-2 bg-sky-400 text-slate-100 hover:text-black text-xl rounded-full text "></FontAwesomeIcon></a>
          <a className="  px-2 " href="/"><FontAwesomeIcon icon={faGooglePlus} className="socialbtn items-center justify-center py-2 px-2 bg-gray-200 text-red-600 hover:text-black text-xl rounded-full text "></FontAwesomeIcon></a>
          <a className="  px-2 " href="/"><FontAwesomeIcon icon={faLinkedin} className="socialbtn items-center justify-center py-2 px-2 bg-gray-200 text-blue-800 hover:text-black text-xl rounded-full text "></FontAwesomeIcon></a>
          <a className="  px-2 " href="/"><FontAwesomeIcon icon={faInstagram} className="socialbtn items-center justify-center py-2 px-2 bg-sky-900 text-gray-100 hover:text-black text-xl rounded-full text "></FontAwesomeIcon></a>
          <a className="  px-2 " href="/"><FontAwesomeIcon icon={faEnvelope} className="socialbtn items-center justify-center py-2 px-2 bg-gray-800 text-gray-100 hover:text-black text-xl rounded-full text "></FontAwesomeIcon></a>
                  
        </div>
        <div className="footerCopyright flex bg-sky-900">
          <div className="container text-center justify-center py-4 text-xs text-gray-300">
            <p> © 2022 Copyright: RentalApp </p>
          </div>

        </div>
      </footer>
    </div>
  )
}
