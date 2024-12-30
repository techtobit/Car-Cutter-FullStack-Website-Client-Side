import React, { useEffect, useState } from 'react';

const LoadHomeCatagories = () => {
  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    fetch('https://car-cutter-full-stack-website-server-side.vercel.app/inventory')
      .then(res => res.json())
      .then(data => setCatagories(data))
  }, [])
  return [catagories, setCatagories]
};
export default LoadHomeCatagories;