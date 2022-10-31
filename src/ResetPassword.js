import {React, useState} from 'react'
import "./App.css";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Select, Option } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope,faLock, faPhoneAlt, faUserAlt} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import FirstNavBar from './Components/FirstNavBar';

export default function ResetPassword() {
    const [reTypePassword, setReTypePassword] = useState("")
    const [userType, setUserType] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("");
    let navigate = useNavigate();

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if(userType =="" || password.length<6 || userName == "" || phoneNo == "" || email == ""){
            
                if(userType==""){
                    alert("Please Select User Type")
                }
                if(password.length<6){
                // alert("password needs atleast 6 charaters")
                    setMessage("password needs atleast 6 charaters"); 
                }
            }
            else
            {
                const requestOptions = {
                    method: 'POST',
                    headers: {    
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*' },
                    body: JSON.stringify({ userName, email, password, phoneNo, userType})};
                    
                let res = await fetch("https://nodejs-rental-api.herokuapp.com/user/register",requestOptions);
                
                let resJson = await res.json();
                //   if (res.status === 200) {
                    if (resJson.message === "The email address you have entered is already associated with another account.") {
                    setUserName("");
                    setEmail("");
                    setPhoneNo("");
                    setUserType("");
                    setPassword("");
                    setMessage("");
                    console.log(userType, userName,email,password,phoneNo)
                    // setMessage("User created successfully");
                    // navigate("/")
                    alert("This Email is already registered, Please Try Different one");
                } else {
                    // setMessage("Some error occured");
                    navigate("/")
                }
            }

        } catch (err) {
          console.log(err);
        }
      };
        
        // const [retypePassword, setretypePassword] = useState("")

  return (
    <div>
        <FirstNavBar />
        <Navbar />
            <div>
                <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                    <div className='flex justify-center items-center w-full px-6 py-4 mt-7 overflow-hidden shadowBox bg-sky-800 shadow-md sm:max-w-lg sm:rounded-lg z-10'>
                        <h3 className="text-4xl text-slate-50 text-center">
                            RESET PASSWORD
                        </h3>
                    </div>  
                    <div className="w-full px-6 py-4 outline-sky-600 border overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg ">
                        <form onSubmit={handleSubmit}>
                            <div className="mt-4">
                                <div className="flex flex-row items-center justify-center mt-4">
                                    <FontAwesomeIcon icon={faLock} className=" text-3xl text-gray-400 "></FontAwesomeIcon>
                                    <input
                                        type="password"
                                        required
                                        placeholder='Password'
                                        name="password"
                                        value={password}
                                        onChange={(e)=>setPassword(e.target.value)}
                                        className="block w-full px-2 xl:!py-3 py-2 mx-3 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                                <div className="message flex justify-center items-center text-red-600 font-bold pt-2">{message ? <p>{message}</p> : null}</div>
                            </div>
                            <div className="mt-4">
                                <div className="flex flex-row items-center justify-center mt-4">
                                    <FontAwesomeIcon icon={faLock} className=" text-3xl text-gray-400 "></FontAwesomeIcon>
                                    <input
                                        type="password"
                                        required
                                        value={reTypePassword}
                                        placeholder='Confirm Password'
                                        onChange={(e)=>setReTypePassword(e.target.value)}
                                        // name="password_confirmation" 
                                        className="block w-full xl:!py-3 px-2 py-2 mx-3 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>    
                            </div>
                            <div className=' !my-4'>
                                {(password !== reTypePassword) ? (<span className='text-red-600 font-semibold !my-4'>Password dosen't matched</span>)  : ("")}
                            </div>
                            <div className="flex items-center mt-4">
                                <button type='submit'  className="w-full px-4 py-3 mx-5  tracking-wide text-white transition-colors duration-200 transform bg-teal-500 shadowBox  rounded-md focus:outline-none">
                                    RESET PASSWORD
                                </button>
                            </div>
                            {/* <div className="message">{messag    e ? <p>{message}</p> : null}</div> */}
                            <hr className='mt-3' />
                        </form>
                        {/* <div className="mt-4 text-grey-600 text-center">
                            Already have an account?{" "}
                            <span>
                                <button className="text-sky-500 hover:underline" onClick={()=>navigate("/login")}>
                                    Log in
                                </button>
                            </span>
                        </div> */}
                        {/* <div className='text-center'> 
                            <a
                            href="#"
                            className="text-sm text-sky-500 hover:underline"
                            >
                                Forget Password?
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
        <Footer />
    </div>
  )
}
//this is for checking.