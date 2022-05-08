import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import facebook from '../../Assets/icons/facebook-square-brands.svg'
import instagram from '../../Assets/icons/instagram-square-brands.svg'
import linkedin from '../../Assets/icons/linkedin-brands.svg'

const Footer = () => {
 return (
  <div className='py-5 footer-container' >
   <div className="grid lg:grid-cols-4 md:grid-clos-4 sm:grid-cols-3 justify-center justify-items-center ">
    <div className="footer-content">
     <h3 className='font-bold text-white'>Quick Links</h3>
     <li><Link to='/home'>Home</Link></li>
     <li><Link to='/inventory'>Inventory</Link></li>
     <li><Link to='/blog'>Blog</Link></li>
     <li><Link to='/contactUs'>Contact Us</Link></li>
    </div>
    <div className="footer-content">
     <h3 className='font-bold text-white'>Services</h3>
     <li>Hourly services</li>
     <li>Inter country </li>
     <li>Event  Service</li>
     <li>Contact Us</li>
    </div>
    <div className="footer-content">
     <h3 className='text-white font-bold' >Others</h3>
     <li>Privacy Policy</li>
     <li>Terms of use</li>
     <li>Legal Notice</li>
     <li>Notice</li>
    </div>
    <div className="footer-content">
     <h3 className='text-white font-bold'>Social Networks</h3>
     <div className='grid grid-cols-3'>
      <li><img src={facebook} className='' alt="" /></li>
      <li><img src={instagram} className='' alt="" /></li>
      <li><img src={linkedin} className='' alt="" /></li>

     </div>

    </div>
   </div>
   <div className='pt-5'>
    <h4 className='text-center text-sm'>©CopyRight 2020-2022 || All Rights Received</h4>
   </div>
  </div>
 );
};

export default Footer;