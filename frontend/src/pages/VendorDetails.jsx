import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const VendorDetails = () => {
  const [gridData, setGridData] = useState({}); 
  const {id} = useParams()
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:5000/vendors/vendordetails/${id}`);
        setGridData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [id]);
  return (
    <div className='bg-gray-100'>
    <p>{gridData.vendorName}</p>
    </div>
  )
}

export default VendorDetails