import {React, useState} from 'react'
import "../App.css";
import {useNavigate} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faGooglePlus, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import ContactUs from './ContactUs';

export default function Footer() {
  const [showMyModal, setShowMyModal] = useState(false)
  const handleOnClose = () => setShowMyModal(false)
  const navigate = useNavigate();
  return (
    <div>
      <footer className='bg-Footer-20 text-center md:text-left pt-4 mt-4 text-slate-100  bottom-0 w-full mb-0 '>
        <div className="container  ">
            <div className="flex-col sm:flex-row mx-20 lg:mx-44 flex justify-between">
                {/* <hr className='md:hidden w-1 ' /> */}
                <div className='col-md-3 text-center sm:!text-left mb-4 '>
                    <h5 className='text-xl font-normal'>RentalApp</h5>
                    <ul className='text-center sm:!text-left pt-2'>
                        <li><button className="dropdown-item text-slate-100  text-sm  px-0" onClick={()=>setShowMyModal(true)}>Contact Us</button></li>
                    </ul>
                </div>
                {/* <hr className='md:hidden w-1' /> */}
                <div className='col-md-3 text-center sm:!text-left  mb-4'>
                    <h5 className='text-xl font-normal'>Help</h5>
                    <ul className='text-center sm:!text-left pt-2'>
                        <li><button className=" text-slate-100 px-0 sm:!text-left text-sm hover:no-underline  " onClick={()=>navigate("/how-It-Works")}>How It Works</button></li>
                        <li><button className=" text-slate-100 px-0 py-0 text-sm hover:no-underline" onClick={()=>navigate("/fAQs")}>FAQs</button></li>
                    </ul>
                </div>
                {/* <hr className='md:hidden w-1' /> */}
                <div className='col-md-3 text-center sm:!text-left  '>
                    <h5 className='text-xl font-normal'>Legal</h5>
                    <ul className='text-center sm:!text-left pt-2 '>
                        <li><button className=" text-slate-100 hover:text-slate-100 px-0 text-sm hover:no-underline  " onClick={()=>navigate("/")}>Terms of use</button></li>
                        <li><button className=" text-slate-100 hover:text-slate-100 px-0 py-0 text-sm hover:no-underline" onClick={()=>navigate("/")}>Legal Disclaimer</button></li>
                        <li><button className=" text-slate-100 hover:text-slate-100 px-0 py-0  text-sm hover:no-underline" onClick={()=>navigate("/")}>Privacy Policy</button></li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className='text-slate-800 py-2 my-14' />
        <div className='mb-4'>
          <div className='text-center'>
           <ul className='flex flex-row justify-center items-center mb-4'>
            <li className='mr-2 text-lg'><h5>Register for free</h5></li>
            <li><button className="signUpbtn bg-rose-500 text-slate-100 text-xs   py-3 w-28 rounded-full" onClick={()=>navigate("/signUp")}>
                  SIGN UP!
                </button></li>
           </ul>
          </div>
          <hr className='text-slate-800 my-4' />
        </div>
        <div className="text-center mb-3 justify-center text-xl ">
          <button className="  px-2 " onClick={()=>navigate("/")}><FontAwesomeIcon icon={faFacebook} className="socialbtn items-center justify-center py-2 px-2 bg-gray-200 text-blue-900 hover:text-black text-xl rounded-full text "></FontAwesomeIcon></button>
          <button className="  px-2 " onClick={()=>navigate("/")}><FontAwesomeIcon icon={faTwitter} className="socialbtn items-center justify-center py-2 px-2 bg-sky-400 text-slate-100 hover:text-black text-xl rounded-full text "></FontAwesomeIcon></button>
          <button className="  px-2 " onClick={()=>navigate("/")}><FontAwesomeIcon icon={faGooglePlus} className="socialbtn items-center justify-center py-2 px-2 bg-gray-200 text-red-600 hover:text-black text-xl rounded-full text "></FontAwesomeIcon></button>
          <button className="  px-2 " onClick={()=>navigate("/")}><FontAwesomeIcon icon={faLinkedin} className="socialbtn items-center justify-center py-2 px-2 bg-gray-200 text-blue-800 hover:text-black text-xl rounded-full text "></FontAwesomeIcon></button>
          <button className="  px-2 " onClick={()=>navigate("/")}><FontAwesomeIcon icon={faInstagram} className="socialbtn items-center justify-center py-2 px-2 bg-sky-900 text-gray-100 hover:text-black text-xl rounded-full text "></FontAwesomeIcon></button>
          <button className="  px-2 " onClick={()=>navigate("/")}><FontAwesomeIcon icon={faEnvelope} className="socialbtn items-center justify-center py-2 px-2 bg-gray-800 text-gray-100 hover:text-black text-xl rounded-full text "></FontAwesomeIcon></button>
                  
        </div>
        <div className="footerCopyright flex bg-Footer-10">
          <div className="container text-center justify-center py-4 text-xs text-gray-300">
            <h1> © 2022 Copyright: RentalApp </h1>
          </div>

        </div>
        
      </footer>
      <ContactUs onClose={handleOnClose} visible={showMyModal}   />
    </div>
  )
}
