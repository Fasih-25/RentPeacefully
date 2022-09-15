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
        <nav className="navbar pt-2.5 pb-2.5 navbar-expand-lg bg-sky-800  ">
            <div className="container-fluid  ">
                 <img className='logoImage' height="30px !important" src={logo} alt=''></img>
                <Link className="navbar-brand text-white font-bold text" to="/">RentalApp</Link>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse justify-between navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item text-white px-2 lg:!px-0">
                    <Link className="nav-link active text-white hover:text-white" aria-current="page" to="/propertiesForRent"><FontAwesomeIcon icon={faHome} className="homeIcon"></FontAwesomeIcon> Properties for Rent</Link>
                    </li>
                    <li className="nav-item dropdown px-2 lg:!px-0">
                    <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon={faAddressBook} className="homeIcon"></FontAwesomeIcon> Directory
                    </a>
                    <ul className="dropdown-menu ">
                        <div className='hover:bg-green-600'><li><button className="dropdown-item text-zinc-900 hover:bg-green-600  hover:text-white" onClick={()=>navigate("/topServiceProviders")}><FontAwesomeIcon icon={faScrewdriverWrench} className="homeIcon"></FontAwesomeIcon> Top Servie Proiders</button></li></div>
                        <div className='hover:bg-green-600'><li><button className="dropdown-item text-zinc-900 hover:bg-green-600  hover:text-white" onClick={()=>navigate("/topRealEstateAgents")}><FontAwesomeIcon icon={faUserAlt} className="homeIcon"></FontAwesomeIcon> Top Real Estate Agent</button></li></div>
                    </ul>
                    </li>
                    <li className="nav-item px-2 lg:!px-0">
                        <button className="nav-link text-white" onClick={()=>navigate("/pricing")}><FontAwesomeIcon icon={faGift} className="homeIcon"></FontAwesomeIcon> pricing</button>
                    </li> 
                </ul>
                <form className="d-flex lg:items-center items-start flex-col lg:flex-row" role="search">
                <ul className="navbar-nav me-auto pt-1  mb-lg-0">
                    <li className='mx-2'><button className="dropdown-item text-white hover:text-white hover:bg-sky-800 " onClick={()=>navigate("/fAQs")}><FontAwesomeIcon icon={faQuestionCircle} className="homeIcon"></FontAwesomeIcon> FAQ</button></li>
                    <li className='mx-2'><button className="dropdown-item text-white hover:text-white hover:bg-sky-800 " onClick={()=>navigate("/")}><FontAwesomeIcon icon={faExclamationCircle} className="homeIcon"></FontAwesomeIcon> How it works</button></li>
                    <li className='mx-2'><button className="dropdown-item text-white hover:text-white hover:bg-sky-800 " onClick={()=>navigate("/signUp")}><FontAwesomeIcon icon={faPlusSquare} className="homeIcon"></FontAwesomeIcon> Create account</button></li>
                </ul>
                    <button className="btn text-white px-2 lg:px-3 py-1" type="submit" onClick={()=>navigate("/login")}><FontAwesomeIcon icon={faSignInAlt}  className="homeIcon"></FontAwesomeIcon> Login</button>
                </form>
                </div>
            </div>
        </nav>
    </div>
  )
}
