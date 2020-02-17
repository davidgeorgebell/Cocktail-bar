import React from 'react';

import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className='about-page-wrapper'>
      <ul className='about-list'>
        <h3 className='about-info'>This is a site built by David Bell.</h3>
        <h4>Links:</h4>
        <li>
          <a href='https://github.com/davidgeorgebell' alt='github account'>
            Github - davidgeorgebell
          </a>
        </li>
        <li>
          <a href='mailto:davidbell.dev@gmail.com' alt='email address'>
            Email - davidbell.dev@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
};
export default AboutPage;
