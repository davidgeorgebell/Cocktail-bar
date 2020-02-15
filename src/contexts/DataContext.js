import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [drinks, setDrinks] = useState([]);
  const [errorMessage, setErrorMessage] = useState(''); // holds an error message in case the network request doesn't succeed
  const [drinkNames] = useState([
    'margarita',
    'martini',
    'negroni',
    'old-fashioned',
    'daiquiri'
  ]); // the search queries for the `s` parameter at your API endpoint

  useEffect(() => {
    const fetchDrinkLists = async (...drinkNames) => {
      const fetchCocktailList = async (drinkName) => {
        const baseUrl =
          'https://www.thecocktaildb.com/api/json/v1/1/search.php';
        const url = new URL(baseUrl);
        const params = new URLSearchParams({ s: drinkName });
        url.search = params.toString(); // -> '?s=cocktailName'
        const res = await fetch(url.href); // -> 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cocktailName'
        const data = await res.json();
        const { drinks: drinkList } = data; // destructed form of: const drinkList = data.drinks;
        return drinkList;
      };

      setLoading(true);
      try {
        const promises = [];
        for (const drinkName of drinkNames) {
          promises.push(fetchCocktailList(drinkName));
        }
        const drinkLists = await Promise.all(promises); // -> [[drink1, drink2], [drink3, drink4]]
        const allDrinks = drinkLists.flat(1); // -> [drink1, drink2, drink3, drink4]
        setDrinks(allDrinks);
      } catch (err) {
        setErrorMessage(err.message /* or whatever custom message you want */);
      }
      setLoading(false);
    };

    fetchDrinkLists(...drinkNames);
  }, [drinkNames, setErrorMessage, setLoading]);

  return (
    <DataContext.Provider value={{ drinks, isLoading, errorMessage }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
