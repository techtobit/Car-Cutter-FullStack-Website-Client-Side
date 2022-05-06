import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


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

  console.log(item.length + 1);
  return (
    <div className='text-center grid justify-center'>
      <h1 className='text-5xl'>This is inventory {item.length}</h1>
      <h1 className='text-5xl'>{item.courseName}</h1>
      <img src={item.img} alt="" />
      <div className="btns">
        <button onClick={handelUpdateItem} className="p-2" >Update</button>
        <button onClick={handelAddNewItem} className="p-2">Add New</button>
        <button onClick={() => handelDeleteItem(item._id)} className="p-2">Delete</button>
      </div>
    </div>
  );
};

export default Inventory;