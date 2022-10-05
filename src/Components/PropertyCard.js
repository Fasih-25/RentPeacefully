import React, { useState }from 'react'
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
    // console.log(props.propertyImage);

    // console.log(props.data.propertyImage.length)
    const [images, setImages] = useState([]);
    const toDetails=()=>{
        navigate('/listing/details',{state:props});
          }
        //   console.log(props.propertyImage);
        //   setImages(props.propertyImage);
        //   console.log(images);
        // var images11;
        // images11 = props.propertyImage[0];
        // console.log(setImages); 
       
        // console.log(shuffleData); 
    return (
        
    <div>
        <div className="card xxsm:w-64 xsm:w-72  mobile:w-80 sm:w-96 bg-base-100 shadow-xl mx-4 my-3">
            {/* <figure><img src={require('../assets/listing1.png')} alt="Shoes" /></figure>  */}
            <figure>
              <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                      delay: 4500,
                      disableOnInteraction: false,
                  }}
                  pagination={{
                      clickable: true,
                  }}
                //   navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
              >
                  {props.shuffleData.map((x) => (
                    <SwiperSlide>
                        <img
                            className="object-fill w-full h-96"
                            key={x.id}
                            src={x.image}
                            // src={require('../assets/listing1.png')}
                            alt="image slide 1"
                        />
                  </SwiperSlide>
                  ))}
                  {/* <SwiperSlide>
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
                            alt="image slide 1"
                        />
                  </SwiperSlide>
                  <SwiperSlide>
                        <img
                            className="object-fill w-full h-96"
                            src={require('../assets/listing1.png')}
                            alt="image slide 1"
                        />
                  </SwiperSlide> */}
              </Swiper>
            </figure>
            <div className="card-body ">
                <h2 className="card-title font-black justify-center flex">{props.propertyName}</h2>
                <p className=" justify-center flex">{props.address}</p>
            </div>
            <div className="container flex flex-row justify-around bg-slate-500 py-2 ">
                <div><h6 className='font-bold text-white xxsm: text-xs mobile:text-sm sm:text-base'><FontAwesomeIcon icon={faBed} className=" text-white xxsm: text-xs mobile:text-sm sm:text-base "></FontAwesomeIcon> {props.bedrooms} Bed(s)</h6></div>
                <div><h6 className='font-bold text-white xxsm: text-xs mobile:text-sm sm:text-base'><FontAwesomeIcon icon={faBath} className=" text-white xxsm: text-xs mobile:text-sm sm:text-base "></FontAwesomeIcon> {props.bathroom} Bath(s)</h6></div>
                <div><h6 className='font-bold text-white xxsm: text-xs mobile:text-sm sm:text-base'><FontAwesomeIcon icon={faSquare} className=" text-white "></FontAwesomeIcon> {props.area} Sq Ft</h6></div>
            </div>
            <div className="card-actions flex justify-between px-2 Py-10 my-3 ">
                    {/* <ShowDetails /> */}
                    <button className="btn btn-primary px-2 xxsm:text-sm mobile:text-base" onClick={()=>toDetails()}  >Show Details</button>
                    {/* <Link className="btn btn-primary px-2" to={{ pathname: "/listing/details", {state: props} }} >Show Details</Link> */}
                    <h1 className='font-bold xxsm:text-2xl mobile:text-3xl px-2'>${props.price}</h1>
            </div>
        </div>
    </div>
  )
}