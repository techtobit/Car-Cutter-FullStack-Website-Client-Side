import React from 'react';
import updatePass from '../../Assets/Others/UpdatePass.png'

const UpdatePassword = () => {

 const handelPassword = e => {

 }

 const handelconfirmPassword = e => {

 }

 const handelUpdatePassword = () => {

 }

 return (
  <div className='notFound grid grid-cols-2 justify-center justify-items-center items-center'>
   <div className="notFoundImg">
    <img src={updatePass} alt="" />
   </div>

   <div className="notFoundInfo">
    <h1 className='text-4xl font-bold text-blue-500 py-2'>Reset Your Password</h1>
    <div className="setPassword">
     <input onBlur={handelPassword} type='password' required className='w-50 border-solid border-blue-500 border py-2 px-4 rounded text-gray-700' placeholder='new password'></input>
     <br />
     <input onBlur={handelconfirmPassword} type='password' required className='w-50 border-solid border-blue-500 border py-2 px-4 rounded text-gray-700' placeholder='confirm password'></input>
    </div>
    <div className="pl-3">
     <button onClick={handelUpdatePassword} className='px-6 py-2 bg-blue-500 text-white font-bold rounded'>Set Password</button>
    </div>
   </div>
  </div>

 );
};

export default UpdatePassword;