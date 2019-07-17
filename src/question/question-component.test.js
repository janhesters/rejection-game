import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';

import { createQuestion as createQuestionFixture } from '../factories';
import theme from '../theme';
import Question from './question-component';

describe('Question component', async assert => {
  const createQuestion = (props = {}) =>
    render(
      // NOTE: Is it okay to always import the providers where needed?
      <ThemeProvider theme={theme}>
        <Question {...props} />
      </ThemeProvider>
    );

  {
    const props = createQuestionFixture();
    const $ = createQuestion(props);

    assert({
      given: 'a question',
      should: 'render its question',
      actual: $('.question-content')
        .html()
        .trim(),
      expected: props.question,
    });
  }

  {
    const props = createQuestionFixture();
    const $ = createQuestion(props);

    assert({
      given: 'a question',
      should: 'render its timestamp',
      actual: $('.question-timestamp')
        .html()
        .trim(),
      expected: props.timestamp.toLocaleDateString(),
    });
  }

  {
    const props = createQuestionFixture();
    const $ = createQuestion(props);

    assert({
      given: 'a question',
      should: 'render the status',
      actual: $('.question-status').length,
      expected: 1,
    });
  }

  // NOTE: How would you test this?
  // {
  //   const props = createQuestionFixture({ status: 'Rejected' });
  //   const $ = createQuestion(props);

  //   assert({
  //     given: 'a rejected question',
  //     should: 'render the correct icon',
  //     actual: $('.question-status').children(),
  //     expected: render(<BlockIcon />)(),
  //   });
  // }

  // {
  //   const props = createQuestionFixture({ status: 'Accepted' });
  //   const $ = createQuestion(props);

  //   assert({
  //     given: 'an accepted question',
  //     should: 'render the correct status',
  //     actual: $('.question-status')
  //       .html()
  //       .trim(),
  //     expected: props.status,
  //   });
  // }

  {
    const props = createQuestionFixture();
    const $ = createQuestion(props);

    assert({
      given: 'a question',
      should: 'render the askee',
      actual: $('.question-askee')
        .html()
        .trim(),
      expected: props.askee,
    });
  }
});
