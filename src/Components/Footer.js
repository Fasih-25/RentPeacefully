import {React, useState} from 'react'
import "../App.css";
import {useNavigate} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faGooglePlus, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import ContactUs from './ContactUs';
import logo from '../assets/ERT.png';

export default function Footer() {
  const [showMyModal, setShowMyModal] = useState(false)
  const handleOnClose = () => setShowMyModal(false)
  const navigate = useNavigate();
  
  return (
    <div>
      <footer className='bg-black text-center md:text-left pt-4 mt-4 text-slate-50  bottom-0 w-full mb-0 '>
        <div className="container  ">
            <div className="flex-col sm:flex-row mx-20 lg:mx-44 flex justify-between">
                {/* <hr className='md:hidden w-1 ' /> */}
                <div className='col-md-3 text-center sm:!text-left mb-4 '>
                  <div className='flex flex-row text-lg px-2'>
                    <img className='logoImage' height="50px !important" src={logo} alt=''></img>
                    <h5 className='text-xl font-normal '>RentalApp</h5>
                  </div>
                    <ul className='!text-center sm:!text-left pt-2 items-center'>
                        <li><button className="dropdown-item sm:w-fit px-2 text-slate-100 hover:bg-yellow-400 focus:hover:bg-yellow-400 ease-in-out duration-500 hover:font-bold hover:text-slate-900 sm:!text-left !text-center text-base  rounded-sm" onClick={()=>setShowMyModal(true)}>Contact Us</button></li>
                    </ul>
                </div>
                {/* <hr className='md:hidden w-1' /> */}
                <div className='col-md-3 text-center sm:!text-left  mb-4'>
                    <h5 className='text-xl font-normal px-2'>Help</h5>
                    <ul className='text-center sm:!text-left pt-2'>
                        <li><button className="sm:w-fit px-2 text-slate-100 hover:bg-yellow-400 focus:hover:bg-yellow-400 hover:text-slate-900 ease-in-out duration-500 hover:font-bold sm:!text-left text-base hover:no-underline  rounded-sm" onClick={()=>navigate("/how-It-Works")}>How It Works</button></li>
                        <li><button className="sm:w-fit px-2 text-slate-100 hover:bg-yellow-400 focus:hover:bg-yellow-400 hover:text-slate-900 ease-in-out duration-500 hover:font-bold py-0 text-base hover:no-underline rounded-sm" onClick={()=>navigate("/fAQs")}>FAQs</button></li>
                    </ul>
                </div>
                {/* <hr className='md:hidden w-1 bg-white' /> */}
                <div className='col-md-3 text-center sm:!text-left  '>
                    <h5 className='text-xl font-normal px-2'>Legal</h5>
                    <ul className='text-center sm:!text-left pt-2 '>
                        <li><button className="sm:w-fit text-slate-100 hover:bg-yellow-400 focus:hover:bg-yellow-400 hover:text-slate-900 ease-in-out duration-500 hover:font-bold px-2 text-base hover:no-underline rounded-sm " onClick={()=>navigate("/")}>Terms of use</button></li>
                        <li><button className="sm:w-fit text-slate-100 hover:bg-yellow-400 focus:hover:bg-yellow-400 hover:text-slate-900 ease-in-out duration-500 hover:font-bold px-2 py-0 text-base hover:no-underline rounded-sm" onClick={()=>navigate("/")}>Legal Disclaimer</button></li>
                        <li><button className="sm:w-fit text-slate-100 hover:bg-yellow-400 focus:hover:bg-yellow-400 hover:text-slate-900 ease-in-out duration-500 hover:font-bold px-2 py-0  text-base hover:no-underline rounded-sm" onClick={()=>navigate("/")}>Privacy Policy</button></li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className='text-slate-50 py-2 my-7' />
        <div className='mb-4'>
          <div className='text-center'>
           <ul className='flex flex-row justify-center items-center mb-4'>
            <li className='mr-2 text-lg'><h5>Register for free</h5></li>
            <li><button className="signUpbtn bg-red-700 text-slate-100 text-xs   py-3 w-28 rounded-full" onClick={()=>navigate("/signUp")}>
                  SIGN UP!
                </button></li>
           </ul>
          </div>
          <hr className='text-white my-4 ' />
        </div>
        <div className="text-center mb-3 justify-center text-xl ">
          <button className="  px-2 " onClick={()=>navigate("/")}><FontAwesomeIcon icon={faFacebook} className="socialbtn items-center justify-center py-2 px-2 bg-gray-200 text-blue-900 hover:text-black text-xl rounded-full text "></FontAwesomeIcon></button>
          <button className="  px-2 " onClick={()=>navigate("/")}><FontAwesomeIcon icon={faTwitter} className="socialbtn items-center justify-center py-2 px-2 bg-sky-400 text-slate-100 hover:text-black text-xl rounded-full text "></FontAwesomeIcon></button>
          <button className="  px-2 " onClick={()=>navigate("/")}><FontAwesomeIcon icon={faGooglePlus} className="socialbtn items-center justify-center py-2 px-2 bg-gray-200 text-red-600 hover:text-black text-xl rounded-full text "></FontAwesomeIcon></button>
          <button className="  px-2 " onClick={()=>navigate("/")}><FontAwesomeIcon icon={faLinkedin} className="socialbtn items-center justify-center py-2 px-2 bg-gray-200 text-blue-800 hover:text-black text-xl rounded-full text "></FontAwesomeIcon></button>
          <button className="  px-2 " onClick={()=>navigate("/")}><FontAwesomeIcon icon={faInstagram} className="socialbtn items-center justify-center py-2 px-2 bg-sky-900 text-gray-100 hover:text-gray-400 text-xl rounded-full text "></FontAwesomeIcon></button>
          <button className="  px-2 " onClick={()=>navigate("/")}><FontAwesomeIcon icon={faEnvelope} className="socialbtn items-center justify-center py-2 px-2 bg-gray-800 text-gray-100 hover:text-gray-400 text-xl rounded-full text "></FontAwesomeIcon></button>
                  
        </div>
        <div className="footerCopyright flex bg-[#f9f9f9]">
          <div className="container text-center justify-center py-4 text-xs text-black">
            <h1> © 2022 Copyright: RentalApp </h1>
          </div>

        </div>
        
      </footer>
      <ContactUs onClose={handleOnClose} visible={showMyModal}   />
    </div>
  )
}
