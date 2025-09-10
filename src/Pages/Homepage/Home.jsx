import React from 'react';
import HeroSection from './Herosection';
import BloodDonationcards from './Blooddonationcards';
import BloodDonorSection from './BloodDonorSection';
import StatsSection from './StatsSection';
import Services from './Homeservice';
import DonationBanner from './DonationBanner';
import Testimonials from './testimonials';
import TeamSection from './TeamSection';
import NewsSection from './NewsSection';
import Banner from './Banner';

const Home = () => {
  return (
    <>
      <HeroSection />
      <BloodDonationcards />
      <BloodDonorSection />
      <StatsSection />
      <Services />
      <DonationBanner />
      <Testimonials />
      <Banner />
      <TeamSection />
      <NewsSection />
    </>
  );
};

export default Home;
