import React from 'react';
import './Items.css'



const Items = ({ items }) => {
 const { carName, brand, category, price, color, quantity, supplier, warehouse } = items;


 return (
  <div className='grid justify-center'>
   <table>
    <tbody>
     <tr>
      <td>{carName}</td>
      <td>{brand}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{color}</td>
      <td>{quantity}</td>
      <td>{supplier}</td>
      <td>{warehouse}</td>
      <td>
       <button>Update</button>
      </td>
      <td>
       <button>ADD</button>
      </td>
      <td>
       <button>Delete</button>
      </td>
     </tr>
    </tbody>

   </table>
  </div>
 );
};

export default Items;