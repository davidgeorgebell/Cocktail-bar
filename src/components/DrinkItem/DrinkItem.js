import React from 'react';

import './DrinkItem.css';

const DrinkItem = ({ drink }) => {
  return (
    <div>
      <h3>{drink.strDrink}</h3>
      <p>{drink.strIngredient1}</p>
      <p>{drink.strIngredient2}</p>
      <p>{drink.strIngredient3}</p>
    </div>
  );
};
export default DrinkItem;
