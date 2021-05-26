import React, { PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { GlobalProvider } from './context/GlobalState';

import routes from './routes';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
