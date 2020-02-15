import React from 'react';

import './DrinkItem.css';

const DrinkItem = ({ drink }) => {
  return (
    <div className='drink-item-wrapper'>
      {/* <img src={drink.strDrinkThumb} alt={drink.strDrink} /> */}
      <h3 className='drink-item-name'>{drink.strDrink}</h3>
      <p className='drink-item-details'>
        {drink.strIngredient1}, {drink.strIngredient2}, {drink.strIngredient3}
      </p>
      <p className='drink-item-price'>10</p>
    </div>
  );
};
export default DrinkItem;
