import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { Provider } from 'react-redux';

import Game from './game';
import Header from './header';
import History from './history';
import Scores from './scores';
import store from './store';
import theme from './theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Header />
          <Scores />
          <Game />
          <History />
        </CssBaseline>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
