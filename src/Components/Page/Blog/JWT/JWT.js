import React from 'react';
import JWTImg from '../../../Assets/Blog/jwt2.jpg'

const JWT = () => {
 return (
  <div className='grid justify-center py-5'>
   <div className="blog grid justify-center  border-2 p-5 shadow-lg rounded-lg">
    <img src={JWTImg} alt="" />
    <div className="blog-data text-center ">
     <h3 className='text-2xl py-5'>What JWT?</h3>
     <p>
      <strong>JWT</strong>JSON WEB TOKEN. Is an high secure open stander transmitting data between parties as JSON object.
      <br />
      The information is highly secure by private / public key using secret key!
     </p>

    </div>
   </div>
  </div>
 );
};

export default JWT;