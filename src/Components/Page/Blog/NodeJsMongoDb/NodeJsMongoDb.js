import React from 'react';
import NodeJs from '../../../Assets/Blog/nodeJsMongoDb.png'


const NodeJsMongoDb = () => {
 return (
  <div className='grid justify-center py-5'>
   <div className="blog grid justify-center  border-2 p-5 shadow-lg rounded-lg">
    <img src={NodeJs} alt="" />
    <div className="blog-data text-center ">
     <h3 className='text-2xl py-5'>What different between JavaScript and Node.js?</h3>
     <p>
      Node js and MongoDb both are different technology.Both use for different purpose.
     </p>
     <p>
      <strong>NodeJs :</strong> is a javascript run time with is use for run writen script on server side.
     </p>
     <p>
      <strong>MongoDb :</strong> is a NoSQL database.MongoDb is a  document oriented.Which is store data like JSON.
     </p>
     <p>
      When we work with fontend and connect it with backend for load data from database
      <br />
      we use nodejs for run fontend script on backend and MongoDb is connect with nodejs for Display dataBase data
     </p>
    </div>
   </div>
  </div>
 );
};

export default NodeJsMongoDb;