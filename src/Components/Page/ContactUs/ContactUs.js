import React from 'react';
import contactUsImg from '../../Assets/Others/contactUs.png'

const ContactUs = () => {

 const handelFullName = () => {
 }
 const handelEmail = () => {
 }
 const handelComment = () => {
 }

 const handelUpdatePassword = () => {

 }
 return (
  <div className='notFound grid grid-cols-2 justify-center justify-items-center items-center'>
   <div className="notFoundImg">
    <img src={contactUsImg} alt="" />
   </div>

   <div className="notFoundInfo">
    <h1 className='text-4xl font-bold text-blue-500 py-2'>Free fell to message</h1>
    <div className="setPassword">
    <input onBlur={handelFullName} type='text' required className='w-50 border-solid border-blue-500 border py-2 px-4 rounded text-gray-700' placeholder='Full Name' ></input>
    <br />
    <input onBlur={handelEmail} type='email' required className='w-50 border-solid border-blue-500 border py-2 px-4 rounded text-gray-700' placeholder='Email' ></input>
    <br />
    <textarea onBlur={handelComment} type='text' required className='w-50 border-solid border-blue-500 border py-2 px-4 rounded text-gray-700' placeholder='comment'></textarea>
   </div>
   <div className="pl-3">
    <button onClick={handelUpdatePassword} className='px-6 py-2 bg-blue-500 text-white font-bold rounded'>Send</button>
   </div>
  </div>
  </div >

 );
};

export default ContactUs;