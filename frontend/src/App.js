
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom';
import Vendor from './pages/Vendor';
import APT from './pages/APT';
import VendorDetails from './pages/VendorDetails';
import DetailPage from './pages/APTDetail';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/vendors' element={<Vendor/>} />
        <Route path='/apt' element={<APT />} />
        <Route path="/vendor/details/:id" element={<VendorDetails/>} />
        <Route path='/apt/details/:id' element={<DetailPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
