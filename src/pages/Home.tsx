import React from 'react';
import HeroSection from '../components/HeroSection';
import USPSection from '../components/USPSection';
import FeaturedPrograms from '../components/FeaturedPrograms';
import StatsSection from '../components/StatsSection';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <USPSection />
      <FeaturedPrograms />
      <StatsSection />
      <CTASection />
    </div>
  );
};

export default Home;