import {React, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import logo from '../assets/ERT.png';
import "../App.css";
import ContactUs from './ContactUs';
import { faGift, faHome, faAddressBook, faQuestionCircle, faExclamationCircle, faPlusSquare, faSignInAlt, faScrewdriverWrench, faUserAlt, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [showMyModal, setShowMyModal] = useState(false)
    const handleOnClose = () => setShowMyModal(false)
    const navigate = useNavigate();
  return (
    <div className=''>
        <nav className="navbar pt-2.5 pb-2.5 navbar-expand-lg bg-slate-50 px-2 lg:!px-0  flex items-center justify-center lg:justify-around">
            <div className='flex flex-row'>
                <img className='logoImage' height="30px !important" src={logo} alt=''></img>
                <Link className="navbar-brand text-gray-900 focus:text-gray-900 font-bold hover:!text-gray-700" to="/">RentalApp</Link>
            </div>
            <div className=" flex items-center justify-between"> 
                <button className="navbar-toggler hidden" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse justify-between navbar-collapse lg:!items-center " id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 lg:!mb-0 pt-1 justify-start items-start lg:!items-center ">
                    <li className="nav-item  px-2 lg:!px-0 mx-3">
                    <Link className="nav-link btn lg:px-1   focus:bg-gray-400 focus:!text-gray-800 active:bg-gray-400 !text-gray-900 hover:!text-gray-700  hover:!bg-gray-300 " aria-current="page" to="/propertiesForRent"><FontAwesomeIcon icon={faHome} className="homeIcon"></FontAwesomeIcon> Properties for Rent</Link>
                    </li>
                    <li className="nav-item dropdown px-2 lg:!px-0 mx-3 ">
                    <a className="nav-link dropdown-toggle rounded-md  text-gray-900 hover:!text-gray-700 hover:!bg-gray-300 lg:btn lg:px-1  lg:focus:bg-gray-400 lg:focus:!text-gray-700" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon={faAddressBook} className="homeIcon"></FontAwesomeIcon> Directory
                    </a>
                    <ul className="dropdown-menu px-2 ">
                        <div className=' hover:shadow-md'><li><button className="dropdown-item text-zinc-900 hover:bg-green-500  hover:!text-slate-50" onClick={()=>navigate("/topServiceProviders")}><FontAwesomeIcon icon={faScrewdriverWrench} className="homeIcon"></FontAwesomeIcon> Top Service Providers</button></li></div>
                        <div className=' hover:shadow-md'><li><button className="dropdown-item text-zinc-900 hover:bg-green-500  hover:!text-slate-50" onClick={()=>navigate("/topRealEstateAgents")}><FontAwesomeIcon icon={faUserAlt} className="homeIcon"></FontAwesomeIcon> Top Real Estate Agent</button></li></div>
                    </ul>
                    </li>
                    <li className="nav-item px-2  lg:!px-0 mx-3">
                        <button className="nav-link text-gray-900 hover:!text-gray-700 hover:!bg-gray-300 active:bg-gray-300 btn lg:px-1 py-2  focus:bg-gray-300 focus:text-slate-700 border-0 outline-0" onClick={()=>navigate("/pricing")}><FontAwesomeIcon icon={faGift} className="homeIcon"></FontAwesomeIcon> pricing</button>
                    </li>
                    <li className='nav-item px-2  lg:!px-0 mx-3'>
                        <button className=" text-gray-900 px-2 lg:px-3 py-2  hover:!text-gray-700 hover:!bg-gray-300  focus:bg-gray-300 focus:text-gray-700 " type="submit" onClick={()=>setShowMyModal(true)}><FontAwesomeIcon icon={faPhoneAlt}  className="homeIcon"></FontAwesomeIcon> Contact Us </button>
                    </li> 
                </ul>
                 <ul className="navbar-nav    lg:mb-0 flex lg:!items-center lg:justify-end items-start flex-col lg:flex-row">
                    <li className='mx-2 hidden'><button className="btn dropdown-item lg:px-1 lg:py-1 text-gray-900 active:bg-gray-300 hover:!bg-gray-300 focus:bg-gray-300 focus:text-gray-700 hover:!text-gray-700 pb-1 lg:!pb-0" onClick={()=>navigate("/fAQs")}><FontAwesomeIcon icon={faQuestionCircle} className="homeIcon"></FontAwesomeIcon> FAQ</button></li>
                    <li className='mx-2 hidden'><button className="btn dropdown-item lg:px-1 py-1 text-gray-900 active:bg-gray-300 hover:!bg-gray-300 focus:bg-slate-300 focus:text-gray-700 hover:!text-gray-700 pb-1 lg:!pb-0" onClick={()=>navigate("/how-It-Works")}><FontAwesomeIcon icon={faExclamationCircle} className="homeIcon"></FontAwesomeIcon> How it works</button></li>
                    <li className='mx-2 hidden'><button className="btn dropdown-item lg:px-1 py-1 text-gray-900 active:bg-gray-300 hover:!bg-gray-300 focus:bg-slate-300 focus:text-gray-700 hover:!text-gray-700   lg:!pb-0" onClick={()=>navigate("/signUp")}><FontAwesomeIcon icon={faPlusSquare} className="homeIcon"></FontAwesomeIcon> Create account</button></li>
                </ul>
                    <button className=" hidden btn text-gray-900 px-2 lg:px-3 py-1 hover:!text-gray-700 hover:!bg-gray-300  focus:bg-gray-300 focus:text-gray-700 pb-3 lg:!pb-0" type="submit" onClick={()=>navigate("/login")}><FontAwesomeIcon icon={faSignInAlt}  className="homeIcon"></FontAwesomeIcon> Login</button>
                </div>
            </div>
            {/* <div className='hidden lg:block'>
                <button className=" text-gray-900 px-2 lg:px-3 py-2 pt-3 hover:!text-gray-700 hover:!bg-gray-300  focus:bg-gray-300 focus:text-gray-700 " type="submit" onClick={()=>setShowMyModal(true)}><FontAwesomeIcon icon={faPhoneAlt}  className="homeIcon"></FontAwesomeIcon> Contact Us </button>
            </div> */}
        </nav>
        <ContactUs onClose={handleOnClose} visible={showMyModal}   />
    </div>
  )
}
