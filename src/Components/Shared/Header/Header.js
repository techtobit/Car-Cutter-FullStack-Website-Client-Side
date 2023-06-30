import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init'
import { signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import './Header.css';
import SiteLogo from '../../Assets/logo3.svg';
import CustomLink from './ActiveLink/CustomLink';
const Header = () => {
 const [user] = useAuthState(auth);
 const handelSingOut = () => {
  signOut(auth)
 }
 return (
  <div className='nav-section grid grid-cols-3 py-2 justify-center justify-items-center items-center'>
   <div className="nav-logo pr-20 flex justify-center">
    <img src={SiteLogo} alt="" />
   </div>
   <div className="nav-link font-medium flex items-center">
    <CustomLink className='links' to='/home'>Home</CustomLink>
    <CustomLink className='links' to='/inventory'>Inventory</CustomLink>
    {/* <Link className='links p-4' to='/lifestyle'>Lifestyle</Link> */}
    <CustomLink className='links' to='/blog'>Blog</CustomLink>

   </div>
   <div className="nav-link font-medium flex items-center">
    {user ?
     <div className='nav-link flex items-center'>
      <CustomLink className='links ' to='/items'>Items</CustomLink>
      <CustomLink className='links' to='/manage'>Manage</CustomLink>
      <CustomLink className='links ' to='/AddNew'>Add</CustomLink>
      <CustomLink style={{ color: 'white' }} onClick={handelSingOut} className='admin-btn px-3 py-1 font-medium rounded-full' to='/home'>LogOut</CustomLink>
     </div>
     :
     <div className=''>
      <Link className=' admin-btn px-3 py-1 font-medium rounded-full' to='/logIn'>LogIn</Link>
     </div>
    }

   </div>
  </div>
 );
};

export default Header;