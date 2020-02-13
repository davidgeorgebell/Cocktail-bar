import React from 'react';

import './HomePage.css';
import Hero from '../../components/Hero/Hero';
import Menu from '../../components/Menu/Menu';

const HomePage = () => {
  return (
    <div className='homepage-wrapper'>
      <Hero />
      <Menu />
    </div>
  );
};
export default HomePage;
