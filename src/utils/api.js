export const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

export const fetchCocktailList = async () => {
  try {
    const res = await fetch(`${baseUrl}filter.php?c=Cocktail`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log('Error fetching data');
  }
};
