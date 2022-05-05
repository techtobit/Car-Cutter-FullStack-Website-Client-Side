import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Login from '../../Auth/LogIn/Login';
import './DisplayHomeCatagories.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const DisplayHomeCatagories = ({ catagorie }) => {
 const { _id, carName, img, category, price, brand, releaseDate } = catagorie;


 /*  navigate into inventory/id if user Login
  or navigate login page */
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
  <div className='catagories p-5 flex justify-evenly  items-center bg-white rounded-lg drop-shadow-lg '>
   <div className="catagorie-img">
    <img src={img} alt="" />
   </div>
   <div className="catagorie-info ">
    <h4 className='text-xl font-medium '>{carName}</h4>
    <h4 className='text-md font-medium py-2'>Price : ${price}</h4>
    <div className="brand-info flex pb-2">
     <p>Brand : {brand}</p>
     <p className=' pl-5'>Category : {category}</p>
    </div>
    <hr />
    <div className="brand-btn">
     <button onClick={() => handelIventory(_id)} className='catagories-btn hover:text-blue-600'>ViewMore
      <FontAwesomeIcon className='pl-3 text-center' icon={faArrowRight}></FontAwesomeIcon>
     </button>
    </div>
   </div>

  </div>
 );
};

export default DisplayHomeCatagories;