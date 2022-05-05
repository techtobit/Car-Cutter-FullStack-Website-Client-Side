import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { faArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './DisplayVehicles.css'

const DisplayVehicles = ({ catagorie }) => {
 const { _id, carName, img, price, brand, category, warehouse } = catagorie;

 const [user] = useAuthState(auth)
 const navigate = useNavigate();

 const handelIventory = id => {
  if (!user) {
   navigate('/logIn')
  }
  else {
   navigate(`/inventory/${id}`)
  }
 }
 return (
  <div className='flex justify-center py-10'>
   <div className='vehicles p-5 flex justify-evenly  border-l-4 border-blue-400  items-center bg-white rounded-lg drop-shadow-lg '>
    <div className="vehicles-img">
     <img src={img} alt="" />
    </div>
    <div className="vehicles-info ">
     <h4 className='text-xl font-semibold '>{carName}</h4>
     <h4 className='text-md font-medium py-2'>Price : ${price}</h4>
     <p>Brand : {brand}</p>
     <p className=''>Category : {category}</p>
     <hr />
     <p>
      <FontAwesomeIcon className='text-blue-500' icon={faLocationDot}></FontAwesomeIcon>  {warehouse}
     </p>
    </div>
    <div className="brand-btn">
     <button onClick={() => handelIventory(_id)} className='vehicles-btn p-2 text-white font-medium rounded-lg hover:text-blue-600 hover:bg-white hover:border-blue-600 border-2'>ViewMore
     </button>
    </div>
   </div>
   {/* 
   <div className="brand-btn">
    <button }>ViewMore</button>
   </div> */}
  </div>
 );
};

export default DisplayVehicles;