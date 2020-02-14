import React from 'react';

import './Hero.css';

const Hero = () => {
  return (
    <div className='hero-wrapper'>
      <header className='hero-title'>
        <p>London's Cocktail Lounge.</p>
      </header>
      <div className='notice notice1'>
        <p className='price'>Ladies Night</p>
        <p className='hero-notice-title'>Every Wednesday</p>
      </div>
      <div className='notice notice2'>
        <p className='price'>Happy Hour</p>
        <p className='hero-notice-title'>Daily 6pm - 7pm</p>
      </div>
    </div>
  );
};
export default Hero;
