import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBath, faBed, faLocation, faSquare} from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useNavigate } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


export default function PropertyCard(props) {
    let navigate = useNavigate();
    const toDetails=()=>{
        navigate('/listing/details',{state:props});
          }
    return (
    <div>
        <div className="card w-80 sm:w-96 bg-base-100 shadow-xl mx-4 my-3">
            {/* <figure><img src={require('../assets/listing1.png')} alt="Shoes" /></figure>  */}
            <figure>
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
                  className="mySwiper"
              >
                  <SwiperSlide>
                      <img
                          className="object-fill w-full h-96"
                          src={require('../assets/listing1.png')}
                          alt="image slide 1"
                      />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img
                          className="object-fill w-full h-96"
                          src={require('../assets/listing1.png')}
                          alt="image slide 2"
                      />
                  </SwiperSlide>
                  <SwiperSlide>
                      <img
                          className="object-fill w-full h-96"
                          src={require('../assets/listing1.png')}
                          alt="image slide 3"
                      />
                  </SwiperSlide>
              </Swiper>
            </figure>
            <div className="card-body ">
                <h2 className="card-title font-black justify-center flex">{props.propertyName}</h2>
                <p className=" justify-center flex">{props.address}</p>
            </div>
            <div className="container flex flex-row justify-around bg-slate-500 py-2 ">
                <div><h6 className='font-bold text-white'><FontAwesomeIcon icon={faBed} className=" text-white "></FontAwesomeIcon> {props.bedrooms} Bed(s)</h6></div>
                <div><h6 className='font-bold text-white'><FontAwesomeIcon icon={faBath} className=" text-white "></FontAwesomeIcon> {props.bathroom} Bath(s)</h6></div>
                <div><h6 className='font-bold text-white'><FontAwesomeIcon icon={faSquare} className=" text-white "></FontAwesomeIcon> {props.area}</h6></div>
            </div>
            <div className="card-actions flex justify-between px-2 Py-10 my-3 ">
                    <button className="btn btn-primary px-2" onClick={()=>toDetails()}  >Show Details</button>
                    <h1 className='font-bold text-3xl px-2'>${props.price}</h1>
            </div>
        </div>
    </div>
  )
}