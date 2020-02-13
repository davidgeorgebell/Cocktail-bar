import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

const Menu = () => {
  return (
    <div className='menu-wrapper'>
      <button
        aria-expanded='false'
        aria-controls='menu-list'
        className='menu-button'>
        Menu
      </button>
      <ul className='menu-list'>
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
