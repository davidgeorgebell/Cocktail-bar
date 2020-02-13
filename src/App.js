import React from 'react';

import Homepage from './pages/Homepage/Homepage';
import DataContextProvider from './contexts/DataContext';

function App() {
  return (
    <DataContextProvider>
      <div>
        <main>
          <Homepage />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
