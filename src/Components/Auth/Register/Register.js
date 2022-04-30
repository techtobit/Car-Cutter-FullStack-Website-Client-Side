import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import GoogleIcon from '../../Assets/icons-google50.svg'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Register = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 // singUp with email password 
 const [createUserWithEmailAndPassword, user,
 ] = useCreateUserWithEmailAndPassword(auth);

 //singUp with google 
 const [signInWithGoogle] = useSignInWithGoogle(auth);

 const handelEmail = e => {
  setEmail(e.target.value);
 }
 const handelPassword = e => {
  setPassword(e.target.value);
 }

 const handelRegisterWithEmail = e => {
  console.log(email, password);
  e.preventDefault();
  createUserWithEmailAndPassword(email, password)
 }
 const handelRegisterWithGoogle = e => {
  e.preventDefault();
  signInWithGoogle();
 }
 return (
  <div className='grid justify-center'>
   <h2>Create An Account</h2>
   <div className="login-form">
    <form onSubmit={handelRegisterWithEmail} >
     <div className="from-input">
      <label>Email</label>
      <br />
      <input onBlur={handelEmail} type='email' required className=' border-solid border-blue-400 border py-2 px-4 rounded text-gray-700' placeholder='example@gamil.con'
       ></input>
     </div>
     <div className="from-input">
      <label>Password</label>
      <br />
      <input onBlur={handelPassword}  type='password' required className=' border-solid border-blue-400 border py-2 px-4 rounded text-gray-700' placeholder='password'></input>
     </div>
     <div className="create-account">
      <p>Already have account ? <Link to='/logIn'>LogIn</Link> </p>
     </div>
     <button>Submit</button>
    </form>
    <button onClick={handelRegisterWithGoogle} className=" w-full justify-center flex items-center text-center border-solid rounded border  bg-gray-200 hover:bg-blue-500 text-md font-normal   text-black">
     <img className='w-50 h-50' src={GoogleIcon}></img>
     <p className='font-bold'>Register With Google</p>
    </button>
   </div>
  </div>
 );
};

export default Register;