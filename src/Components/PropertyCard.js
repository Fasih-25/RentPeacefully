import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBath, faBed, faSquare} from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function PropertyCard() {
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
                <h2 className="card-title font-black justify-center flex">Real Estate Agent Property</h2>
                <p className=" justify-center flex">Fords, Woodbridge Township, NJ, USA</p>
            </div>
            <div className="container flex flex-row justify-around bg-slate-500 py-2 ">
                <div><h6 className='font-bold text-white'><FontAwesomeIcon icon={faBed} className=" text-white "></FontAwesomeIcon> 3 Bed(s)</h6></div>
                <div><h6 className='font-bold text-white'><FontAwesomeIcon icon={faBath} className=" text-white "></FontAwesomeIcon> 3 Bath(s)</h6></div>
                <div><h6 className='font-bold text-white'><FontAwesomeIcon icon={faSquare} className=" text-white "></FontAwesomeIcon> 2000 Sq Ft</h6></div>
            </div>
            <div className="card-actions flex justify-between px-2 Py-10 my-3 ">
                    <a className="btn btn-primary px-2" href="/listing/details">Buy Now</a>
                    <h1 className='font-bold text-3xl px-2'>$4000</h1>
            </div>
        </div>
    </div>
  )
}


// <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
//               <div className="carousel-inner relative w-full overflow-hidden">
//                 <div className="carousel-item active relative float-left w-full">
//                   <img
//                     src={require('../assets/listing1.png')}
//                     className="block w-full"
//                     alt="Wild Landscape"
//                   />
//                 </div>
//                 <div className="carousel-item relative float-left w-full">
//                   <img
//                     src={require('../assets/listing1.png')}
//                     className="block w-full"
//                     alt="Camera"
//                   />
//                 </div>
//                 <div className="carousel-item relative float-left w-full">
//                   <img
//                     src={require('../assets/listing1.png')}
//                     className="block w-full"
//                     alt="Exotic Fruits"
//                   />
//                 </div>
//               </div>
//               <button
//                 className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
//                 type="button"
//                 data-bs-target="#carouselExampleControls"
//                 data-bs-slide="prev"
//               >
//                 <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button
//                 className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
//                 type="button"
//                 data-bs-target="#carouselExampleControls"
//                 data-bs-slide="next"
//               >
//                 <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>