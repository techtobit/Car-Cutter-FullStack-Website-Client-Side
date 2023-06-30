import React, { useEffect, useState } from 'react';
import LoadHomeCatagories from '../../Hooks/LoadHomeCatagories';
import DisplayVehicles from './DisplayVehicles';
import InventoryHeroBanner from '../../Assets/HeroBanner/hero-banner.jpg'
import Pagination from '../../Hooks/Pagination';
import './Vehicles.css'

const Vehicles = () => {

  //pagination
  // const [Catagories] = LoadHomeCatagories();
  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10)
  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    fetch(`https://car-cutter.onrender.com/inventory?page=${page}&pageSize=${pageSize}`)
      .then(res => res.json())
      .then(data => setCatagories(data))
  }, [page, pageSize])

  //page data load
  useEffect(() => {
    fetch('https://car-cutter.onrender.com/carsPagination')
      .then(res => res.json())
      .then(data => {
        const count = data.count;
        const pages = Math.ceil(count / 5)
        setPageCount(pages);
      })
  }, [])

  return (
    <div className="all-vehicles">
      <div style={{
        backgroundImage:
          `url(${InventoryHeroBanner})`,
        backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
        backgroundSize: 'cover', width: '100%',
        height: '250px', opacity: '0.9'
      }}>
        <h2 className='service-title text-center text-5xl font-bold md:py-5 text-white'>
          <span className='text-2xl'>All Cars</span>
          <br />
          <span className='service-span'>Warehouse & Inventory</span></h2>
      </div>
      {/* <img src={InventoryHeroBanner} alt="" /> */}

      <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-3 '>
        {
          catagories.map(catagorie => <DisplayVehicles
            key={catagorie._id}
            catagorie={catagorie}
          ></DisplayVehicles>)

        }
      </div>
      {/* <Pagination></Pagination> */}
      <div className='p-5 m-5 text-center pagination '>
        {
          [...Array(pageCount).keys()]
            .map(number => <button className={page === number ? "selected" : ''}
              onClick={() => setPage(number)}
            >{number + 1}</button>)
        }
        <select onChange={e => setPageSize(e.target.value)}>
          <option value="5">05</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Vehicles;