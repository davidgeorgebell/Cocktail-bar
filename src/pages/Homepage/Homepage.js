import React, { useEffect, useState } from 'react';

import './Homepage.css';
import { fetchCocktailList } from '../../utils/api';

const Homepage = () => {
  const [isLoading, setLoading] = useState(false);
  const [randomData, setRandomData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchCocktailList().then((data) => setRandomData(data));
    setLoading(false);
  }, []);
  return <div></div>;
};
export default Homepage;
