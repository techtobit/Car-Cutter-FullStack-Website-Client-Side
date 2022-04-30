import React from 'react';
import LoadHomeCatagories from '../../Hooks/LoadHomeCatagories';
import DisplayHomeCatagories from './DisplayHomeCatagories';

const GetHomeCatagories = () => {
 const [Catagories] = LoadHomeCatagories();
 return (
  <div className="homeB">
   <h1 className='text-4xl text-center py-5'>Top Brands</h1>
   <div className='grid grid-cols-3 gap-3 justify-center justify-items-center'>

    {
     Catagories.map(catagorie => <DisplayHomeCatagories
      key={catagorie.img}
      catagorie={catagorie}
     ></DisplayHomeCatagories>)
    }
   </div>
  </div>

 );
};

export default GetHomeCatagories;