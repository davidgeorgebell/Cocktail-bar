import React from 'react';

import './Hero.css';

const Hero = () => {
  return (
    <div className='hero-wrapper'>
      <header className='hero-title'>
        <h1>Gatsby's Cocktail Bar</h1>
        <p>Drink with Zest</p>
      </header>
      <div className='notice notice1'>
        <p className='price'>Women Drink Free</p>
        <p className='hero-notice-title'>Ladies Night (every Wednesday)</p>
      </div>
      <div className='notice notice2'>
        <p className='price'>2 for 1</p>
        <p className='hero-notice-title'>Happy Hour</p>
      </div>
    </div>
  );
};
export default Hero;
