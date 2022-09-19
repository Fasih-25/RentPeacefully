import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBath, faBed, faChair, faClock, faClockFour, faD, faDoorOpen, faDroplet, faDumbbell, faElevator, faFire, faGlassWaterDroplet, faGraduationCap, faHandRock, faHighlighter, faParking, faSquare, faStoreAlt, faStreetView, faSwimmingPool, faTemperatureArrowUp, faTemperatureFull, faTree, faUmbrella, faWheelchair, faWind} from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from "swiper/react";
import "../App.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Details() {
  return (
    <div>
        <Navbar />
            <div className='propertyDetails '>
               <div className='bg-gray-900 bg-opacity-70 h-screen justify-center flex-wrap py-2 mobile:py-5 px-4 '>
                    <div className='flex justify-center mobile:justify-around  top-0 flex-wrap pt-3 sm:pb-3'>
                            <h3 className='text-white  font-bold bg-sky-500  py-2 px-2  mobile:text-lg shadowBox'> HOUSE </h3>
                            <p className='text-white text-center pt-3 sm:pt-0 pb-2 md:pb-1 md:text-sm md:ml-72 lg:ml-96 xl:ml-96 2xl:ml-96 lg:text-sm'>Fords, Woodbridge Township, NJ, USA | Unit 555</p>
                    </div>
                    <div className='flex justify-around top-0 flex-wrap pt-1 sm:!pt-0 2xl:!pt-4   2xl:ml-8'>
                        <div className='pb-5 mb-2 items-center'>
                            <h1 className='text-white text-center sm:text-left py-2 sm:py-4 mobile:text-2xl sm:text-3xl lg:text-4xl   '><strong>Real Estate Agent Property</strong></h1>
                            <ul className='flex flex-row pt-3  md:!pt-7'>
                                <li><h6 className=' text-white mobile:text-lg'><FontAwesomeIcon icon={faBed} className=" text-white mobile:text-3xl sm:text-2xl lg:text-3xl mx-2 font-bold"></FontAwesomeIcon> 3 Bed(s)</h6></li>
                                <li><h6 className=' text-white mobile:text-lg'><FontAwesomeIcon icon={faBath} className=" text-white mobile:text-3xl sm:text-2xl lg:text-3xl mx-2 font-bold"></FontAwesomeIcon> 3 Bath(s)</h6></li>
                                <li><h6 className=' text-white mobile:text-lg'><FontAwesomeIcon icon={faSquare} className=" text-white mobile:text-3xl sm:text-2xl lg:text-3xl mx-2 font-bold"></FontAwesomeIcon> 2000 Sq Ft</h6></li>
                            </ul>
                        </div>
                        <div className=' mb-2 bg-white rounded w-96 sm:w-72 lg:w-80 xl:w-80 2xl:w-96 flex flex-col '>
                            <h3 className='text-gray-400 text-center mobile:text-3xl sm:text-xl lg:text-2xl 2xl:text-3xl items-center py-2 pt-4 '>Monthly Price</h3>
                            <h3 className='text-black text-center font-bold mobile:text-3xl sm:text-xl lg:text-2xl  2xl:text-3xl items-center py-1'>4000 USD</h3>
                            <p className='text-gray-400 text-center  items-center py-1 pb-4' >Security deposit: 10000 USD </p>
                            <div className='bg-gray-500 text-center items-center flex justify-center py-3'>
                                    <ul className='flex flex-row'>
                                    <li className='text-white lg:text-sm mobile:text-lg 2xl:text-xm ' > Available from: </li>
                                    <li><h6 className=' text-white mobile:text-lg lg:text-sm 2xl:text-sm'><FontAwesomeIcon icon={faClockFour} className="ml-2 text-white"></FontAwesomeIcon> Right Now </h6></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                    <div className='container flex justify-center items-center pt-1 mobile:pt-4 '>
                    <a className="btn  bg-sky-400 socialbtn text-white py-3 px-5 rounded-full" href="/listing/details">APPLY NOW</a>
                    </div>
               </div>
            </div>

            <div className=' bg-slate-700 w-full py-3  '>
                <div className='flex text-center justify-center items-center  lg:mx-56 2xl:mx-72' >
                    <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper text-black"
                    >
                    <SwiperSlide>
                        <img
                            className="object-fill w-full h-96"
                            src={require('../assets/listing1-3.jpeg')}
                            alt="image slide 1"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="object-fill w-full h-96"
                            src={require('../assets/listing1-1.png')}
                            alt="image slide 2"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="object-fill w-full h-96"
                            src={require('../assets/listing1-2.jpeg')}
                            alt="image slide 3"
                        />
                    </SwiperSlide>
                </Swiper>
                </div>
            </div>
            <div className='bg-teal-500'>
                <div className='container flex justify-center items-center flex-col '>
                    <div className='text-white text-center pb-16'>
                        <h3 className='font-bold text-4xl py-5'> House Description </h3>
                         <h7 className="text-2xl ">TEST</h7>
                    </div>
                    <div className='bg-white rounded w-full pb-3 mb-4 shadowBox' >
                        <div className='text-center pb-2 mb-2 '>
                            <h3 className='font-bold text-4xl py-5'> Amenities </h3>
                        </div>
                        <div className='flex justify-between mx-3'>
                        <div>
                            <ul>
                            <li><h6 className=' text-black py-2 text-sm lg:text-sm font-bold'><FontAwesomeIcon icon={faBath} className=" text-black text-xl sm:text-2xl lg:text-2xl mx-2 font-bold"></FontAwesomeIcon> Washer/Dryer in unit </h6></li>
                            <li><h6 className=' text-black py-2 text-sm lg:text-sm font-bold'><FontAwesomeIcon icon={faDumbbell} className=" text-black text-xl sm:text-2xl lg:text-2xl mx-2 font-bold"></FontAwesomeIcon> Gym</h6></li>
                            <li><h6 className=' text-black py-2 text-sm lg:text-sm font-bold'><FontAwesomeIcon icon={faParking} className=" text-black text-xl sm:text-2xl lg:text-2xl mx-2 font-bold"></FontAwesomeIcon> Parking Spot</h6></li>
                            <li><h6 className=' text-black py-2 text-sm lg:text-sm font-bold'><FontAwesomeIcon icon={faTemperatureFull} className=" text-black text-xl sm:text-2xl lg:text-2xl mx-2 font-bold"></FontAwesomeIcon> Air Conditioning </h6></li>
                            <li><h6 className=' text-black py-2 text-sm lg:text-sm font-bold'><FontAwesomeIcon icon={faD} className=" text-black text-xl sm:text-2xl lg:text-2xl mx-2 font-bold"></FontAwesomeIcon> Dishwasher </h6></li>
                            <li><h6 className=' text-black py-2 text-sm lg:text-sm font-bold'><FontAwesomeIcon icon={faStoreAlt} className=" text-black text-xl sm:text-2xl lg:text-2xl mx-2 font-bold"></FontAwesomeIcon> Storage </h6></li>
                            <li><h6 className=' text-black py-2 text-sm lg:text-sm font-bold'><FontAwesomeIcon icon={faHandRock} className=" text-black text-xl sm:text-2xl lg:text-2xl mx-2 font-bold"></FontAwesomeIcon> Hardwood Floor </h6></li>
                            <li><h6 className=' text-black py-2 text-sm lg:text-sm font-bold'><FontAwesomeIcon icon={faWind} className=" text-black text-xl sm:text-2xl lg:text-2xl mx-2 font-bold"></FontAwesomeIcon> balcony </h6></li>
                            <li><h6 className=' text-black py-2 text-sm lg:text-sm font-bold'><FontAwesomeIcon icon={faStreetView} className=" text-black text-xl sm:text-2xl lg:text-2xl mx-2 font-bold"></FontAwesomeIcon> View </h6></li>
                            <li><h6 className=' text-black py-2 text-sm lg:text-sm font-bold'><FontAwesomeIcon icon={faHighlighter} className=" text-black text-xl sm:text-2xl lg:text-2xl mx-2 font-bold"></FontAwesomeIcon> High Rise </h6></li>

                            </ul>
                        </div>
                        <div className='flex items-start justify-start'>
                        <ul>
                            <li><h6 className=' text-black py-2 text-sm lg:text-sm font-bold '><FontAwesomeIcon icon={faSwimmingPool} className=" text-black text-xl sm:text-2xl lg:text-2xl mx-2 font-bold"></FontAwesomeIcon> Pool </h6></li>
                            <li><h6 className=' text-black py-2 text-sm lg:text-sm font-bold '><FontAwesomeIcon icon={faElevator } className=" text-black text-xl sm:text-2xl lg:text-2xl mx-2 font-bold"></FontAwesomeIcon> Elevator </h6></li>
                            <li><h6 className=' text-black py-2 text-sm lg:text-sm font-bold '><FontAwesomeIcon icon={faFire} className=" text-black text-xl sm:text-2xl lg:text-2xl mx-2 font-bold"></FontAwesomeIcon> Fire Place </h6></li>
                            <li><h6 className=' text-black py-2 text-sm lg:text-sm font-bold '><FontAwesomeIcon icon={faDoorOpen} className=" text-black text-xl sm:text-2xl lg:text-2xl mx-2 font-bold"></FontAwesomeIcon> Doorman </h6></li>
                            <li><h6 className=' text-black py-2 text-sm lg:text-sm font-bold '><FontAwesomeIcon icon={faUmbrella} className=" text-black text-xl sm:text-2xl lg:text-2xl mx-2 font-bold"></FontAwesomeIcon> Deck </h6></li>
                            <li><h6 className=' text-black py-2 text-sm lg:text-sm font-bold '><FontAwesomeIcon icon={faWheelchair} className=" text-black text-xl sm:text-2xl lg:text-2xl mx-2 font-bold"></FontAwesomeIcon> Wheelchair Accessible </h6></li>
                            <li><h6 className=' text-black py-2 text-sm lg:text-sm font-bold '><FontAwesomeIcon icon={faTree} className=" text-black text-xl sm:text-2xl lg:text-2xl mx-2 font-bold"></FontAwesomeIcon> Garden </h6></li>
                            <li><h6 className=' text-black py-2 text-sm lg:text-sm font-bold '><FontAwesomeIcon icon={faChair} className=" text-black text-xl sm:text-2xl lg:text-2xl mx-2 font-bold"></FontAwesomeIcon> Furnished </h6></li>
                            <li><h6 className=' text-black py-2 text-sm lg:text-sm font-bold '><FontAwesomeIcon icon={faGraduationCap} className=" text-black text-xl sm:text-2xl lg:text-2xl mx-2 font-bold"></FontAwesomeIcon> Student Friendly </h6></li>
                            <li><h6 className=' text-black py-2 text-sm lg:text-sm font-bold '><FontAwesomeIcon icon={faDroplet} className=" text-black text-xl sm:text-2xl lg:text-2xl mx-2 font-bold"></FontAwesomeIcon> Utilities Included </h6></li>

                        </ul>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        <Footer />
    </div>
  )
}
