import React from 'react';
import { Provider } from 'react-redux';
import { describe } from 'riteway';
import render from 'riteway/render-component';

import store from '../store';
import Game from './game-component';

describe('Game component', async assert => {
  const createGame = (props = {}) =>
    render(
      // NOTE: Ask Eric if this is okay?
      <Provider store={store}>
        <Game {...props} />
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
    const props = {};
    const $ = createGame(props);

    assert({
      given: 'just rendering',
      should: 'render the scores',
      actual: $('.scores').length,
      expected: 1,
    });
  }

  {
    const props = {};
    const $ = createGame(props);

    assert({
      given: 'just rendering',
      should: 'render the question form',
      actual: $('.question-form').length,
      expected: 1,
    });
  }

  {
    const props = {};
    const $ = createGame(props);

    assert({
      given: 'just rendering',
      should: 'render the history',
      actual: $('.history').length,
      expected: 1,
    });
  }
});
