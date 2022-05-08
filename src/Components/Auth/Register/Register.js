import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import GoogleIcon from '../../Assets/icons-google50.svg'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import logInBlob from '../../Assets/Others/logIn.png'
import { toast } from 'react-toastify';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const location = useLocation();
  const navigate = useNavigate()

  // singUp with email password 
  const [createUserWithEmailAndPassword, user, loading, SingUPError,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  //singUp with google 
  const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);

  const handelEmail = e => {
    setEmail(e.target.value);
  }
  const handelPassword = e => {
    setPassword(e.target.value);
  }

  const handelConfirmPassword = e => {
    setConfirmPassword(e.target.value)
  }


  const handelRegisterWithEmail = e => {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(email, password)
      e.preventDefault();
      toast('Account Created Successfully')
    }
    else {
      toast.error(`Password Not Matched ${SingUPError}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  const from = location.state?.from?.pathname || '/'

  if (user) {
    navigate(from, { replace: true })
  }
  if (googleUser) {
    navigate(from, { replace: true })
  }

  const handelRegisterWithGoogle = e => {
    e.preventDefault();
    signInWithGoogle();
  }
  return (

    <div className="login-container grid md:grid-cols-2 justify-items-center items-center">
      <div className="logIn-blob">
        <img src={logInBlob} alt="" />
      </div>
      <div className='grid '>
        <h2 className='py-3'>Create An Account</h2>
        <div className="login-form">
          <form onSubmit={handelRegisterWithEmail} >
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
              <label>Confirm Password</label>
              <br />
              <input onBlur={handelConfirmPassword} type='password' required className='w-full border-solid border-blue-500 border py-2 px-4 rounded text-gray-700' placeholder='Confirm'></input>
            </div>
            {
              loading && <p>loading...</p>
            }
            <div className="from-input">
              <input type='submit' value='Register' className='w-full border-solid text-white font-bold bg-blue-500 border py-2 px-4 rounded hover:bg-blue-600' placeholder='password'></input>
            </div>
            <div className="logIn-togol">
              <p>Already have account ? <Link to='/logIn'><span className='text-blue-500 hover:text-blue-600 underline'>Log In</span></Link> </p>
            </div>
          </form>

          <div className='op-login py-3 grid grid-cols-3 justify-between items-center'>
            <div className='line '></div>
            <div className='text-center font-bold'>or</div>
            <div className='line '></div>
          </div>

          <div className="google">
            <button onClick={handelRegisterWithGoogle} className=" logIn-btn w-full  m-0 justify-center flex items-center text-center border-solid rounded border  bg-gray-200 hover:bg-blue-500 text-md font-normal   text-black">
              {/* <img className='w-50 h-50' /> */}
              <img src={GoogleIcon} alt="" />
              <p className='font-bold'>Register With Google</p>
            </button>
          </div>
        </div>
      </div >
    </div >




  );
};

export default Register;