import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init'
import { signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
const Header = () => {
 const [user] = useAuthState(auth);
 const handelSingOut = () => {
  signOut(auth)
 }
 return (
  <div className='nav-section grid grid-cols-2 justify-center justify-items-center'>
   <div className="nav-link font-bold flex justify-center">
    <Link className='links p-4' to='/home'>Home</Link>
    <Link className='links p-4' to='/vehicles'>Vehicles</Link>
    <Link className='links p-4' to='/lifestyle'>Lifestyle</Link>
    <Link className='links p-4' to='/blog'>Blog</Link>
   </div>
   <div className="nav-link font-bold flex justify-center">
    {user ?
     <Link onClick={handelSingOut} className='links  p-4' to='/home'> SingOUt</Link>
     :
     <Link className='links  p-4' to='/logIn'>Admin LogIn</Link>
    }

   </div>
  </div>
 );
};

export default Header;