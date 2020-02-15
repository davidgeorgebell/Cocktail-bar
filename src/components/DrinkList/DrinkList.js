import React, { useContext } from 'react';

// import cocktail3 from '../../images/cocktail-3.jpg';
// import cocktail4 from '../../images/cocktail-4.jpg';
import { DataContext } from '../../contexts/DataContext';
import './DrinkList.css';
import DrinkItem from '../DrinkItem/DrinkItem';

const DrinkList = () => {
  const { drinks } = useContext(DataContext);
  return (
    <div className='drink-list-wrapper'>
      {/* <img className='drink-page-img' src={cocktail3} alt='cocktail' /> */}
      {drinks.length > 0 &&
        drinks.map((drink) => {
          return <DrinkItem drink={drink} key={drink.idDrink} />;
        })}
      {/* <img className='drink-page-img' src={cocktail4} alt='cocktail' /> */}
    </div>
  );
};
export default DrinkList;
