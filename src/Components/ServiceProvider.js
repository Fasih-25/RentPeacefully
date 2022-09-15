import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCertificate, faLocation} from '@fortawesome/free-solid-svg-icons';

export default function ServiceProvider() {
  return (
    <div>
       <div className='flex flex-wrap justify-center  mt-6 py-5 px-1 md:!px-5'>
       <a href="/serviceProvider/details" className='cursor-pointer '>
         <div className='flex justify-start  '>
           <img src={require('../assets/SP1.png')} alt="" className='h-24 w-24 rounded-full shadowBox' />
         </div></a>
         <div className='flex justify-start flex-col items-start pl-12 pt-4 lg:!pt-0'>
            <div className='flex'>
                <h1 className='text-2xl'>Rentpeacefully (Admin) <FontAwesomeIcon icon={faCertificate} className=" items-center justify-center  text-blue-500 text-xl rounded-full text "></FontAwesomeIcon> </h1>
            </div>
            <div className='flex flex-row pt-2'>
                <span className='text-white bg-amber-400 text-base px-2 pb-1 font-bold shadowBox'> 5 </span> 
                <div className="flex items-center">
                    <svg aria-hidden="true" className="w-7 h-7 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-7 h-7 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-7 h-7 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-7 h-7 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-7 h-7 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    {/* <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> */}
                </div> 
                <p className='font-semibold text-lg ml-1 text-slate-400'> (1 review)</p>
            </div>
            <div  className=' pt-3'>
                <p className='font-semibold text-lg ml-1 text-slate-400'>Nice to meet you! I'm Rentpeacefully (Admin)</p>
            </div>
            <div  className='flex  pt-3 '>
                <p className='font-normal text-lg mr-2 text-black'>Skills: </p>
                <div className='flex flex-wrap'>
                    <div className='bg-purple-700 rounded-3xl py-2 px-3 mx-3'>
                        <p className='  font-bold text-white'>Handyman</p>
                    </div>
                    <div className='bg-purple-700 rounded-3xl mt-2  xl:!mt-0  py-2 px-3 mx-3'>
                        <p className='  font-bold text-white'>Shopping</p>
                    </div>
                    <div className='bg-purple-700 rounded-3xl  mt-2 xl:!mt-0 py-2 px-3 mx-3'>
                        <p className='  font-bold text-white'>Carpet Repair And Laying</p>
                    </div>
                    <div className='bg-purple-700 rounded-3xl  mt-2 xl:!mt-0 py-2 px-3 mx-3'>
                        <p className='  font-bold text-white'>Decking</p>
                    </div>
                    <div className='bg-purple-700 rounded-3xl  mt-2 xl:!mt-0 py-2 px-3 mx-3'>
                        <p className='  font-bold text-white'>Landscape and Gardening</p>
                    </div>
                </div>
            </div>
            <hr className='my-4 w-full  bg-slate-400'  />
         </div>

       </div>
    </div>
  )
}
