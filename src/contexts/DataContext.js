import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchCocktailList = async () => {
      const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

      setLoading(true);

      try {
        const res = await fetch(`${baseUrl}filter.php?c=Cocktail`);
        const data = await res.json();
        console.log(data);

        setCocktails(data);
        setLoading(false);
      } catch (err) {
        console.log('Error fetching data');

        setLoading(false);
      }
    };

    fetchCocktailList();
  }, []);

  return (
    <DataContext.Provider value={{ cocktails, isLoading }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
