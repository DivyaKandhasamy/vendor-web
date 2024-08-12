import React from 'react';
import { useParams } from 'react-router-dom';

const VendorDetails = () => {
  const {id} = useParams()
  return (
    <div>{id}</div>
  )
}

export default VendorDetails