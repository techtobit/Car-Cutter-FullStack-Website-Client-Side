import React from 'react';
import LoadHomeCatagories from '../../Hooks/LoadHomeCatagories';
import itemBanner from '../../Assets/HeroBanner/banner-testi.jpg'
import './GetItems.css';

const GetItems = () => {
 const [catagories] = LoadHomeCatagories();
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

   <div className="displayItems  grid justify-center py-10">
    <table class="table table-bordered border-primary ">
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

          <button className='bg-green-600 text-white font-semibold px-3 py-1 mx-1 hover:bg-green-700 rounded'>Add</button>
          <button className='bg-blue-600 text-white font-semibold px-3 py-1 mx-1 hover:bg-blue-700 rounded'>Update</button>
          <button className='bg-red-500 text-white font-semibold px-3 py-1 mx-1 hover:bg-red-600 rounded'>Delete</button>
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