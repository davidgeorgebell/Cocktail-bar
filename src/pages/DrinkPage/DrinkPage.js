import React, { useContext } from 'react';

import './DrinkPage.css';
import DrinkList from '../../components/DrinkList/DrinkList';
import { DataContext } from '../../contexts/DataContext';

const DrinkPage = () => {
  const { isLoading, errorMessage } = useContext(DataContext);
  return (
    <div className='drink-page-wrapper'>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : errorMessage ? (
        <h1>Error...</h1>
      ) : (
        <DrinkList />
      )}
    </div>
  );
};
export default DrinkPage;
