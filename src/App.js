import React from 'react';
import { Provider } from 'react-redux';

import Game from './game';
import History from './history';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Game />
      <History />
    </Provider>
  );
}

export default App;
