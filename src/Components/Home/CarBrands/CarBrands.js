import React, { Component } from 'react';
import './CarBrands.css'
import Slider from 'react-slick/lib/slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Tasla from '../../Assets/carBrandLogo/tesla (2).svg'
import BMW from '../../Assets/carBrandLogo/bmw (1).svg'
import Ford from '../../Assets/carBrandLogo/ford.svg'
import Mercedes from '../../Assets/carBrandLogo/mercedes.svg'
import Audi from '../../Assets/carBrandLogo/icons8-audi.svg'
import Ferrari from '../../Assets/carBrandLogo/ferrari.svg'
import Nissan from '../../Assets/carBrandLogo/nissan.svg'
import RollsRoyce from '../../Assets/carBrandLogo/rolls-royce.svg'
import Toyota from '../../Assets/carBrandLogo/toyota.svg'



const CarBrands = () => {
 var settings = {
  arrows: true,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
   {
    breakpoint: 1024,
    settings: {
     slidesToShow: 5,
     slidesToScroll: 3,
     infinite: true,
     dots: true
    }
   },
   {
    breakpoint: 600,
    settings: {
     slidesToShow: 2,
     slidesToScroll: 2,
     initialSlide: 2
    }
   },
   {
    breakpoint: 480,
    settings: {
     slidesToShow: 4,
     slidesToScroll: 1
    }
   }
  ]
 };
 return (
  <div className='justify-center md:py-10 card-brands' >
   <h2 className='service-title text-center text-5xl font-bold md:py-20 text-black'>
    <span className='text-2xl'>Companies</span>
    <br />
    <span className='service-span'>We Collaborate With</span></h2>
   <div className="">
    <Slider {...settings} className='slider'>
     <div>
      <img src={Tasla} alt="" />
     </div>
     <div>
      <img src={BMW} alt="" />
     </div>
     <div>
      <img src={Ford} alt="" />
     </div>
     <div>
      <img src={Mercedes} alt="" />
     </div>
     <div>
      <img src={Audi} alt="" />
     </div>
     <div>
      <img src={Ferrari} alt="" />
     </div>
     <div>
      <img src={Nissan} alt="" />
     </div>
     <div>
      <img src={RollsRoyce} alt="" />
     </div>
     <div>
      <img src={Toyota} alt="" />
     </div>
    </Slider>
   </div>
  </div>
 );
};

export default CarBrands;

