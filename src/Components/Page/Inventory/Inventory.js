import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import InventoryHeroBanner from '../../Assets/HeroBanner/hero-banner.jpg'
import './Inventory.css'
import { faClock, faLocationDot, faTruck, faPlus, faListCheck } from '@fortawesome/free-solid-svg-icons';


const Inventory = () => {
  const { inventoryId } = useParams();
  const [item, setItem] = useState([]);

  //load data from database useing query
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${inventoryId}`
    fetch(url)
      .then(res => res.json())
      .then(data => setItem(data))
  }, [item])

  const navigate = useNavigate();
  const handelUpdateItem = () => {

  }
  const handelAddNewItem = () => {
    navigate(`/inventory/${inventoryId
      }/AddNew`)
  }
  const handelDeleteItem = i => {
    const process = window.confirm(`Are Your Sure? Your are deleting ${item.courseName}`)
    if (process) {
      const url = `http://localhost:5000/inventory/${inventoryId}`
      axios.delete(url, i)
        .then(response => console.log(response))
      navigate('/inventory')
    }



  }

  return (
    <div className='text-center grid '>
      <div style={{
        backgroundImage:
          `url(${InventoryHeroBanner})`,
        backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
        backgroundSize: 'cover', width: '100%',
        height: '250px', opacity: '0.9'
      }}>
        <h2 className='service-title text-center text-5xl font-bold md:py-5 text-white'>
          <span className='text-2xl'>Car</span>
          <br />
          <span className='service-span'>Futures & Information</span></h2>
      </div>
      <div className='car-section grid    p-10'>
        <div className="carData grid grid-cols-2  items-center justify-items-center border-l-4  rounded-lg border-blue-400 bg-white shadow-blue-500/50 shadow-sm shadow-cyan-500/50">
          <div className="carImg ">
            <img src={item.img} alt="" />
          </div>
          <div className="carInfo grid ">
            <div className="carDetails grid justify-items-start pt-5">
              <h3 className='text-2xl font-semibold'> <span className='text-black'>Product : </span> {item.carName}</h3>
              <h3 className='text-xl font-medium'><span className='text-black'>Price : </span>$ {item.price}</h3>
              <h3 className='text-xl font-medium text-green-600'><span className='text-black'>In Stock : </span> {item.quantity}</h3>
              <table>
                <tr className='flex '>
                  <td className='font-medium'>Brand : {item.brand}</td>
                  <td className='pl-5 font-medium'>Category : {item.category}</td>
                </tr>
                <tr className='flex '>
                  <td className='font-medium'>Color : {item.color}</td>
                  <td className='pl-5 font-medium'>System : {item.type}</td>
                </tr>
                <tr className='flex '>
                  <td className='font-medium'>Engin : {item.engin}</td>
                  <td className='pl-5 font-medium'>Supplier : {item.supplier}</td>
                </tr>
                <tr className='flex '>
                  <td className='font-medium'>
                    <FontAwesomeIcon className='text-blue-500 pr-2' icon={faClock}></FontAwesomeIcon>
                    Release : {item.releaseDate}</td>
                  <td className='pl-5 font-medium'>
                    <FontAwesomeIcon className='text-blue-500 pr-2' icon={faLocationDot} />Warehouse :
                    {item.warehouse}</td>
                </tr>
              </table>
            </div>

            <div className="btns  pb-5">
              <div className="reStock-btn">
                <input type="number" name='quantity' />
                <input type="button" value='Increase Stock' />
              </div>
              <div className="manage-bnt">
                <button className="p-2 bg-yellow-400 rounded-md text-black font-semibold">
                  <FontAwesomeIcon className='pr-2' icon={faTruck}></FontAwesomeIcon>
                  Delivered</button>
                <button onClick={handelAddNewItem} className="p-2 bg-green-600 rounded-md text-white font-semibold">
                  <FontAwesomeIcon className='pr-2' icon={faPlus}></FontAwesomeIcon>
                  Add New</button>
                <Link to='/manage' className="p-2 bg-orange-600 rounded-md text-white font-semibold">
                  <FontAwesomeIcon className='pr-2' icon={faListCheck}></FontAwesomeIcon>
                  Manage</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Inventory;