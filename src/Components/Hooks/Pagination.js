import React, { useEffect, useState } from 'react';

const Pagination = () => {
  const [pageCount, setPageCount] = useState(0)

  useEffect(() => {
    fetch('https://dry-caverns-12353.herokuapp.com/carsPagination')
      .then(res => res.json())
      .then(data => {
        const count = data.count;
        const pages = Math.ceil(count / 5)
        setPageCount(pages);
      })
  }, [])
  return (
    <div className='p-5 m-5 text-center'>
      {
        [...Array(pageCount).keys()]
          .map(number => <button className='p-5'>{number + 1}</button>)
      }
    </div>
  );
};

export default Pagination;