import React from 'react';
import CountUp from 'react-countup';
import Grid from '../components/Grid'
const Analytics = (props) => {
  return (
    <div className='w-full bg-gray-100 py-16 px-4'>
      <div className='max-w-[1240px] text-center mx-auto grid  md:grid-cols-2 py-16'>
        <div className='flex flex-col mb-20 items-center'>
          <CountUp className='font-bold text-primary pb-2 text-7xl' end={750} duration={3}/>
          <p>breached websites</p>
        </div>
        <div className='flex flex-col mb-20 items-center'>
          <CountUp className='font-bold text-primary pb-2 text-7xl' end={7500} duration={3}/>
          <p>breached accounts</p>
        </div>
        <div className='flex flex-col mb-20 items-center'>
          <CountUp className='font-bold text-primary pb-2 text-7xl' end={115796} duration={3}/>
          <p>pastes</p>
        </div>
        <div className='flex flex-col mb-20 items-center'>
          <CountUp className='font-bold text-primary pb-2 text-7xl' end={75965} duration={3}/>
          <p>paste accounts</p>
        </div>
      </div>
      <Grid gridData = {props.gridData}/>
      <div className='text-center'>
      <a href='/vendors'>
        <button className='bg-[#00df9a] hover:brightness-75 ease-in duration-150 cursor-pointer w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>See all Vendors</button>
      </a>
      </div>
    </div>
  );
};

export default Analytics;
