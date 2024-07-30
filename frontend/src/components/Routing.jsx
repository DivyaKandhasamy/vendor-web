import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Vendor from './Vendor';

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/vendor' element={<Vendor/>}/>
    </Routes>
  )
}

export default Routing