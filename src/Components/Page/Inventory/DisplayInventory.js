import React from 'react';

const DisplayInventory = ({ catagorie }) => {
 const { _id, courseName, img, price } = catagorie
 console.log(_id);

 const handelUpdate = () => {
  console.log('clicked');
 }
 return (
  <div>
   <div className="catagorie-img">
    <img src={img} alt="" />
   </div>
   <div className="catagorie-info">
    <p>{courseName}</p>
   </div>
   <div className="brand-btn">
    <button onClick={handelUpdate}>ViewMore</button>
   </div>
  </div>
 );
};

export default DisplayInventory;