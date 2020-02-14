import React, { useContext } from 'react';

import { DataContext } from '../../contexts/DataContext';
import './DrinkList.css';
import DrinkItem from '../DrinkItem/DrinkItem';

const DrinkList = () => {
  const { cocktails } = useContext(DataContext);
  return (
    <div className='drink-list-wrapper'>
      <ul>
        {cocktails.length > 0 &&
          cocktails.map((drink) => {
            return <DrinkItem drink={drink} key={drink.idDrink} />;
          })}
      </ul>
    </div>
  );
};
export default DrinkList;
