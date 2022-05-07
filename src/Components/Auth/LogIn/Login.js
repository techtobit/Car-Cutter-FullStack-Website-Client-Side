import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateEmail, useUpdatePassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import GoogleIcon from '../../Assets/icons-google50.svg'
import './LogIn.css'
import googleBrand from '../../Assets/icons/google-brands.svg'
import logInBlob from '../../Assets/Others/logIn.png'

const Login = () => {
 //login with email password 
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 // const [updatePassword, updating, Updateerror] = useUpdatePassword(auth);

 const [signInWithEmailAndPassword, user, loading, error,
 ] = useSignInWithEmailAndPassword(auth);


 // load input value 
 const handelEmail = e => {
  setEmail(e.target.value);
 }
 const handelPassword = e => {
  setPassword(e.target.value);
 }

 // login method send data to auth 
 const handelLogInWithEmail = e => {
  e.preventDefault();
  signInWithEmailAndPassword(email, password)
 }

 //reset by email verification


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
  <div className="login-container grid md:grid-cols-2 justify-items-center items-center">
   <div className="logIn-blob">
    <img src={logInBlob} alt="" />
   </div>
   <div className='grid '>
    <h2 className='py-3'>LogIn Account</h2>
    <div className="login-form">
     <form onSubmit={handelLogInWithEmail} >
      <div className="from-input">
       <label>Email</label>
       <br />
       <input onBlur={handelEmail} type='text' required className=' w-full border-solid border-blue-500 border py-2 px-4 rounded text-gray-700' placeholder='example@gamil.con'></input>
      </div>
      <div className="from-input">
       <label>Password</label>
       <br />
       <input onBlur={handelPassword} type='password' required className='w-full border-solid border-blue-500 border py-2 px-4 rounded text-gray-700' placeholder='password'></input>
      </div>
      <div className="from-input">
       <input type='submit' value='LogIn' className='w-full border-solid text-white font-bold bg-blue-500 border py-2 px-4 rounded hover:bg-blue-600' placeholder='password'></input>
      </div>
      <div className="logIn-togol">
       <p>Forget Password? <Link to='/updatePassword' className='text-blue-500 hover:text-blue-600 underline'>reset password</Link></p>
       <p>Dont have account ? <Link to='/register' className='text-blue-500 hover:text-blue-600 underline'>Create an Account</Link> </p>
      </div>
     </form>

     <div className='op-login py-3 grid grid-cols-3 justify-between items-center'>
      <div className='line '></div>
      <div className='text-center font-bold'>or</div>
      <div className='line '></div>
     </div>

     <div className="google">
      <button onClick={handelSignInWithGoogle} className=" logIn-btn w-full  m-0 justify-center flex items-center text-center border-solid rounded border  bg-gray-200 hover:bg-blue-500 text-md font-normal   text-black">
       {/* <img className='w-50 h-50' /> */}
       <img src={GoogleIcon} alt="" />
       <p className='font-bold'>LogIn With Google</p>
      </button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Login;