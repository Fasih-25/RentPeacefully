import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import logo from '../assets/ERT.png';
import "../App.css";
import { faGift, faHome, faAddressBook, faQuestionCircle, faExclamationCircle, faPlusSquare, faSignInAlt, faScrewdriverWrench, faUserAlt} from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
  return (
    <div className=''>
        <nav className="navbar pt-2.5 pb-2.5 navbar-expand-lg bg-NavBar-10 px-2 lg:!px-0  flex !items-center">
            <div className="container-fluid flex lg:!items-center items-left">
                 <img className='logoImage' height="30px !important" src={logo} alt=''></img>
                <Link className="navbar-brand text-slate-100 focus:text-slate-100 font-bold hover:!text-slate-300" to="/">RentalApp</Link>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse justify-between navbar-collapse lg:!items-center" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 lg:!mb-0 pt-1 justify-start items-start lg:!items-center ">
                    <li className="nav-item  px-2 lg:!px-0">
                    <Link className="nav-link btn lg:px-1 py-1  focus:bg-slate-300 focus:!text-slate-700 active:bg-sky-600 !text-slate-100 hover:!text-slate-300  " aria-current="page" to="/propertiesForRent"><FontAwesomeIcon icon={faHome} className="homeIcon"></FontAwesomeIcon> Properties for Rent</Link>
                    </li>
                    <li className="nav-item dropdown px-2 lg:!px-0">
                    <a className="nav-link dropdown-toggle  text-slate-100 hover:!text-slate-300 lg:btn lg:px-1 py-1 lg:focus:bg-slate-300 focus:text-slate-100 lg:focus:text-slate-700" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon={faAddressBook} className="homeIcon"></FontAwesomeIcon> Directory
                    </a>
                    <ul className="dropdown-menu ">
                        <div className='hover:bg-green-600'><li><button className="dropdown-item text-zinc-900 hover:bg-green-600  hover:!text-slate-100" onClick={()=>navigate("/topServiceProviders")}><FontAwesomeIcon icon={faScrewdriverWrench} className="homeIcon"></FontAwesomeIcon> Top Service Providers</button></li></div>
                        <div className='hover:bg-green-600'><li><button className="dropdown-item text-zinc-900 hover:bg-green-600  hover:!text-slate-100" onClick={()=>navigate("/topRealEstateAgents")}><FontAwesomeIcon icon={faUserAlt} className="homeIcon"></FontAwesomeIcon> Top Real Estate Agent</button></li></div>
                    </ul>
                    </li>
                    <li className="nav-item px-2  lg:!px-0">
                        <button className="nav-link text-slate-100 hover:!text-slate-300 active:bg-sky-600 btn lg:px-1 py-1  focus:bg-slate-300 focus:text-slate-700" onClick={()=>navigate("/pricing")}><FontAwesomeIcon icon={faGift} className="homeIcon"></FontAwesomeIcon> pricing</button>
                    </li> 
                </ul>
                 <ul className="navbar-nav    lg:mb-0 flex lg:!items-center lg:justify-end items-start flex-col lg:flex-row">
                    <li className='mx-2'><button className="btn dropdown-item lg:px-1 lg:py-1 text-slate-100 active:bg-sky-600 hover:bg-sky-800 focus:bg-slate-300 focus:text-slate-700 hover:!text-slate-300 pb-1 lg:!pb-0" onClick={()=>navigate("/fAQs")}><FontAwesomeIcon icon={faQuestionCircle} className="homeIcon"></FontAwesomeIcon> FAQ</button></li>
                    <li className='mx-2'><button className="btn dropdown-item lg:px-1 py-1 text-slate-100 active:bg-sky-600 hover:bg-sky-800 focus:bg-slate-300 focus:text-slate-700 hover:!text-slate-300 pb-1 lg:!pb-0" onClick={()=>navigate("/how-It-Works")}><FontAwesomeIcon icon={faExclamationCircle} className="homeIcon"></FontAwesomeIcon> How it works</button></li>
                    <li className='mx-2'><button className="btn dropdown-item lg:px-1 py-1 text-slate-100 active:bg-sky-600 hover:bg-sky-800 focus:bg-slate-300 focus:text-slate-700 hover:!text-slate-300   lg:!pb-0" onClick={()=>navigate("/signUp")}><FontAwesomeIcon icon={faPlusSquare} className="homeIcon"></FontAwesomeIcon> Create account</button></li>
                </ul>
                    <button className="btn text-slate-100 px-2 lg:px-3 py-1 hover:!text-slate-300   focus:bg-slate-300 focus:text-slate-700 pb-3 lg:!pb-0" type="submit" onClick={()=>navigate("/login")}><FontAwesomeIcon icon={faSignInAlt}  className="homeIcon"></FontAwesomeIcon> Login</button>
                </div>
            </div>
        </nav>
    </div>
  )
}
