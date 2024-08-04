import React from 'react';
import {ReactTyped} from 'react-typed';
import banner from '../assets/hero-image.webp'
const Hero = () => {
  return (
    <>
      <div className='flex px-10 bg-gray-100 pt-10'>
        <div className='text-gray-900'>
          <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <h1 className='text-7xl font-bold md:py-6'>
              Secure your supply chain
            </h1>
            <div className='flex justify-center items-center'>
              <ReactTyped
                className='text-3xl text-[#00df9a] pb-5 font-bold md:pl-4 pl-2'
                strings={['Check latest breaches', 'Get risk score', 'Get a list of APTs']}
                typeSpeed={90}
                backSpeed={50}
                loop
              />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Reduce third-party incidents by 75% and transform how your team identifies, monitors, mitigates, and reports on risk.</p>
            <button className='bg-[#00df9a] hover:brightness-75 ease-in duration-150 cursor-pointer w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>See Vendors -&gt;</button>
          </div>
        </div>
        <div className='flex-1'>
          <img alt='banner' src={banner}/>
        </div>
      </div>
    </>
  );
};

export default Hero;
