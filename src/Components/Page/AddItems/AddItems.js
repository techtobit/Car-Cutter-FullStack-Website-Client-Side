import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './AddItems.css'
import addCarImg from '../../Assets/HeroBanner/warehouse.jpg'
import PageTitle from '../../Shared/PageTitle/PageTitle'

const AddItems = () => {
  <PageTitle title='AddItems'></PageTitle>

  const { register, handleSubmit } = useForm();
  const { inventoryId } = useParams();
  const navigate = useNavigate();

  // add singel product into database 
  const onSubmit = data => {
    if (data) {
      const url = `http://localhost:5000/inventory`
      axios.post(url, data).then(response => console.log(response)
      )
      toast("New Product Add Successfully")
    }
    else {
      toast.error('Adding Failed!', {
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

  //back to inventory if cenacle adding

  const handelBackInventory = () => {
    navigate(`/inventory/`)
  }

  return (
    <div className="addItems-container">
      <div className='addCarImg' style={{
        backgroundImage:
          `url(${addCarImg})`,
        backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
        backgroundSize: 'cover', width: '100%',
        height: '250px', opacity: '0.7'
      }}>
        <h2 className='service-title text-center text-5xl font-bold md:py-5 text-white'>
          <span className='text-2xl'>Add New Car</span>
          <br />
          <span className='service-span'>Insets Product Information</span></h2>
      </div>

      <div className='addItem-form py-5 '>
        <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 ">
          <input type='text' placeholder='Product Name' {...register("carName", { required: true })} />
          <input type='text' placeholder='Brand' {...register("brand", { required: true })} />
          <input type='text' placeholder='Category' {...register("category", { required: true })} />
          <input type='number' placeholder='Price' {...register("price", { required: true })} />
          <input type='number' placeholder='ReleaseDate' {...register("releaseDate", { required: true })} />
          <input type='number' placeholder='Quantity' {...register("quantity", { required: true })} />
          <input type='text' placeholder='Color' {...register("color", { required: true })} />
          <input type='text' placeholder='type' {...register("type", { required: true })} />
          <input type='text' placeholder='engin' {...register("engin", { required: true })} />
          <input type='text' placeholder='supplier' {...register("supplier", { required: true })} />
          <input type='text' placeholder='warehouse' {...register("warehouse", { required: true })} />
          <textarea placeholder='Description' {...register("description", { required: true })} />
          <input type='text' placeholder='Car Img Url' {...register("img", { required: true })} />

          <div>
            <input value='Add Product' type="submit" className='addProduct-btn font-semibold hover:bg-blue-600' />
            <input onClick={handelBackInventory} value='Back To Inventory' className='text-center back-btn font-semibold hover:bg-red-500 hover:text-white' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;