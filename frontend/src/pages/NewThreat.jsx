import React from 'react';
import banner from '../assets/newthreat-img.png'

const NewThreat = () => {
  return (
   <>
   <div className='flex px-10 bg-gray-100 pt-10'>
        <div className='text-gray-900'>
          <div className='max-w-[800px] mt-[-220px] w-full h-screen   flex flex-col justify-center'>
            <h1 className=' font-bold md:py-6 text-4xl text-[#0f172a]'>
            Industry Threat Landscape Report
            </h1>
            <h1 className='mb-4 text-xl text-[#00df9a] font-semibold'>Get a holistic perspective on cyber threats targeting your industry</h1>
            <p className='text-lg  text-gray-500'>Gain industry-based insights into the cybercrime ecosystem and empower cybersecurity posture against potential cyber threats with SOCRadar AI in seconds.</p>
          </div>
        </div>
        <div className='flex-1'>
          <img alt='banner' src={banner} />
        </div>
      </div>
   </>
  )
}

export default NewThreat