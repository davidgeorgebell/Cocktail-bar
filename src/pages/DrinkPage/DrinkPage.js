import React, { useContext } from 'react';

import './DrinkPage.css';
import DrinkList from '../../components/DrinkList/DrinkList';
import { DataContext } from '../../contexts/DataContext';
import Loader from '../../components/Loader/Loader';

const DrinkPage = () => {
  const { isLoading, errorMessage } = useContext(DataContext);
  return (
    <div className='drink-page-wrapper'>
      {isLoading ? (
        <Loader />
      ) : errorMessage ? (
        <h1>Error...</h1>
      ) : (
        <DrinkList />
      )}
    </div>
  );
};
export default DrinkPage;
