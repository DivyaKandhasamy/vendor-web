import React, { useEffect, useState } from 'react';
import Analytics from '../components/Analytics';
import Cards from '../components/Cards';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import axios from 'axios'
function Home() {
  const [gridData, setGridData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try{
        const url='http://localhost:5000/vendors/vendorlatest'
        const response = await axios.get(url);
        setGridData(response.data);
      }
      catch (error){
        console.log(error);
      }
    }
    getData();
  },[])

  return (
    <div>
      <div>
        <div className='w-full -z-50 pattern-bg h-full'/>
        <Hero />
      </div>
      <div>
        <div className='w-full -z-50 pattern-bg h-full'/>
        <Cards />
      </div>
      <Analytics gridData = {gridData} />
      <div>
        <div className='w-full -z-50 pattern-bg h-full'/>
        <Newsletter />
      </div>
    </div>
  );
}

export default Home;
