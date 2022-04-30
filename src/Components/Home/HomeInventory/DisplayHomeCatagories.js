import React from 'react';
import './DisplayHomeCatagories.css';

const DisplayHomeCatagories = ({ catagorie }) => {

 const { courseName, img, price } = catagorie
 return (
  <div>
   <div className="catagorie-img">
    <img src={img} alt="" />
   </div>
   <div className="catagorie-info">
    <p>{courseName}</p>
   </div>
   <div className="brand-btn">
    <button>ViewMore</button>
   </div>
  </div>
 );
};

export default DisplayHomeCatagories;