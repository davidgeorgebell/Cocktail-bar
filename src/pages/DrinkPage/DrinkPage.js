import React from 'react';

import './DrinkPage.css';
import DrinkList from '../../components/DrinkList/DrinkList';

const DrinkPage = () => {
  return (
    <div className='drink-page-wrapper'>
      <DrinkList />
    </div>
  );
};
export default DrinkPage;
