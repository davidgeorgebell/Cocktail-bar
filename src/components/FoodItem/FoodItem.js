import React from 'react';

import './FoodItem.css';

const FoodItem = ({ meal }) => {
  return (
    <div className='food-item-wrapper'>
      <div className='picture'>
        <img
          className='food-item-image'
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />
      </div>
      <div className='description'>
        <h3 className='food-item-title'>{meal.strMeal}</h3>
        <h1 className='price'>£10.00</h1>
        <p className='food-item-desc'>{meal.strArea}</p>
      </div>
    </div>
  );
};
export default FoodItem;
