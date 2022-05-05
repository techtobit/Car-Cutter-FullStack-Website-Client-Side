import React from 'react';
import LoadHomeCatagories from '../../Hooks/LoadHomeCatagories';
import DisplayHomeCatagories from './DisplayHomeCatagories';
import './GetHome.css'

const GetHomeCatagories = () => {
 const [catagories] = LoadHomeCatagories();
 return (
  <div className="latest-cars">
   <h2 className='service-title text-center text-5xl font-bold md:py-20 text-black'>
    <span className='text-2xl'>Latest Cars</span>
    <br />
    <span className='service-span'>Most Popular Have In Warehouse</span></h2>
   <div className='company py-5 grid lg:grid-cols-2 gap-3 justify-center justify-items-center'>
    {
     catagories.slice(0, 6).map(catagorie => <DisplayHomeCatagories
      key={catagorie._id}
      catagorie={catagorie}
     ></DisplayHomeCatagories>)
    }
   </div>
  </div>

 );
};

export default GetHomeCatagories;