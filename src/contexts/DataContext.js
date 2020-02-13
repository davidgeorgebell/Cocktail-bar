import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [isLoading, setLoading] = useState(false);
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
    setLoading(true);
    fetchCocktailList().then((data) => setCocktails(data));
    setLoading(false);
  }, []);

  return (
    <DataContext.Provider value={{ cocktails, isLoading }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
