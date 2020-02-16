import React from 'react';

import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className='about-page-wrapper'>
      <h1>About</h1>
      <p className='about-info'>This is a site built by David Bell.</p>
      <ul className='about-list'>
        <li>
          <a href='https://github.com/davidgeorgebell' alt='github account'>
            Github
          </a>
        </li>
        <li>
          <a href='mailto:davidbell.dev@gmail.com' alt='email address'>
            Email
          </a>
        </li>
      </ul>
    </div>
  );
};
export default AboutPage;
