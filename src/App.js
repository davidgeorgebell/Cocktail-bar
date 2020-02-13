import React from 'react';

import Homepage from './pages/Homepage/Homepage';
import DataContextProvider from './contexts/DataContext';

function App() {
  return (
    <DataContextProvider>
      <div>
        <Homepage />
      </div>
    </DataContextProvider>
  );
}

export default App;
