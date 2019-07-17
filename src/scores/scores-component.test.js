import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';

import Scores from './scores-component';

describe('Scores component', async assert => {
  const createScores = (props = {}) => render(<Scores {...props} />);

  {
    const props = {};
    const $ = createScores(props);

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
    const $ = createScores(props);

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
    const $ = createScores(props);

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
    const $ = createScores(props);

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
    const $ = createScores(props);

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
    const $ = createScores(props);

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
});
