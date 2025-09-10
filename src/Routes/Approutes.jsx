import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Homepage/Home';
import RegistrationForm1 from '../components/Registeration1';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import RegistrationForm2 from '../components/Registeration2';
import RegistrationForm3 from '../components/Registration3';

function AppRoutes() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/RegistrationForm1' element={<RegistrationForm1 />} />
        <Route path='/RegistrationForm2' element={<RegistrationForm2 />} />
        <Route path='/RegistrationForm3' element={<RegistrationForm3 />} />
      </Routes>
      <Footer />  
    </>
  );
};

export default AppRoutes;
