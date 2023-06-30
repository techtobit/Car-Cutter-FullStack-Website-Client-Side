import React from 'react';
import JsVsNodeJs from '../../../Assets/Blog/javascript-vs-nodejs.png'
import './Javscript.css'
const Javascript = () => {
 return (
  <div className='grid justify-center py-5 post-container'>
   <div className="blog grid justify-center  border-2 p-5 shadow-lg rounded-lg">
    <img src={JsVsNodeJs} alt="" />
    <div className="blog-data text-center ">
     <h3 className='text-2xl py-5'>What different between JavaScript and Node.js?</h3>
     <table class="table table-bordered border-primary ">
      <thead>
       <tr>
        <th scope="col">Javascript</th>
        <th scope="col">NodeJs</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>
         Javascript is a programing language use for writhing script on web page
        </td>
        <td>Node js is a interpreter open source javascript environmental language </td>
       </tr>
       <tr>
        <td>It can only run in any web browsers</td>
        <td>It can use and run on out of browser</td>
       </tr>
       <tr>
        <td>JavaScript use for clint side</td>
        <td>And NodeJs use for Server Side</td>
       </tr>
       <tr>
        <td>JavaScript can use with any search engine like Spider monkey </td>
        <td>And NodeJs is developed base on google V8 engine we can only use V8</td>
       </tr>
      </tbody>
     </table>
    </div>
   </div>
  </div>
 );
};

export default Javascript;