import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import manageImg from '../../Assets/Others/hero-01.webp'
import './ManageInventory.css'
import { faBoxesStacked } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ManageInventory = () => {

  return (
    <div className='manage grid md:grid-cols-2 sm:grid-cols-2 justify-center justify-items-center items-center py-5'>
      <div className="manageImg">
        <img src={manageImg} alt="" />
      </div>
      <div className="manageInfo grid">
        <h2 className='md:text-4xl font-bold text-blue-500 py-2'>Inventory Management</h2>
        <div>
          <p className=' py-2'>
            We provide services for ordering, storing, using, and selling any car company's inventory. This includes
            the management of raw materials, components, and finished products, as well as warehousing and processing of such items.
            <br />
            Please check and try again!
          </p>
        </div>
        <div>
          <Link to='/manage' className='px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded'>
            <FontAwesomeIcon icon={faBoxesStacked} className='pr-2'></FontAwesomeIcon>
            Manage</Link>
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;