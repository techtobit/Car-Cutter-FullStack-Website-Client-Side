import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import ReloadAnimation from '../../Animation/ReloadAnimation';

const RequireAuth = ({ children }) => {
 const [user, loading] = useAuthState(auth)
 let location = useLocation();
 const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

 if (loading) {
  return <ReloadAnimation></ReloadAnimation>
 }

 if (!user) {
  return <Navigate to='/logIn' state={{ from: location }} replace></Navigate>
 }

 // sendEmailVerification

 if (!user.emailVerified) {
  return <div className="grid justify-center justify-items-center md:py-56">
   <h4 className='text-2xl text-red-500 font-semibold'>Your Email is not Verified</h4>
   <p>Please Verified Your Email</p>
   <p>{sending}</p>
   <p>{error}</p>
   <button className='text-xl p-2 rounded-md bg-green-600 text-white font-semibold'
    onClick={async () => {
     await sendEmailVerification();
     toast('Sent email');
     window.location.reload();
     if (loading) {
      <ReloadAnimation></ReloadAnimation>
     }
    }}
   > Send Email Again!</button>
  </div>
 }
 return children;
};

export default RequireAuth;