import React from 'react';
import LoadHomeCatagories from '../../Hooks/LoadHomeCatagories';
import Items from './Items';

const GetItems = () => {
 const [catagories] = LoadHomeCatagories();
 return (
  <div className='grid justify-center'>
   <div className="displayItems ">
    <tr>
     <td>Product</td>
     <td>Brand</td>
     <td>Category</td>
    </tr>

    {

     catagories.map(items => <Items

      key={items._id}
      items={items}
     ></Items>)
    }
   </div>
  </div>
 );
};

export default GetItems;