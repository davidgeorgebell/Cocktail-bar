import React from 'react';
import { Link } from 'react-router-dom';

import './Features.css';

const Features = () => {
  return (
    <div className='features-wrapper'>
      <div className='feature-item'>
        <h3 className='feature-title'>Cocktails</h3>
        <p>
          {' '}
          Our Cocktails us the finest spirits. We have opened a Cocktail Bar for
          those who don't like Cocktail Bars.
        </p>
        <Link to='/drink'>View Our Drinks Menu</Link>
      </div>
      <div className='feature-item'>
        <h3 className='feature-title'>Food</h3>
        <p>
          {' '}
          Proudly serving dishes from cuisines all over the world. There's
          something for everyone.
        </p>
        <Link to='/food'>View Our Food Menu</Link>
      </div>
    </div>
  );
};
export default Features;
