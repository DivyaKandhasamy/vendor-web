import React from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();

  return (
    <div className='bg-gray-100'>
      Hello, {id}
    </div>
  );
};

export default DetailPage;