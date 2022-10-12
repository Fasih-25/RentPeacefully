import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/ERT.png';
import { Link, useNavigate } from 'react-router-dom';
import { faGift, faHome, faAddressBook, faQuestionCircle, faExclamationCircle, faPlusSquare, faSignInAlt, faScrewdriverWrench, faUserAlt, faClockFour, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react'

export default function FirstNavBar() {
    const navigate = useNavigate();
  return (
    <div>
     <nav className="navbar  navbar-expand-lg bg-black px-2 lg:!px-0  flex !items-center">
            <div className="container-fluid flex lg:!items-center  lg:mx-20 justify-center !items-center lg:flex-row-reverse">
                 {/* <img className='logoImage' height="30px !important" src={logo} alt=''></img> */}
                {/* <Link className="navbar-brand text-gray-900 focus:text-gray-900 font-bold hover:!text-gray-700" to="/">RentalApp</Link> */}
                <div className='px-2 '>
                    <button className='bg-yellow-400 py-2 px-4 font-medium rounded-md text-white text-sm' onClick={()=>navigate("/signUp")}>BUYNOW</button> 
                </div>
                <div>
                <button className="navbar-toggler bg-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon  "></span>
                </button>
                </div>
                <div className="collapse justify-between navbar-collapse lg:!items-center lg:justify-end" id="navbarSupportedContent1">
                    <ul className="navbar-nav me-auto mb-2 lg:!mb-0 pt-1 justify-start items-start block lg:!hidden lg:!items-center  ">
                        <li className="nav-item  px-2 lg:!px-0">
                        <Link className="nav-link text-white hover:bg-yellow-400 focus:hover:bg-yellow-400 hover:text-slate-900 ease-in-out duration-500" aria-current="page" to="/propertiesForRent"><FontAwesomeIcon icon={faHome} className="homeIcon"></FontAwesomeIcon> Properties for Rent</Link>
                        </li>
                        <li className="nav-item dropdown px-2 lg:!px-0">
                        <a className="nav-link dropdown-toggle  text-white" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <FontAwesomeIcon icon={faAddressBook} className="homeIcon"></FontAwesomeIcon> Directory
                        </a>
                        <ul className="dropdown-menu px-2 ">
                            <div className=' hover:shadow-md'><li><button className="dropdown-item text-zinc-900 hover:bg-green-500  hover:!text-slate-50" onClick={()=>navigate("/topServiceProviders")}><FontAwesomeIcon icon={faScrewdriverWrench} className="homeIcon"></FontAwesomeIcon> Top Service Providers</button></li></div>
                            <div className=' hover:shadow-md'><li><button className="dropdown-item text-zinc-900 hover:bg-green-500  hover:!text-slate-50" onClick={()=>navigate("/topRealEstateAgents")}><FontAwesomeIcon icon={faUserAlt} className="homeIcon"></FontAwesomeIcon> Top Real Estate Agent</button></li></div>
                        </ul>
                        </li>
                        <li className="nav-item px-2 py-2 lg:!py-0 lg:!px-0">
                            <button className="text-white" onClick={()=>navigate("/pricing")}><FontAwesomeIcon icon={faGift} className="homeIcon"></FontAwesomeIcon> pricing</button>
                        </li> 
                    </ul>
                    <div className='lg:mx-5  lg:!px-0 flex    '>
                        <ul className='flex flex-col lg:flex-row '>
                            {/* <button className='text-white' onClick={()=>navigate("/login")}>LOGIN </button>  
                            <button className='text-white mx-2' onClick={()=>navigate("/signUp")}>/ REGISTER</button>    */}
                            <li className='pb-3 lg:!pb-0 px-2 '><button className=" text-slate-50 hover:bg-yellow-400 focus:hover:bg-yellow-400 hover:text-slate-900 ease-in-out duration-500  lg:px-2 rounded-sm" onClick={()=>navigate("/fAQs")}><FontAwesomeIcon icon={faQuestionCircle} className="homeIcon"></FontAwesomeIcon> FAQ</button></li>
                            <li className='pb-3 lg:!pb-0 px-2 '><button className=" text-slate-50 hover:bg-yellow-400 focus:hover:bg-yellow-400 hover:text-slate-900 ease-in-out duration-500  lg:px-2 rounded-sm" onClick={()=>navigate("/signUp")}><FontAwesomeIcon icon={faPlusSquare} className="homeIcon"></FontAwesomeIcon> SIGN UP</button></li>
                            <li className='pb-3 lg:!pb-0 px-2 '><button className=" text-slate-50 hover:bg-yellow-400 focus:hover:bg-yellow-400 hover:text-slate-900 ease-in-out duration-500  lg:px-2 rounded-sm" onClick={()=>navigate("/login")}><FontAwesomeIcon icon={faSignInAlt}  className="homeIcon"></FontAwesomeIcon> LOGIN</button></li>
                        </ul>    
                    </div>
                </div>
            </div>
            
        </nav>
        
    </div>
  )
}






