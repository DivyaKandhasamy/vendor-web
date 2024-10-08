import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/darknet.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='bg-gray-100 flex justify-between items-center h-24 mx-auto text-gray-900'>
      <div className='w-full -z-50 pattern-bg h-full'/>
      <div>
        <img alt='logo' className='w-52 logo' src={logo}/>
      </div>
      <ul className='hidden px-10 items-center md:flex'>
        <li key="homeD" className='p-4'>
          <NavLink
            to="/"
            exact="true"
            className={({ isActive }) =>
              isActive ? 'border-b-2 border-[#00df9a]' : 'hover:border-b-2 hover:border-[#00df9a]'
            }
          >
            Home
          </NavLink>
        </li>
        <li key="vendorD" className='p-4'>
          <NavLink exact="false"
            to="/vendors"
            className={({ isActive }) =>
              isActive ? 'border-b-2 border-[#00df9a]' : 'hover:border-b-2 hover:border-[#00df9a]'
            }
          >
            Vendors
          </NavLink>
        </li>
        <li key="aptD" className='p-4'>
          <NavLink exact="false"
            to="/apt"
            className={({ isActive }) =>
              isActive ? 'border-b-2 border-[#00df9a]' : 'hover:border-b-2 hover:border-[#00df9a]'
            }
          >
            APT
          </NavLink>
        </li>
        <li key="newthreat" className='p-4'>
          <NavLink
            to="/newthreat"
            className={({ isActive }) =>
              isActive ? 'border-b-2 border-[#00df9a]' : 'hover:border-b-2 hover:border-[#00df9a]'
            }
          >
            Threat Report
          </NavLink>
        </li>
        <button className='bg-[#00df9a] hover:brightness-75 ease-in duration-150 cursor-pointer w-[150px] rounded-md font-medium my-6 mx-auto py-2 text-black'>Login</button>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Darknet Safe</h1>
        <li key="home" className='p-4 border-b border-gray-600'>
          <NavLink
            to="/"
            exact="true"
            className={({ isActive }) =>
              isActive ? 'border-b-2 border-[#00df9a]' : ''
            }
          >
            Home
          </NavLink>
        </li>
        <li key="vendors" className='p-4 border-b border-gray-600'>
          <NavLink
            to="/vendors"
            className={({ isActive }) =>
              isActive ? 'border-b-2 border-[#00df9a]' : ''
            }
          >
            Vendors
          </NavLink>
        </li>
        <li key="apt" className='p-4 border-b border-gray-600'>
          <NavLink
            to="/apt"
            className={({ isActive }) =>
              isActive ? 'border-b-2 border-[#00df9a]' : ''
            }
          >
            APT
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
