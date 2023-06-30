import React from 'react';
import LoadHomeCatagories from '../../Hooks/LoadHomeCatagories';
import Manage from './Manage';

const GetManage = () => {
 const [catagories] = LoadHomeCatagories();
 return (
  <div>
   <div className="manage-data">
    {
     catagories.map(item => <Manage 
     key={item._id}
     item = {item}
     ></Manage>)
    }
   </div>
  </div>
 );
};

export default GetManage;