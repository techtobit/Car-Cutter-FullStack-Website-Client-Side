import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddItems = () => {
 const { register, handleSubmit } = useForm();
 
 // add singel product into database 
 const onSubmit = data => {
  const url = `http://localhost:5000/inventory`
  axios.post(url, data).then(response => console.log(response))
  }

 return (
  <div>
   <h1>This is from</h1>
   <form onSubmit={handleSubmit(onSubmit)}>
    <input type='text' placeholder='Product Name' {...register("name", { required: true })} />
    <input type='number' placeholder='Price' {...register("price", { required: true })} />
    <textarea placeholder='Discr' {...register("discr", { required: true })} />
    <input type='text' placeholder='Demo Url' {...register("img", { required: true })} />
    <input value='Add Product' type="submit" />
   </form>
  </div>
 );
};

export default AddItems;