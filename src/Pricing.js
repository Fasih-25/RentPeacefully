import { Link } from 'react-router-dom';
import React from 'react'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCertificate, faDiamond} from '@fortawesome/free-solid-svg-icons';

export default function Pricing() {
  return (
    <div>
      <Navbar />
        <div className='mx-2'>
            <div className='flex justify-center items-center pt-3'>
                <h1 className='font-semibold text-4xl '>Our princing plans</h1>
            </div>
            <div className='flex justify-center items-center pt-3'>
                <p className='py-3 text-gray-400 font-bold text-center '>Try a RentalApp plan. Designed to maximise your success.</p>
            </div>
        </div>
        <div className='flex justify-center py-4 pb-3 mx-2 items-center '>
          <div className='pricingDetails w-full sm:w-2/4   shadowBox '>
            <div className='bg-neutral-600 bg-opacity-60'>
              <div className='text-white flex justify-center py-3 text-3xl font-normal text-center'>
                <h2>Free plan?</h2>
              </div>
              <div className='text-white flex justify-center py-2 font-normal text-center'>
                <h5>The initial free plans includes:</h5>
              </div>
              <div className='text-white flex justify-center py-2 font-normal text-center'>
                <h5><strong>Tenants:</strong>Unlimited free applications.</h5>
              </div>
              <div className='text-white flex justify-center py-2 font-normal text-center'>
                <h5><strong>Landlord:</strong>Up to 2 active listings.</h5>
              </div>
              <div className='text-white flex justify-center py-2 font-normal text-center'>
                <h5><strong>Real Estate Agents:</strong>Up to 2 active listings which include Smart Sontract.</h5>
              </div>
              <div className='text-white flex justify-center py-2 font-normal text-center'>
                <h5><strong>Service Providers:</strong>Up to 2 advertisements.</h5>
              </div>
              <div className='text-white flex justify-center py-4 font-normal text-center'>
                <Link className='bg-transparent border-2  border-white  py-2 px-5 mb-3 hover:text-white shadowBox' to="/signUp"> Register </Link>
              </div>
            </div>
          </div>
        </div> 
        <div className="py-3 my-2 flex flex-wrap 2xl:flex-row justify-center lg:justify-around ">
          <div className="pricingPlans h-fit   2xl:w-1/4 rounded-md shadowBox">
            <div className='bg-indigo-700 h-fit bg-opacity-70  pb-4 rounded-md'>
              <div className='flex justify-center items-center text-center py-3'>
              <FontAwesomeIcon icon={faCertificate} className=" text-xl text-slate-50 "></FontAwesomeIcon><h3 className='  text-2xl text-slate-50 px-1'> Basic</h3>
              </div> 
              <div className='flex text-center justify-center items-center py-3'>
                <sup className='text-3xl text-slate-50 mb-2'>$</sup><h1 className='text-slate-50 text-7xl'>4.95<span className='font-thin text-slate-50 text-3xl'>/mo</span></h1>
              </div>
              <div className='pb-2 pt-4 flex justify-center items-center'>
                <h1 className='font-bold text-slate-50 text-lg'>Tenants</h1>
              </div>
              <div className='pt-3 pb-1  flex justify-center items-center'>
                <h1 className=' text-white text-base '>Unlimited applications</h1>  
              </div>
              <hr className='text-white bg-white font-bold pb-0 px-4 mx-14'/>
              
               <div className='pt-5 pb-3 flex justify-center items-center '>
                  <h1 className='font-bold text-white text-lg'>Landlords</h1>
               </div>
               <div className='pt-3 pb-1  flex justify-center items-center'>
                  <h1 className=' text-white text-base'>Upto <span className='font-bold'>7</span> Active Listings</h1>
              </div>
              <hr className='text-white bg-white font-bold pb-0 px-4 mx-14'/>
              
              <div className='pt-5 pb-3 flex justify-center items-center '>
                  <h1 className='font-bold text-white text-lg'>Real Estate Agents</h1>
              </div>
              <div className='pt-3 pb-1  flex justify-center items-center'>
                  <h1 className=' text-white text-base px-11 text-center'>Upto <span className='font-bold'>7</span> Active Listings Which Includes Smart Contract</h1>
              </div>
              <hr className='text-white bg-white font-bold pb-0 px-4 mx-14'/>
              <div className='pt-3 pb-1  flex justify-center items-center'>
                  <h1 className=' text-white text-base '>Inclusion in Agents Search Engine</h1>
              </div>
              <hr className='text-white bg-white font-bold pb-0 px-4 mx-14'/>
             
              <div className='pt-5 pb-3 flex justify-center items-center '>
                  <h1 className='font-bold text-white text-lg'>Service Providers</h1>
              </div>
              <div className='pt-3 pb-1  flex justify-center items-center'>
                  <h1 className=' text-white text-base '>Upto <span className='font-bold'>7</span> advertisements</h1>
              </div>
              <hr className='text-white bg-white font-bold pb-0 px-4 mx-14'/>
              <div className='pt-3 pb-1  flex justify-center items-center'>
                  <h1 className=' text-white text-base '>Inclusion in Service Providers Search Engine</h1>
              </div>
              <hr className='text-white bg-white font-bold pb-0 px-4 mx-14 '/>
            </div>
          </div>

          
          <div className="pricingPlans h-fit mt-7 lg:mt-0  2xl:w-1/4 rounded-md shadowBox">
            <div className='bg-fuchsia-800 h-fit bg-opacity-70  pb-4 rounded-md'>
              <div className='flex justify-center items-center text-center py-3'>
              <FontAwesomeIcon icon={faCertificate} className=" text-xl text-slate-50 "></FontAwesomeIcon><h3 className='  text-2xl text-slate-50 px-1'> Plus</h3>
              </div> 
              <div className='flex text-center justify-center items-center py-3'>
                <sup className='text-3xl text-slate-50 mb-2'>$</sup><h1 className='text-slate-50 text-7xl'>9.95<span className='font-thin text-slate-50 text-3xl'>/mo</span></h1>
              </div>
              <div className='pb-2 pt-4 flex justify-center items-center'>
                <h1 className='font-bold text-slate-50 text-lg'>Tenants</h1>
              </div>
              <div className='pt-3 pb-1  flex justify-center items-center'>
                <h1 className=' text-white text-base '><span className='font-bold'>Unlimited</span> applications</h1>  
              </div>
              <hr className='text-white bg-white font-bold pb-0 px-4 mx-14'/>
              
               <div className='pt-5 pb-3 flex justify-center items-center '>
                  <h1 className='font-bold text-white text-lg'>Landlords</h1>
               </div>
               <div className='pt-3 pb-1  flex justify-center items-center'>
                  <h1 className=' text-white text-base'>Upto <span className='font-bold'>15</span> Active Listings</h1>
              </div>
              <hr className='text-white bg-white font-bold pb-0 px-4 mx-14'/>
              
              <div className='pt-5 pb-3 flex justify-center items-center '>
                  <h1 className='font-bold text-white text-lg'>Real Estate Agents</h1>
              </div>
              <div className='pt-3 pb-1  flex justify-center items-center'>
                  <h1 className=' text-white text-base px-11 text-center'>Upto <span className='font-bold'>15</span> Active Listings Which Includes Smart Contract</h1>
              </div>
              <hr className='text-white bg-white font-bold pb-0 px-4 mx-14'/>
              <div className='pt-3 pb-1  flex justify-center items-center'>
                  <h1 className=' text-white text-base '>Inclusion in Agents Search Engine</h1>
              </div>
              <hr className='text-white bg-white font-bold pb-0 px-4 mx-14'/>
             
              <div className='pt-5 pb-3 flex justify-center items-center '>
                  <h1 className='font-bold text-white text-lg'>Service Providers</h1>
              </div>
              <div className='pt-3 pb-1  flex justify-center items-center'>
                  <h1 className=' text-white text-base '>Upto <span className='font-bold'>15</span> advertisements</h1>
              </div>
              <hr className='text-white bg-white font-bold pb-0 px-4 mx-14'/>
              <div className='pt-3 pb-1  flex justify-center items-center'>
                  <h1 className=' text-white text-base '>Inclusion in Service Providers Search Engine</h1>
              </div>
              <hr className='text-white bg-white font-bold pb-0 px-4 mx-14 '/>
            </div>
          </div>



          <div className="pricingPlans h-fit mt-7 2xl:mt-0 2xl:w-1/4 rounded-md shadowBox">
            <div className='bg-teal-600 h-fit bg-opacity-70  pb-4 rounded-md'>
              <div className='flex justify-center items-center text-center py-3'>
              <FontAwesomeIcon icon={faCertificate} className=" text-xl text-slate-50 "></FontAwesomeIcon><h3 className='  text-2xl text-slate-50 px-1'> Professional</h3>
              </div> 
              <div className='flex text-center justify-center items-center py-3'>
                <sup className='text-3xl text-slate-50 mb-2'>$</sup><h1 className='text-slate-50 text-7xl'>14.95<span className='font-thin text-slate-50 text-3xl'>/mo</span></h1>
              </div>
              <div className='pb-2 pt-4 flex justify-center items-center'>
                <h1 className='font-bold text-slate-50 text-lg'>Tenants</h1>
              </div>
              <div className='pt-3 pb-1  flex justify-center items-center'>
                <h1 className=' text-white text-base '><span className='font-bold'>Unlimited</span> applications</h1>  
              </div>
              <hr className='text-white bg-white font-bold pb-0 px-4 mx-14'/>
              
               <div className='pt-5 pb-3 flex justify-center items-center '>
                  <h1 className='font-bold text-white text-lg'>Landlords</h1>
               </div>
               <div className='pt-3 pb-1  flex justify-center items-center'>
                  <h1 className=' text-white text-base'>Upto <span className='font-bold'>20</span> Active Listings</h1>
              </div>
              <hr className='text-white bg-white font-bold pb-0 px-4 mx-14'/>
              
              <div className='pt-5 pb-3 flex justify-center items-center '>
                  <h1 className='font-bold text-white text-lg'>Real Estate Agents</h1>
              </div>
              <div className='pt-3 pb-1  flex justify-center items-center'>
                  <h1 className=' text-white text-base px-11 text-center'>Upto <span className='font-bold'>20</span> Active Listings Which Includes Smart Contract</h1>
              </div>
              <hr className='text-white bg-white font-bold pb-0 px-4 mx-14'/>
              <div className='pt-3 pb-1  flex justify-center items-center'>
                  <h1 className=' text-white text-base '>Inclusion in Agents Search Engine</h1>
              </div>
              <hr className='text-white bg-white font-bold pb-0 px-4 mx-14'/>
             
              <div className='pt-5 pb-3 flex justify-center items-center '>
                  <h1 className='font-bold text-white text-lg'>Service Providers</h1>
              </div>
              <div className='pt-3 pb-1  flex justify-center items-center'>
                  <h1 className=' text-white text-base '>Upto <span className='font-bold'>20</span> advertisements</h1>
              </div>
              <hr className='text-white bg-white font-bold pb-0 px-4 mx-14'/>
              <div className='pt-3 pb-1  flex justify-center items-center'>
                  <h1 className=' text-white text-base '>Inclusion in Service Providers Search Engine</h1>
              </div>
              <hr className='text-white bg-white font-bold pb-0 px-4 mx-14 '/>
            </div>
          </div>



          <div className="pricingPlans h-fit mt-7 2xl:mt-0  2xl:w-1/4 rounded-md shadowBox">
            <div className='bg-amber-500 h-fit bg-opacity-70  pb-4 rounded-md'>
              <div className='flex justify-center items-center text-center py-3'>
              <FontAwesomeIcon icon={faDiamond} className=" text-xl text-slate-50 "></FontAwesomeIcon><h3 className='  text-2xl text-slate-50 px-1'> Enterprise</h3>
              </div> 
              <div className='flex text-center justify-center items-center py-3'>
                <sup className='text-3xl text-slate-50 mb-2'>$</sup><h1 className='text-slate-50 text-7xl'>19.95<span className='font-thin text-slate-50 text-3xl'>/mo</span></h1>
              </div>
              <div className='pb-2 pt-4 flex justify-center items-center'>
                <h1 className='font-bold text-slate-50 text-lg'>Tenants</h1>
              </div>
              <div className='pt-3 pb-1  flex justify-center items-center'>
                <h1 className=' text-white text-base '><span className='font-bold'>Unlimited</span> applications</h1>  
              </div>
              <hr className='text-white bg-white font-bold pb-0 px-4 mx-14'/>
              
               <div className='pt-5 pb-3 flex justify-center items-center '>
                  <h1 className='font-bold text-white text-lg'>Landlords</h1>
               </div>
               <div className='pt-3 pb-1  flex justify-center items-center'>
                  <h1 className=' text-white text-base'><span className='font-bold'>Unlimited</span> Active Listings</h1>
              </div>
              <hr className='text-white bg-white font-bold pb-0 px-4 mx-14'/>
              
              <div className='pt-5 pb-3 flex justify-center items-center '>
                  <h1 className='font-bold text-white text-lg'>Real Estate Agents</h1>
              </div>
              <div className='pt-3 pb-1  flex justify-center items-center'>
                  <h1 className=' text-white text-base px-8 text-center'><span className='font-bold'>Unlimited</span> Active Listings Which Includes Smart Contract</h1>
              </div>
              <hr className='text-white bg-white font-bold pb-0 px-4 mx-14'/>
              <div className='pt-3 pb-1  flex justify-center items-center'>
                  <h1 className=' text-white text-base '>Inclusion in Agents Search Engine</h1>
              </div>
              <hr className='text-white bg-white font-bold pb-0 px-4 mx-14'/>
             
              <div className='pt-5 pb-3 flex justify-center items-center '>
                  <h1 className='font-bold text-white text-lg'>Service Providers</h1>
              </div>
              <div className='pt-3 pb-1  flex justify-center items-center'>
                  <h1 className=' text-white text-base '><span className='font-bold'>Unlimited</span> advertisements</h1>
              </div>
              <hr className='text-white bg-white font-bold pb-0 px-4 mx-14'/>
              <div className='pt-3 pb-1  flex justify-center items-center'>
                  <h1 className=' text-white text-base '>Inclusion in Service Providers Search Engine</h1>
              </div>
              <hr className='text-white bg-white font-bold pb-0 px-4 mx-14 '/>
            </div>
          </div>
        </div>
        <div className='mb-20 py-4'>
          <div className='flex justify-center py-10 pt-13 '>
              <div className='flex justify-center pb-3'>
                <h1 className='text-center text-black text-4xl font-semibold' >Fees and charges</h1>
              </div>     
          </div>
         <div className='flex justify-center'>
                <h1 className='text-2xl'>For Tenants</h1>
          </div>
          <div className='flex justify-center flex-col lg:flex-row pt-3 2xl:px-72 pb-3'>
            <div className='pricingDetails w-full mt-3 lg:mt-0 lg:mx-3 shadowBox rounded'>
              <div className='bg-indigo-700 bg-opacity-70 h-full rounded'>
                <div>
                  <h1 className='font-bold text-white text-center text-xl pt-9 pb-3'>Highlight your application (2$)</h1>
                </div>
                <div>
                  <h5 className='text-white text-center px-3  pb-14 lg:pb-16'>Make your application more visible than the others to the Landlord</h5>
                </div>
              </div>
            </div>
            <div className='pricingDetails w-full mt-3 lg:mt-0 lg:mx-3 shadowBox rounded'>
              <div className='bg-indigo-700 bg-opacity-70 text-center h-full rounded'>
                <div>
                  <h1 className='font-bold text-white text-center text-xl pt-9 pb-3'>Place your application at the top (5$)</h1>
                </div>
                <div>
                  <h5 className='text-white text-center px-3  pb-14 lg:px-14 2xl:pb-16'>Let your application be the first one to be seen by Landlord by placing it at the beginning of the application list.</h5>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center pt-10'>
                <h1 className='text-2xl text-center'>For Landlords and Real Estate Agents</h1>
          </div>
          <div className='flex justify-center  pt-1  pb-3 '>
            <div className='pricingDetails w-full lg:w-fit mt-3 lg:mt-0 lg:mx-3 shadowBox rounded '>
              <div className='bg-indigo-700 bg-opacity-70 h-full rounded lg:px-24'>
                <div>
                  <h1 className='font-bold text-white text-center text-xl pt-9 pb-3'>Highlight your listing (10$)</h1>
                </div>
                <div>
                  <h5 className='text-white text-center px-3  pb-14 lg:pb-16'>Make your listing more visible than the others</h5>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center pt-10'>
                <h1 className='text-2xl '>For Service Providers</h1>
          </div>
          <div className='flex justify-center  pt-1  pb-3 '>
            <div className='pricingDetails w-full lg:w-fit mt-3 lg:mt-0 lg:mx-3 shadowBox rounded '>
              <div className='bg-indigo-700 bg-opacity-70 h-full rounded lg:px-20'>
                <div>
                  <h1 className='font-bold text-white text-center text-xl pt-9 pb-3'>Highlight your advertisement (5$)</h1>
                </div>
                <div>
                  <h5 className='text-white text-center px-3  pb-14 lg:pb-14'>Make your advertisement more visible than the others</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}
