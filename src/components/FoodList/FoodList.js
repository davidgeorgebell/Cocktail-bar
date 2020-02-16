import React, { useContext } from 'react';

import { DataContext } from '../../contexts/DataContext';
import './FoodList.css';

import FoodItem from '../FoodItem/FoodItem';

const FoodList = () => {
  const { meals } = useContext(DataContext);
  return (
    <div className='food-list-wrapper'>
      {meals.length > 0 &&
        meals.map((meal) => {
          return <FoodItem meal={meal} key={meal.idMeal} />;
        })}
    </div>
  );
};
export default FoodList;
