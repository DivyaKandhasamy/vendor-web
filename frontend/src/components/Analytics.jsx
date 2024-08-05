import React from 'react';
import CountUp from 'react-countup';
const Analytics = () => {
  return (
    <div className='w-full bg-gray-100 py-16 px-4'>
      <div className='max-w-[1240px] text-center mx-auto grid md:grid-cols-4'>
        <div className='flex flex-col items-center'>
          <CountUp className='font-bold text-primary pb-2 text-7xl' end={750} duration={3}/>
          <p>breached websites</p>
        </div>
        <div className='flex flex-col items-center'>
          <CountUp className='font-bold text-primary pb-2 text-7xl' end={7500} duration={3}/>
          <p>breached accounts</p>
        </div>
        <div className='flex flex-col items-center'>
          <CountUp className='font-bold text-primary pb-2 text-7xl' end={115796} duration={3}/>
          <p>pastes</p>
        </div>
        <div className='flex flex-col items-center'>
          <CountUp className='font-bold text-primary pb-2 text-7xl' end={75965} duration={3}/>
          <p>paste accounts</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
