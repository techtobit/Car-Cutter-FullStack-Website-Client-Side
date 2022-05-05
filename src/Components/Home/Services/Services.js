import React from 'react';
import dealerships from '../../Assets/services/dealerships.webp'
import Inventories from '../../Assets/services/inventorys.webp'
import Warehouse from '../../Assets/services/warehouse.jpg'
import CarRent from '../../Assets/services/car-rent-2.jpg'
import './Services.css'
const Services = () => {
  return (
    <>
      <h2 className='service-title text-center text-5xl font-bold pt-20 text-black'>
        <span className='text-2xl'>Services We Provides</span>
        <br />
        <span className='service-span'> Choose your starting point.</span></h2>
      <div className='services-section lg:p-20  md:p-14  '>
        <div className="services grid md:grid-cols-2 sm:grid-cols-1  lg:gap-20  md:gap-16  justify-items-center">
          <div className="item grid justify-center justify-items-center item-img">
            <div className=''>
              <img className='rounded-lg' src={dealerships} alt="" />
              <div className='item-data'>
                <h3 className='text-4xl font-bold text-white pb-2'>Dealerships</h3>
                <button className='px-4 py-2 rounded-full text-md font-medium text-black ReadMore-btn' >
                  Learn More</button>
              </div>
            </div>
          </div>

          <div className="item grid justify-center justify-items-center item-img">
            <div className=''>
              <img className='' src={Inventories} alt="" />
              <div className='item-data'>
                <h3 className='text-4xl font-bold text-white pb-2'>Inventories</h3>
                <button className='px-4 py-2 rounded-full text-md font-medium text-black ReadMore-btn' >
                  Learn More</button>
              </div>
            </div>
          </div>

          <div className="item grid justify-center justify-items-center item-img Warehouse">
            <div className='hover'>
              <img className='rounded-lg' src={Warehouse} alt="" />
              <div className='item-data'>
                <h3 className='text-4xl font-bold text-white pb-2'>Warehouse</h3>
                <button className='px-4 py-2 rounded-full text-md font-medium text-black ReadMore-btn' >
                  Learn More</button>
              </div>
            </div>
          </div>

          <div className="item grid justify-center justify-items-center item-img Warehouse">
            <div className=''>
              <img className='rounded-lg' src={CarRent} alt="" />
              <div className='item-data'>
                <h3 className='text-4xl font-bold text-white pb-2'>Car Rent</h3>
                <button className='px-4 py-2 rounded-full text-md font-medium text-black ReadMore-btn' >
                  Learn More</button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default Services;