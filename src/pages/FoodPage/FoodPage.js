import React, { useContext } from 'react';

import './FoodPage.css';
import FoodList from '../../components/FoodList/FoodList';
import { DataContext } from '../../contexts/DataContext';

const FoodPage = () => {
  const { isLoading, errorMessage } = useContext(DataContext);
  return (
    <div className='drink-page-wrapper'>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : errorMessage ? (
        <h1>Error...</h1>
      ) : (
        <FoodList />
      )}
    </div>
  );
};
export default FoodPage;
