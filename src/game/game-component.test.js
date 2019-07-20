import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { Provider } from 'react-redux';
import { describe } from 'riteway';
import render from 'riteway/render-component';

import store from '../store';
import theme from '../theme';
import Game from './game-component';

describe('Game component', async assert => {
  const createGame = (props = {}) =>
    render(
      // NOTE: Ask Eric if this is okay?
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Game {...props} />
        </ThemeProvider>
      </Provider>
    );

  {
    const props = {};
    const $ = createGame(props);

    assert({
      given: 'just rendering',
      should: 'render a container',
      actual: $('.game-container').length,
      expected: 1,
    });
  }

  {
    const props = { loading: true };
    const $ = createGame(props);

    assert({
      given: 'loading',
      should: 'render the loading component',
      actual: $('.loading').length,
      expected: 1,
    });
  }

  {
    const props = {};
    const $ = createGame(props);

    assert({
      given: 'no user',
      should: 'render the auth component',
      actual: $('.auth').length,
      expected: 1,
    });
  }

  {
    const props = { user: { foo: 'bar' } };
    const $ = createGame(props);

    assert({
      given: 'a user',
      should: 'render the scores',
      actual: $('.scores').length,
      expected: 1,
    });
  }

  {
    const props = { user: { foo: 'bar' } };
    const $ = createGame(props);

    assert({
      given: 'a user',
      should: 'render the question form',
      actual: $('.question-form').length,
      expected: 1,
    });
  }

  {
    const props = { user: { foo: 'bar' } };
    const $ = createGame(props);

    assert({
      given: 'a user',
      should: 'render the history',
      actual: $('.history').length,
      expected: 1,
    });
  }

  {
    store.dispatch({ type: 'snackbar/OPEN', payload: 'foo' });
    const props = { user: { foo: 'bar' } };
    const $ = createGame(props);
    assert({
      given: 'a user',
      should: 'render the snackbar',
      actual: $('.snackbar').length,
      expected: 1,
    });
    store.dispatch({ type: 'snackbar/CLOSE' });
  }
});
