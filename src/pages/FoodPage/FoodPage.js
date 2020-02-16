import React, { useContext } from 'react';

import './FoodPage.css';
import FoodList from '../../components/FoodList/FoodList';
import { DataContext } from '../../contexts/DataContext';
import Loader from '../../components/Loader/Loader';

const FoodPage = () => {
  const { isLoading, errorMessage } = useContext(DataContext);
  return (
    <div className='drink-page-wrapper'>
      {isLoading ? <Loader /> : errorMessage ? <h1>Error...</h1> : <FoodList />}
    </div>
  );
};
export default FoodPage;
