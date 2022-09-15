import {React, useState}from 'react'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

export default function EmailVerification() {
  let navigate = useNavigate(); 
  const [email, setEmail] = useState("")
  let item={ email}
 async function handleSelect()
  {
      // console.warn(username, lastName, email,password)
      console.info(item)
      
      // let result = await fetch("localhost:3001/user/register",{
      //     method:'POST',
      //     headers:{
      //         "Content-Type":"application/json",
      //         "Accept":"application/json"
      //     },
      //     body:JSON.stringify(item)
      // })
      ////////////////////////////////////////////////////////////////////////////
      // .then((Response) => Response.json())
      // .then((result) => {

      //   if (result.Status == 'Success')

      //           navigate("/Dashboard");

      //   else

      //     alert('Sorrrrrry !!!! Un-authenticated User !!!!!')
      // })
      // result = await result.json()
      // console.warn("Result = ",result)
      
  }
  function handlelogin()
  {
    navigate("/login")
  }
  
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
            <div className='flex justify-center items-center w-full px-6 py-4 mt-7 overflow-hidden shadowBox bg-cyan-600 shadow-md sm:max-w-lg sm:rounded-lg z-10'>
                  <h3 className="text-4xl text-slate-50">
                    Email Verification
                  </h3>
            </div>  
            <div className="w-full px-6 py-4 outline-sky-600 border overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg ">
                <form >
                  <h2 className='flex justify-center items-center text-center text-2xl py-3 pb-4'>Enter your email and we will send an email verification link to you</h2>
                    <div className="mt-4">
                        <div className="flex flex-row items-center justify-center mt-4">
                            <FontAwesomeIcon icon={faEnvelope} className=" text-3xl text-gray-400 "></FontAwesomeIcon>
                            <input
                                type="email"
                                required
                                placeholder='Email'
                                // name="email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                className="block w-full px-2 xl:!py-3 py-2 mx-3 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                    </div>
                    <div className="flex items-center mt-4">
                      <button onClick={handleSelect} className="w-full px-4 py-3 mx-5  tracking-wide text-white transition-colors duration-200 transform bg-teal-500 shadowBox  rounded-md focus:outline-none">
                          SEND LINK
                      </button>
                    </div>
                    <hr className='mt-3' />
                </form>
                <div className="mt-4 text-grey-600 text-right">
                    <span>
                        <button className="text-sky-500 hover:underline" onClick={handlelogin}>
                            Log in
                        </button>
                    </span>
                </div>
            </div>
        </div>
        </div>
      <Footer />
    </div>
  )
}
