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
          loren ipsum dipsum doo day logic loren ipsum dipsum doo day logic
          loren ipsum dipsum doo day logic
        </p>
        <Link to='/drink'>View Our Drinks Menu</Link>
      </div>
      <div className='feature-item'>
        <h3 className='feature-title'>Food</h3>
        <p>
          {' '}
          loren ipsum dipsum doo day logic loren ipsum dipsum doo day logic
          loren ipsum dipsum doo day logic
        </p>
        <Link to='/food'>View Our Food Menu</Link>
      </div>
      {/* <div className='feature-item'>
        <h3 className='feature-title'>Music</h3>
        <p>
          loren ipsum dipsum doo day logic loren ipsum dipsum doo day logic
          loren ipsum dipsum doo day logic
        </p>
      </div>
      <div className='feature-item'>
        <h3 className='feature-title'>Wine</h3>
        <p>
          {' '}
          loren ipsum dipsum doo day logic loren ipsum dipsum doo day logic
          loren ipsum dipsum doo day logic
        </p>
      </div> */}
    </div>
  );
};
export default Features;
