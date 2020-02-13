import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [cocktails, setCocktails] = useState([]);

  const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

  const fetchCocktailList = async () => {
    try {
      const res = await fetch(`${baseUrl}filter.php?c=Cocktail`);
      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log('Error fetching data');
    }
  };

  useEffect(() => {
    fetchCocktailList().then((data) => setCocktails(data));
  }, []);
  return (
    <DataContext.Provider value={{ cocktails }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
