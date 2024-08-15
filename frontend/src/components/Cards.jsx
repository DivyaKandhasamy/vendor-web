import React from 'react';
import Single from '../assets/single.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4'>
      <h1 className='text-center text-white text-bold pb-20 text-6xl'>Editions</h1>
      <div className='flex flex-col md:flex-row justify-center'>
        <div className='md:w-[400px] cursor-pointer md:mx-10 shadow-2xl bg-white flex flex-col p-4 my-4 rounded-lg md:hover:scale-105 md:duration-300'>
          <img className='w-20 mx-auto bg-white' src={Triple} alt="community" />
          <h2 className='text-2xl font-bold text-center py-8'>Community Edition</h2>
          <p className='text-center text-4xl font-bold'>Free</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Limited access to Database</p>
            <p className='py-2 border-b mx-8'>Ability to request vendors</p>
            <p className='py-2 border-b mx-8'>Manual Reports</p>
          </div>
          <button className='bg-[#00df9a] hover:brightness-75 ease-in duration-150 cursor-pointer w-[150px] rounded-md font-medium my-6 mx-auto py-2 text-black'>Login</button>
        </div>
        <div className='md:w-[400px] cursor-pointer md:mx-10 shadow-2xl bg-white flex flex-col p-4 my-4 rounded-lg md:hover:scale-105 md:duration-300'>
          <img className='w-20 mx-auto bg-white' src={Single} alt="commercial" />
          <h2 className='text-2xl font-bold text-center py-8'>Commercial Edition</h2>
          <p className='text-center text-4xl font-bold'>$149</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Unlimited access to database</p>
            <p className='py-2 border-b mx-8'>API access</p>
            <p className='py-2 border-b mx-8'>Unlimited Vendor Request & Automated Reports</p>
          </div>
          <button className='bg-[#00df9a] hover:brightness-75 ease-in duration-150 cursor-pointer w-[150px] rounded-md font-medium my-6 mx-auto py-2 text-black'>Coming Soon</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
