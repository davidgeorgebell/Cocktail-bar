import React, { useContext } from 'react';

import { DataContext } from '../../contexts/DataContext';
import './DrinkList.css';
import DrinkItem from '../DrinkItem/DrinkItem';

const DrinkList = () => {
  const { drinks } = useContext(DataContext);
  return (
    <div className='drink-list-wrapper'>
      {drinks.length > 0 &&
        drinks.map((drink) => {
          return <DrinkItem drink={drink} key={drink.idDrink} />;
        })}
    </div>
  );
};
export default DrinkList;
