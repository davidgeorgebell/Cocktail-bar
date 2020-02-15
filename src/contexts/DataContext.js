import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [drinks, setDrinks] = useState([]);
  const [meals, setMeals] = useState([]);
  const [errorMessage, setErrorMessage] = useState(''); // holds an error message in case the network request doesn't succeed
  const [mealNames] = useState([
    'Chickpea Fajitas',
    'Katsu Chicken curry',
    'Poutine',
    'Lamb Biryani'
  ]);
  const [drinkNames] = useState([
    '11007',
    '11005',
    '12089',
    '11003',
    '11006',
    '14167',
    '11009',
    '178308'
  ]); // the search queries for the `i` parameter at your API endpoint

  // Fetch Cocktail Data
  useEffect(() => {
    const fetchDrinkLists = async (...drinkNames) => {
      const fetchCocktailList = async (drinkName) => {
        const baseUrl =
          'https://www.thecocktaildb.com/api/json/v1/1/lookup.php';
        const url = new URL(baseUrl);
        const params = new URLSearchParams({ i: drinkName });
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

  // Fetch Food Data
  useEffect(() => {
    const fetchMealLists = async (...mealNames) => {
      const fetchMealList = async (mealName) => {
        const baseUrl = 'https://www.themealdb.com/api/json/v1/1/search.php';
        const url = new URL(baseUrl);
        const params = new URLSearchParams({ s: mealName });
        url.search = params.toString(); // -> '?s=foodName'
        const res = await fetch(url.href); // -> 'https://www.themealdb.com/api/json/v1/1/search.php?s=foodName'
        const data = await res.json();
        const { meals: mealList } = data; // destructed form of: const foodList = data.meals;
        return mealList;
      };

      setLoading(true);
      try {
        const promises = [];
        for (const mealName of mealNames) {
          promises.push(fetchMealList(mealName));
        }
        const drinkLists = await Promise.all(promises); // -> [[meal1, meal2], [meal3, meal4]]
        const allDrinks = drinkLists.flat(1); // -> [meal1, meal2, meal3, meal4]
        setMeals(allDrinks);
      } catch (err) {
        setErrorMessage(err.message /* or whatever custom message you want */);
      }
      setLoading(false);
    };

    fetchMealLists(...mealNames);
  }, [mealNames, setMeals, setErrorMessage, setLoading]);

  return (
    <DataContext.Provider value={{ drinks, isLoading, errorMessage, meals }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
