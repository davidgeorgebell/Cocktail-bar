import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import DataContextProvider from './contexts/DataContext';
import HomePage from './pages/HomePage/HomePage';
import DrinkPage from './pages/DrinkPage/DrinkPage';
import FoodPage from './pages/FoodPage/FoodPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <DataContextProvider>
      <Router>
        <div className='app-wrapper'>
          <main>
            <Menu />
            <Switch>
              <Route path='/' exact>
                <HomePage />
              </Route>
              <Route path='/drink' exact>
                <DrinkPage />
              </Route>
              <Route path='/food' exact>
                <FoodPage />
              </Route>
              <Route path='/contact' exact>
                <ContactPage />
              </Route>
              <Redirect to='/' />
            </Switch>
          </main>
        </div>
      </Router>
    </DataContextProvider>
  );
}

export default App;
