
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function APT(){
    const [gridData, setGridData] = useState([]); 
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get('http://localhost:5000/apt');
            setGridData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        fetchData();
      }, []);
    return (
        <>
            <div className='bg-gray-100'>
            {gridData.map((data) => {
                
                return (
                 <p>{data.name}</p>
                );
              })}
            </div>
        </>
    )
}