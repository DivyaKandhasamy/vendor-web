import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom';
import Vendor from './pages/Vendor';
import APT from './pages/APT';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vendors' element={<Vendor />} />
        <Route path='/apt' element={<APT />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
