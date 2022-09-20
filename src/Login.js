import React from 'react'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import { Select, Option } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUserAlt, faLock} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

export default function Login() {
    let navigate = useNavigate();
    function handleForgetPassword()
  {
    navigate("/forgotPassword")
  }
 function handleEmailVerifiy()
  {
    navigate("/emailVerification")
  }
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
            <div className='flex justify-center items-center w-full px-6 py-4 mt-7 overflow-hidden shadowBox bg-sky-800 shadow-md sm:max-w-lg sm:rounded-lg z-10'>
                  <h3 className="text-4xl text-slate-50">
                    Login
                  </h3>
            </div>  
            <div className="w-full px-6 py-4 outline-sky-600 border overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg ">
                <form>
                    <div className="mt-4">
                        {/* <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Email
                        </label> */}
                        <div className="flex flex-row items-center justify-center mt-4">
                            <FontAwesomeIcon icon={faEnvelope} className=" text-3xl text-gray-400 "></FontAwesomeIcon>
                            <input
                                type="email"
                                placeholder='Email'
                                name="email"
                                className="block w-full px-2 xl:!py-3 py-2 mx-3 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        {/* <label
                            htmlFor="password_confirmation"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Confirm Password
                        </label> */}
                        <div className="flex flex-row items-center justify-center mt-4">
                            <FontAwesomeIcon icon={faLock} className=" text-3xl text-gray-400 "></FontAwesomeIcon>
                            <input
                                type="password"
                                placeholder='Password'
                                name="password_confirmation"
                                className="block w-full xl:!py-3 px-2 py-2 mx-3 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                    </div>
                  
                    <div className="flex items-center mt-4">
                        <button className="w-full px-4 py-3 mx-24   tracking-wide text-white transition-colors duration-200 transform bg-teal-500 shadowBox  rounded-md focus:outline-none">
                            LOG IN
                        </button>
                    </div>
                    <hr className='mt-3' />
                </form>
                <div className="mt-4 text-grey-600 text-center">
                    Don't have an account?{" "}
                    <span>
                        <button className="text-sky-500 hover:underline" onClick={()=>navigate("/SignUp")}>
                            Sign up
                        </button>
                    </span>
                </div>
                <div className="mt-1 text-grey-600 text-center">
                    Resend?{" "}
                    <span>
                        <button onClick={handleEmailVerifiy} className="text-sky-500 hover:underline" >
                            email verification link
                        </button>
                    </span>
                </div>
              <div className='text-center'> 
                <button
                  onClick={handleForgetPassword}
                  className="text-sm text-sky-500 hover:underline"
                >
                    Forget Password?
                </button>
              </div>
            </div>
        </div>
        </div>
      <Footer />
    </div>
  )
}
