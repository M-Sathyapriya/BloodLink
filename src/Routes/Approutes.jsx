import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Homepage/Home';
import RegistrationForm1 from '../components/Registeration1';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import RegistrationForm2 from '../components/Registeration2';
import RegistrationForm3 from '../components/Registration3';
import ResetPassword from '../components/ResetPassword';
import OtpVerify from '../components/otpVerify';
import ForgotPassword from '../components/ForgotPassword';
import KGHospitalInfo from '../components/view';
import IMA from '../components/view2';
import Kuppu from '../components/view3';
import Blood from '../Pages/Bloodbank/Blood';
import Devihospital from '../components/viewh1';
import Corporation from '../components/viewh2';
import Port from '../components/viewh3';
import Hospital from '../Pages/Hospital/Hospital';
import Donorlogin from '../components/Donorlogin';
import Contact from '../Pages/Contact/Contact';
import Donor from '../Pages/Donor/Donor';
import DonationForm from '../Pages/Donor/Donorpage';
import Service from '../Pages/Services/Servicemain';
import FAQ from '../Pages/faq/faq';

function AppRoutes() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/RegistrationForm1' element={<RegistrationForm1 />} />
        <Route path='/RegistrationForm2' element={<RegistrationForm2 />} />
        <Route path='/RegistrationForm3' element={<RegistrationForm3 />} />
        <Route path='/resetpassword' element={<ResetPassword/>}/>
        <Route path='/verifyotp' element={<OtpVerify/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        <Route path='/view' element={ <KGHospitalInfo/>}/>
        <Route path='/view2' element={ <IMA/>}/>
        <Route path='/view3' element={ <Kuppu/>}/>
        <Route path='/bloodbank' element={<Blood/>}/>
        <Route path='/hospitalview1' element={ <Devihospital/>}/>
        <Route path='/hospitalview2' element={ <Corporation/>}/>
        <Route path='/hospitalview3' element={ <Port/>}/>
        <Route path='/hospital' element={ <Hospital/>}/>
        <Route path='/Donorlogin' element={<Donorlogin/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/DonateNow' element={<Donor/>}/>
        <Route path='/DonateNow'  element={<DonationForm/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='/faq' element={<FAQ/>}/>
      </Routes>
      <Footer />  
    </>
  );
};

export default AppRoutes;
