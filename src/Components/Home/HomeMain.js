import React from 'react';
import HeroBanner from './Banner/HeroBanner';
import CarBrands from './CarBrands/CarBrands';
import './CarBrands/CarBrands.css'
import '../../App.css'

import GetHomeCatagories from './HomeInventory/GetHomeCatagories';
import Services from './Services/Services';
import ManageInventory from './ManageInventory/ManageInventory';

const HomeMain = () => {
 return (
  <div>
   <HeroBanner></HeroBanner>
   <CarBrands></CarBrands>
   <GetHomeCatagories></GetHomeCatagories>
   <ManageInventory></ManageInventory>
   <Services></Services>

  </div>
 );
};

export default HomeMain;