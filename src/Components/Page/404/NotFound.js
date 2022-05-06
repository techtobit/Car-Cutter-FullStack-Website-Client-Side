import React from 'react';
import { useNavigate } from 'react-router-dom';
import page404Img from '../../Assets/Others/404Img1.png'
import './NotFound.css'


const NotFound = () => {
 const navigate = useNavigate();
 const handelBackHome = () => {
  navigate('/home')
 }
 return (
  <div className='notFound grid grid-cols-2 justify-center justify-items-center items-center'>
   <div className="notFoundInfo">
    <h1 className='text-4xl font-bold text-blue-500 py-2'>Page Not Found</h1>
    <p className='font-bold py-2'>
     Not matching your search quary with the database.
     <br />
     Please check and try again!
    </p>
    <button onClick={handelBackHome} className='px-5 py-2 bg-blue-500 text-white font-bold rounded'>Back to Home</button>
   </div>
   <div className="notFoundImg">
    <img src={page404Img} alt="" />
   </div>

  </div>
 );
};

export default NotFound;