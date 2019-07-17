import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';

import { createQuestion } from '../factories';
import History from './history-component';

describe('History component', async assert => {
  const createHistory = (props = {}) => render(<History {...props} />);

  {
    const props = {};
    const $ = createHistory(props);

    assert({
      given: 'just rendering',
      should: 'render a heading',
      actual: $('.history-heading').length,
      expected: 1,
    });
  }

  {
    const props = {};
    const $ = createHistory(props);

    assert({
      given: 'no questions',
      should: 'render a no questions message',
      actual: $('.no-questions').length,
      expected: 1,
    });
  }

  {
    const props = {
      questions: [
        createQuestion(),
        createQuestion({ question: 'baz', status: 'Accepted' }),
      ],
    };
    const $ = createHistory(props);

    assert({
      given: 'some questions',
      should: 'render the questions',
      actual: $('.question').length,
      expected: props.questions.length,
    });
  }
});
