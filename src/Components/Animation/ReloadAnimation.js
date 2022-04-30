import React from 'react';
import { Ripple } from 'react-load-animations';

const ReloadAnimation = () => {
 return (
  <>
   {/* react spiner  */}
   <div className="reload  w-full flex justify-center">
    <Ripple width={200} height={200} />
   </div>

  </>
 );
};

export default ReloadAnimation;