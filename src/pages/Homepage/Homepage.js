import React from 'react';

import './HomePage.css';
import Hero from '../../components/Hero/Hero';
import Menu from '../../components/Menu/Menu';
import Features from '../../components/Features/Features';
import About from '../../components/About/About';
import OpeningTimes from '../../components/OpeningTimes/OpeningTimes';

const HomePage = () => {
  return (
    <div className='homepage-wrapper'>
      <Menu />
      <Hero />
      <Features />
      <About />
      <OpeningTimes />
    </div>
  );
};
export default HomePage;
