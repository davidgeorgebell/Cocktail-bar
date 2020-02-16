import React from 'react';

import './FoodItem.css';

const FoodItem = ({ meal }) => {
  return (
    <div className='food-item-wrapper'>
      <img
        className='food-item-image'
        src={meal.strMealThumb}
        alt={meal.strMeal}
      />
      <h3 className='food-item-title'>{meal.strMeal}</h3>
      {/* <p className='food-item-desc'>{meal.strArea}</p> */}
    </div>
  );
};
export default FoodItem;
