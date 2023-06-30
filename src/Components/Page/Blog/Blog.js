import React from 'react';
import Javascript from './Javscript/Javascript';
import JWT from './JWT/JWT';
import NodeJsMongoDb from './NodeJsMongoDb/NodeJsMongoDb';
import SQLvsNoSQL from './SQLvsNoSQL/SQLvsNoSQL';


const Blog = () => {
 return (
  <div className=''>
   <Javascript></Javascript>
   <NodeJsMongoDb></NodeJsMongoDb>
   <SQLvsNoSQL></SQLvsNoSQL>
   <JWT></JWT>
  </div>
 );
};

export default Blog;