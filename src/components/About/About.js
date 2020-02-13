import React from 'react';

import './About.css';
import cocktail from '../../images/cocktail-2.jpg';

const About = () => {
  return (
    <div className='about-wrapper'>
      <img src={cocktail} alt='cocktail' />
      <div className='about-description'>
        <h3 className='about-title'>We Host A Cocktail Club</h3>
        <p className='about-description'>
          Your find out about our Cocktail Club{' '}
        </p>
        <button>Learn More</button>
      </div>
    </div>
  );
};
export default About;
