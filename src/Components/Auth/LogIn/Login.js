import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import GoogleIcon from '../../Assets/icons-google50.svg'

const Login = () => {
 //login with email password 
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const [signInWithEmailAndPassword, user, loading, error,
 ] = useSignInWithEmailAndPassword(auth);

 const handelEmail = e => {
  setEmail(e.target.value);
 }
 const handelPassword = e => {
  setPassword(e.target.value);
 }

 const handelLogInWithEmail = e => {
  e.preventDefault();
  signInWithEmailAndPassword(email, password)
 }

 //Login With google
 const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
 const handelSignInWithGoogle = e => {
  e.preventDefault();
  signInWithGoogle();
 }

 //Controls User After login 
 const location = useLocation();
 const navigate = useNavigate();
 const from = location.state?.from?.pathname || '/'


 if (user) {
  navigate(from, { replace: true })
 }
 if (googleUser) {
  navigate(from, { replace: true })
 }
 return (
  <div className='grid justify-center'>
   <div className="login-form">
    <form onSubmit={handelLogInWithEmail} >
     <div className="from-input">
      <label>Email</label>
      <br />
      <input onBlur={handelEmail} className=' border-solid border-blue-400 border py-2 px-4 rounded text-gray-700' placeholder='example@gamil.con'></input>
     </div>
     <div className="from-input">
      <label>Password</label>
      <br />
      <input onBlur={handelPassword} className=' border-solid border-blue-400 border py-2 px-4 rounded text-gray-700' placeholder='password'></input>
     </div>
     <div className="create-account">
      <p>Dont have account ? <Link to='/register'>Create an Account</Link> </p>
     </div>
     <button>Submit</button>
    </form>
    <button onClick={handelSignInWithGoogle} className=" w-full justify-center flex items-center text-center border-solid rounded border  bg-gray-200 hover:bg-blue-500 text-md font-normal   text-black">
     <img className='w-50 h-50' src={GoogleIcon}></img>
     <p className='font-bold'>LogIn With Google</p>
    </button>
   </div>
  </div>
 );
};

export default Login;