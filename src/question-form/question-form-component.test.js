import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';

import theme from '../theme';
import QuestionForm from './question-form-component';

describe('QuestionForm component', async assert => {
  const createQuestionForm = (props = {}) =>
    render(
      <ThemeProvider theme={theme}>
        <QuestionForm
          onChangeAskee={() => {}}
          onChangeNewQuestion={() => {}}
          onClick={() => {}}
          {...props}
        />
      </ThemeProvider>
    );

  // NOTE: Ask Eric whether the following two tests are redundant.
  {
    const props = {};
    const $ = createQuestionForm(props);

    assert({
      given: 'just rendering',
      should: 'render an input for the question',
      actual: $('.question-input')[0].name,
      expected: 'input',
    });
  }

  {
    const props = { newQuestion: 'foo' };
    const $ = createQuestionForm(props);

    assert({
      given: 'a new question',
      should: 'render the new question in the input',
      actual: $('.question-input').val(),
      expected: props.newQuestion,
    });
  }

  {
    const props = {};
    const $ = createQuestionForm(props);

    assert({
      given: 'just rendering',
      should: 'render an input for an askee',
      actual: $('.question-askee-input')[0].name,
      expected: 'input',
    });
  }

  {
    const props = { askee: 'foo' };
    const $ = createQuestionForm(props);

    assert({
      given: 'a new question',
      should: 'render the new askee in the input',
      actual: $('.question-askee-input').val(),
      expected: props.askee,
    });
  }

  {
    const props = {};
    const $ = createQuestionForm(props);

    assert({
      given: 'just rendering',
      should: 'render an accepted button',
      actual: $('.accepted-button')[0].name,
      expected: 'button',
    });
  }

  {
    const props = {};
    const $ = createQuestionForm(props);

    assert({
      given: 'just rendering',
      should: 'render a rejected button',
      actual: $('.rejected-button')[0].name,
      expected: 'button',
    });
  }
});
