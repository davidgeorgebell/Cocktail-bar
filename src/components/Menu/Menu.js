import React from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.css';

const Menu = () => {
  return (
    <div className='menu-wrapper'>
      <nav className='menu-nav'>
        <ul className='menu-list'>
          <li className='menu-list-logo menu-list-item'>
            {' '}
            <NavLink to='/' exact activeClassName='selected'>
              Gatsby's
            </NavLink>
          </li>

          <li className=' menu-list-item'>
            <NavLink to='/drink' className='active' activeClassName='selected'>
              Drink
            </NavLink>
          </li>
          <NavLink to='/food' className='active' activeClassName='selected'>
            {' '}
            <li className='menu-list-item '>Food</li>
          </NavLink>
          <NavLink to='contact' className='active' activeClassName='selected'>
            {' '}
            <li className='menu-list-item '>Contact</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};
export default Menu;
