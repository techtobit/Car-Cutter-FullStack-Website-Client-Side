import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Manage = ({ item }) => {
  const { _id, carName, brand, category, price
    , releaseDate, quantity, color, type, engin, supplier, warehouse, img } = item;

  const navigate = useNavigate();
  const [loading] = useAuthState(auth)
  // add item data into database 
  const handelManageAdd = () => {
    navigate('/AddNew')
  }


  const handelManageDelete = i => {
    const url = `https://car-cutter.onrender.com/inventory/${_id}`

    axios.delete(url, i)
      .then(response => {
        console.log(response);
        toast('Product Delete Successfully')
        window.location.reload();
      })

  }
  return (
    <div className='flex justify-center py-5'>
      <div className='vehicles p-5 flex justify-evenly  border-l-4 border-blue-400  items-center bg-white rounded-lg drop-shadow-lg '>
        <div className="vehicles-img">
          <img src={img} alt="" />
        </div>
        <div className="vehicles-info">
          <h4 className='text-xl font-semibold '>{carName}</h4>
          <h4 className='text-md font-medium py-2'>Price : ${price}</h4>
          <h4>Brand : {brand}</h4>
          <h4 className=''>Category : {category}</h4>
        </div>
        <div className="vehicles-info">
          <h4 className=''>Color : {color}</h4>
          <h4 className=''>Type : {type}</h4>
          <h4 className=''>Engin : {engin}</h4>
          <h4 className=''>ReleaseDate : {releaseDate}</h4>
        </div>
        <div className="vehicles-info">
          <h4 className=''>Quantity : {quantity}</h4>
          <h4 className=''>Supplier : {supplier}</h4>
          <h4 className=''>Warehouse : {warehouse}</h4>
        </div>
        <div className="brand-btn">
          <button onClick={handelManageAdd} className=' p-2 text-white font-medium rounded-lg bg-green-500 hover:bg-green-600 border-2'>Add New</button>
          <button className=' p-2 text-white font-medium rounded-lg bg-blue-500 hover:bg-blue-600 border-2'>Update</button>
          <button onClick={() => handelManageDelete(_id)} className=' p-2 text-white font-medium rounded-lg bg-red-500 hover:bg-red-600  border-2'>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Manage;