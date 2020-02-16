import React from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.css';

const Menu = () => {
  return (
    <div className='menu-wrapper'>
      <nav className='menu-nav'>
        <ul className='menu-list'>
          <li className='menu-list-logo menu-list-item'>
            <NavLink to='/' exact activeClassName='selected'>
              Gatsby's
            </NavLink>
          </li>
          <li className=' menu-list-item'>
            <NavLink
              to='/drink'
              className='not-active'
              activeClassName='selected'>
              Drink
            </NavLink>
          </li>
          <NavLink to='/food' className='not-active' activeClassName='selected'>
            <li className='menu-list-item '>Food</li>
          </NavLink>
          <li className='menu-list-item '>
            <NavLink
              to='about'
              className='not-active'
              activeClassName='selected'>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Menu;
