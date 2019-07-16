import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';

import Game from './game-component';

describe('Game component', async assert => {
  const createGame = (props = {}) => render(<Game {...props} />);

  {
    const props = {};
    const $ = createGame(props);

    assert({
      given: 'just rendering',
      should: 'render a day score of 0',
      actual: parseInt(
        $('.day-score')
          .html()
          .trim(),
        10
      ),
      expected: 0,
    });
  }

  {
    const props = { dayScore: 1 };
    const $ = createGame(props);

    assert({
      given: 'a day score',
      should: 'render the correct day score',
      actual: parseInt(
        $('.day-score')
          .html()
          .trim(),
        10
      ),
      expected: props.dayScore,
    });
  }

  {
    const props = { dayScore: 42 };
    const $ = createGame(props);

    assert({
      given: 'a day score',
      should: 'render the correct day score',
      actual: parseInt(
        $('.day-score')
          .html()
          .trim(),
        10
      ),
      expected: props.dayScore,
    });
  }

  {
    const props = {};
    const $ = createGame(props);

    assert({
      given: 'just rendering',
      should: 'render a total score of 0',
      actual: parseInt(
        $('.total-score')
          .html()
          .trim(),
        10
      ),
      expected: 0,
    });
  }

  {
    const props = { totalScore: 1 };
    const $ = createGame(props);

    assert({
      given: 'a total score',
      should: 'render the correct total score',
      actual: parseInt(
        $('.total-score')
          .html()
          .trim(),
        10
      ),
      expected: props.totalScore,
    });
  }

  {
    const props = { totalScore: 42 };
    const $ = createGame(props);

    assert({
      given: 'a total score',
      should: 'render the correct total score',
      actual: parseInt(
        $('.total-score')
          .html()
          .trim(),
        10
      ),
      expected: props.totalScore,
    });
  }

  {
    const props = {};
    const $ = createGame(props);

    assert({
      given: 'just rendering',
      should: 'render an input for asks',
      actual: $('.ask-input')[0].name,
      expected: 'input',
    });
  }

  {
    const props = {};
    const $ = createGame(props);

    assert({
      given: 'just rendering',
      should: 'render an accepted button',
      actual: $('.accepted-button')[0].name,
      expected: 'button',
    });
  }

  {
    const props = {};
    const $ = createGame(props);

    assert({
      given: 'just rendering',
      should: 'render an rejected button',
      actual: $('.rejected-button')[0].name,
      expected: 'button',
    });
  }
});
