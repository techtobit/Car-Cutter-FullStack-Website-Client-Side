import React from 'react';
import HeroVideo from '../../Assets/HeroBanner/hero-video1.mp4'
import ReactPlayer from 'react-player';
import './HeroBanner.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const HeroBanner = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate();
  const handelHeroTry = () => {
    if (!user) {
      navigate('/logIn')
    }
    else {
      navigate('/inventory')
    }
  }
  return (
    <div className='heroBanner-container'>
      <div className="heroBanner">
        <ReactPlayer className="heroBanner-video"
          fluid={false}
          mute={true}
          volume={0}
          playing={true}
          loop={true}
          height="100%"
          width="100%"
          url={HeroVideo}
        />
        <div className="heroData">
          <div>
            <h1 className='lg:text-7xl md:text-5xl sm:text-5xl font-bold leading-relaxed'>#1 Car Warehouse
              <br /> Inventory
              and Dealerships
            </h1>
            <div className="hero-btn py-8 flex">
              <div className='btn1'>
                <button onClick={handelHeroTry} className='px-5 py-3 rounded-full text-xl font-medium ExploreMore-btn' >
                  Explore More
                  <FontAwesomeIcon icon={faArrowRight} className="pl-2"></FontAwesomeIcon>
                </button>
              </div>
              <div className=' btn2 pl-16'>
                <button onClick={handelHeroTry} className='px-5 py-3 rounded-full text-xl font-medium Warehouses-btn ' >
                  <FontAwesomeIcon icon={faLocationDot} className="pr-2"></FontAwesomeIcon>
                  Warehouses</button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default HeroBanner;