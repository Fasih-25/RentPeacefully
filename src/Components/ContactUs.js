import {React, useState} from 'react'
import { Select, Option } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClose, faEnvelope,faLock, faPaperPlane, faPencil, faTag, faUserAlt} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
export default function ContactUs({visible, onClose}) {
    const [usertype, setusertype] = useState("")
    const [username, setusername] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let item={username, email, password, usertype}
    let navigate = useNavigate();
    const handleOnClose = (e) => {
        if(e.target.id ==='container') onClose();
    };
    const Close = (e) => {
      onClose();
    };

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
    if(!visible) return null;
  return (
    <div>
      <div id='container' onClick={handleOnClose}  className='fixed inset-0 bg-slate-900 bg-opacity-30 backdrop-blur-sm flex justify-center  items-center z-10'>
      <div className='bg-white p-2 rounded first-letter:'>
        
        <div className="flex flex-col items-right  min-h-fit w-full pt-2 sm:justify-center sm:pt-0 bg-gray-50 ">
        <div className=' flex justify-end items-end z-10  '>
            <h1 className=' bg-slate-500 rounded-full px-2 py-1 cursor-pointer' onClick={Close}><FontAwesomeIcon icon={faClose} className=" text-base text-gray-50 hover:text-black "></FontAwesomeIcon></h1>
        </div>
            <div className='flex justify-center items-center w-full px-6 py-4 mt-3 overflow-hidden shadowBox bg-sky-800 shadow-md sm:max-w-lg sm:rounded-lg z-10'>
                  <h3 className="text-4xl text-slate-50">
                    Contact Us
                  </h3>
            </div>  
            <div className="w-full px-6 py-4 outline-sky-600 border overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg ">
                <form >
                  {/* <div className="w-full">
                    <Select className='flex justify-center text-center items-center' onChange={(e)=>setusertype(e.target.value)}>
                      <Option value={"i am Tenant"} Select="Selected" className=' text-blue-500 font-bold hover:bg-teal-600 hover:text-white'>I am a Tenant</Option>
                      <Option value={"i am Landlord"} className='text-blue-500 font-bold hover:bg-teal-600 hover:text-white'>I am a Landlord</Option>
                      <Option value={"i am Service Provider"} className='text-blue-500 font-bold hover:bg-teal-600 hover:text-white'>I am a Service Provider</Option>
                      <Option value={"i am Real Estate Agent"} className='text-blue-500 font-bold hover:bg-teal-600 hover:text-white'>I am a Real Estate Agent</Option>
                    </Select>
                  </div> */}
                    <div>
                        <div className="flex flex-row items-center justify-center mt-4">
                            <FontAwesomeIcon icon={faUserAlt} className=" text-3xl text-gray-400 "></FontAwesomeIcon>
                            <input
                                type="text"
                                placeholder='First Name'
                                required
                                // name="username"
                                value={username}
                                onChange={(e)=>setusername(e.target.value)}
                                className="block w-full px-2 xl:!py-3 py-2 mx-3 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                    </div>
                    {/* <div>
                        <div className="flex flex-row items-center justify-center mt-4">
                            <FontAwesomeIcon icon={faUserAlt} className=" text-3xl text-gray-400 "></FontAwesomeIcon>
                            <input
                                type="text"
                                required
                                placeholder='Last Name'
                                // name="lastName"
                                value={lastName}
                                onChange={(e)=>setlastName(e.target.value)}
                                className="block w-full px-2 xl:!py-3 py-2 mx-3 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                    </div> */}
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
                    <div className="mt-4">
                        <div className="flex flex-row items-center justify-center mt-4">
                            <FontAwesomeIcon icon={faTag} className=" text-3xl text-gray-400 "></FontAwesomeIcon>
                            <input
                                type="text"
                                required
                                placeholder='Subject'
                                // name="password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                className="block w-full px-2 xl:!py-3 py-2 mx-3 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex flex-row items-center justify-center mt-4">
                            <FontAwesomeIcon icon={faPencil} className=" text-3xl text-gray-400 "></FontAwesomeIcon>
                            <input
                                type="Text"
                                required
                                placeholder='Your Message'
                                // name="email"
                                className="block w-full px-2 xl:!py-3 py-2 mx-3 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        {/* {(setPassword !== setretypePassword ) ? (<span className='text-red-600 font-semibold'>Password dosen't matched</span>)  : ("")} */}
                    </div>
                  
                    <div className="flex items-center flex-col mt-4">
                        <button onClick={handleSelect} className="w-full px-4 py-3 mx-5  tracking-wide text-white transition-colors duration-200 transform bg-purple-400 shadowBox  rounded-md focus:outline-none">
                            SEND<FontAwesomeIcon icon={faPaperPlane} className="mx-2 text-xl text-slate-50"></FontAwesomeIcon>
                        </button>
                        {/* <button onClick={onClose} className=" mt-2 w-full px-4 py-3 mx-5  tracking-wide text-white transition-colors duration-200 transform bg-red-500 shadowBox  rounded-md focus:outline-none">
                            Close
                        </button> */}
                    </div>
                    <hr className='mt-3' />
                </form>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}
