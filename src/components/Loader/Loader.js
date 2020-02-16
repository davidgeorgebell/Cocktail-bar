import React from 'react';
import { FaGlassMartiniAlt } from 'react-icons/fa';

import './Loader.css';

const Loader = () => {
  return (
    <div className='loader-wrapper'>
      <div className='loader-icon'>
        <FaGlassMartiniAlt />
      </div>
      <h1 className='loader-title'>Loading...</h1>
    </div>
  );
};
export default Loader;
