import React from 'react';
import LoadHomeCatagories from '../../Hooks/LoadHomeCatagories';
import itemBanner from '../../Assets/HeroBanner/banner-testi.jpg'
import './GetItems.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'
import ReloadAnimation from '../../Animation/ReloadAnimation';

const GetItems = () => {
  const [catagories] = LoadHomeCatagories();
  const [loading] = useAuthState(auth);
  const navigate = useNavigate()

  // add new items in database 
  const handelAddItem = () => {
    console.log('Add clicked');
    navigate('/AddNew')
  }


  //delete items from database
  const handelDeleteItem = i => {
    const id = i
    const process = window.confirm(`Are Your Sure? Your are deleting`)
    if (process) {
      const url = `https://car-cutter-full-stack-website-server-side.vercel.app/inventory/${id}`
      console.log(url);
      axios.delete(url, i)
        .then(response => console.log(response))
      toast('Deleted Successfully')
      window.location.reload();
      if (loading) {
        <ReloadAnimation></ReloadAnimation>
      }

    }
    else {
      toast.error('Error !', {
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
    <div className=''>
      <div style={{
        backgroundImage:
          `url(${itemBanner})`,
        backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
        backgroundSize: 'cover', width: '100%',
        height: '250px', opacity: '0.8'
      }}>
        <h2 className='service-title text-center text-5xl font-bold md:py-5 text-white'>
          <span className='text-2xl'>All Cars</span>
          <br />
          <span className='service-span'>Warehouse & Inventory</span></h2>
      </div>

      <div className="displayItems grid justify-center py-10 overflow-auto ">
        <table class="Items-table table table-bordered border-primary ">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Brand</th>
              <th scope="col">Category</th>
              <th scope="col">Color</th>
              <th scope="col">Release</th>
              <th scope="col">Supplier</th>
              <th scope="col">warehouse</th>
              <th scope="col">quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Manage</th>
            </tr>
          </thead>
          <tbody>
            {
              catagories.map(items =>
                <tr>
                  <td>{items.carName}</td>
                  <td>{items.brand}</td>
                  <td>{items.category}</td>
                  <td>{items.color}</td>
                  <td>{items.releaseDate}</td>
                  <td>{items.supplier}</td>
                  <td>{items.warehouse}</td>
                  <td>{items.quantity}</td>
                  <td>$ {items.price}</td>
                  <td >

                    <button onClick={handelAddItem} className='bg-green-600 text-white font-semibold px-3 py-1 mx-1 hover:bg-green-700 rounded'>Add</button>
                    <button onClick={() => handelDeleteItem(items._id)} className='bg-red-500 text-white font-semibold px-3 py-1 mx-1 hover:bg-red-600 rounded'>Delete</button>
                  </td>


                </tr>
              )
            }


          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetItems;