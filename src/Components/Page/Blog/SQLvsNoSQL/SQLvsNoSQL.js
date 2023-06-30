import React from 'react';
import SQLimg from '../../../Assets/Blog/SQL-Vs-NoSQL1.png'

const SQLvsNoSQL = () => {
 return (
  <div className='grid justify-center '>
   <div className="blog grid justify-center  border-2 p-5 shadow-lg rounded-lg">
    <img src={SQLimg} alt="" />
    <div className="blog-data text-center ">
     <h3 className='text-2xl py-5'>Differences between Sql and NoSql databases.?</h3>
     <table class="table table-bordered border-primary ">
      <thead>
       <tr>
        <th scope="col">SQL</th>
        <th scope="col">NoSQL</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>
         SQL are relational dataBase
        </td>
        <td>SQL are non-relational dataBase</td>
       </tr>
       <tr>
        <td>SQL databases are vertically scalable</td>
        <td>SQL databases are horizontally scalable</td>
       </tr>
       <tr>
        <td>Its a table-base Database</td>
        <td>Its are document,key-value column Database</td>
       </tr>
       <tr>
        <td>SQL is a structured query schema </td>
        <td>NoSql is a unstructured dynamic schemas</td>
       </tr>
      </tbody>
     </table>
    </div>
   </div>
  </div>
 );
};

export default SQLvsNoSQL;