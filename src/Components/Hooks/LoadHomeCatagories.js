import React, { useEffect, useState } from 'react';

const LoadHomeCatagories = () => {
  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    fetch('https://car-cutter-fullstack-website-serverside.onrender.com/inventory')
      .then(res => res.json())
      .then(data => setCatagories(data))
  }, [])
  return [catagories, setCatagories]
};

export default LoadHomeCatagories;