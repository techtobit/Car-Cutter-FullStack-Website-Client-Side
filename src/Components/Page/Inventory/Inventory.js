import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import InventoryHeroBanner from '../../Assets/HeroBanner/hero-banner.jpg'
import './Inventory.css'
import { faClock, faLocationDot, faTruck, faPlus, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const Inventory = () => {
  const { inventoryId } = useParams();
  const [item, setItem] = useState([]);


  //load data from database useing query
  useEffect(() => {
    const url = `https://dry-caverns-12353.herokuapp.com/inventory/${inventoryId}`
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

  //Update Items Quantity
  const handleIncrease = e => {
    e.preventDefault();
    const quantity = e.target.quantity.value
    const updateQuantity = { quantity }
    const process = window.confirm(`Are Your Sure? Your are Updating ${item.courseName}`)
    const url = `https://dry-caverns-12353.herokuapp.com/inventory/${inventoryId}`
    if (process && quantity > 0) {
      axios.put(url, updateQuantity)
        .then(response => {
          console.log('update', response)
          e.target.reset();
          toast('✔ Quantity Successfully Updated')
        })
    }
    else {
      toast.error('‼ Updating Failed!', {
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

  // Discrease Quantity by one when click on handelDelever
  const handelDeleverd = quantity => {
    const deleverd = quantity - 1
    let update;
    update = { quantity: deleverd }

    if (quantity > 0) {
      const url = `https://dry-caverns-12353.herokuapp.com/inventory/${inventoryId}`
      axios.put(url, update)
        .then(response => {
          console.log('update', response)
          toast(`✔ One Product Delivered ${response.statusText}`)
        })
    }
    else {
      toast.error('‼ Sold Out', {
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
        <div className="carData md:grid grid-cols-2  items-center justify-items-center border-l-4  rounded-lg border-blue-400 bg-white shadow-blue-500/50 shadow-sm shadow-cyan-500/50">
          <div className="carImg ">
            <img src={item.img} alt="" />
          </div>
          <div className="carInfo grid ">
            <div className="carDetails grid justify-items-start pt-5">
              <h3 className='md:text-2xl font-semibold'> <span className='text-black'>Product : </span> {item.carName}</h3>
              <h3 className='md:text-xl font-medium'><span className='text-black'>Price : </span>$ {item.price}</h3>
              <h3 className='md:text-xl font-medium text-green-600'><span className='text-black'>In Stock : </span> {item.quantity}</h3>
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
              <form className="reStock-btn" onSubmit={handleIncrease}>
                <input type="number" name='quantity' required />
                <input type="submit" value='Increase Stock' />
              </form>
              <div className="manage-bnt">
                <button onClick={() => handelDeleverd(item.quantity)} className="p-2 bg-yellow-400 hover:bg-yellow-300 rounded-md text-black font-semibold">
                  <FontAwesomeIcon className='pr-2' icon={faTruck}></FontAwesomeIcon>
                  Delivered</button>
                <button onClick={handelAddNewItem} className="p-2 bg-green-600 rounded-md text-white font-semibold hover:bg-green-700">
                  <FontAwesomeIcon className='pr-2' icon={faPlus}></FontAwesomeIcon>
                  Add New</button>
                <Link to='/manage' className="p-2 bg-orange-600 hover:bg-orange-700 rounded-md text-white font-semibold">
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