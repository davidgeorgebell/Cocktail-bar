import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

const Menu = () => {
  return (
    <div className='menu-wrapper'>
      <ul className='menu-list'>
        <Link to='/'>
          <li className='menu-list-item menu-list-logo'>Gatsby's</li>
        </Link>
        <Link to='/drink'>
          <li className='menu-list-item'>Drink</li>
        </Link>
        <Link to='/food'>
          {' '}
          <li className='menu-list-item'>Food</li>
        </Link>
        <Link to='contact'>
          {' '}
          <li className='menu-list-item'>Contact</li>
        </Link>
      </ul>
    </div>
  );
};
export default Menu;
