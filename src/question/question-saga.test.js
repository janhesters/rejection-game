import API, { graphqlOperation } from '@aws-amplify/api';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import * as R from 'ramda';
import { call, put } from 'redux-saga/effects';
import { describe } from 'riteway';

import { createQuestion as createQuestionFactory } from '../factories';
import { createQuestion as gqlCreateQuestion } from '../graphql/mutations';
import { listQuestions } from '../graphql/queries';
import { openSnackbar } from '../snackbar/snackbar-reducer';
import { addQuestion, addQuestions } from './question-reducer';
import { createQuestion, fetchQuestions } from './question-saga';

const question = createQuestionFactory();
const otherQuestion = createQuestionFactory({
  askee: 'Jim',
  status: 'Accepted',
  question: 'Can I borrow your pen?',
});
const questions = [question, otherQuestion];

describe('fetch questions saga', async assert => {
  const gen = cloneableGenerator(fetchQuestions)();

  assert({
    given: 'saga started',
    should:
      'yield a list questions GraphQL operation effect with a limit of 100',
    actual: gen.next().value,
    expected: call(
      [API, 'graphql'],
      graphqlOperation(listQuestions, { limit: 100 })
    ),
  });

  {
    const clone = gen.clone();
    const graphqlResponse = {
      data: {
        listQuestions: {
          items: questions.map(({ timestamp, ...q }) => ({
            ...q,
            createdAt: timestamp,
          })),
        },
      },
    };

    assert({
      given: 'a GraphQL response with the list of questions',
      should: 'dispatch the add questions action with the list',
      actual: clone.next(graphqlResponse).value,
      // NOTE: Is this a good way to use test the action creator together
      // with the saga?
      expected: put({ type: addQuestions().type, payload: questions }),
    });

    assert({
      // NOTE: What should be given here?
      given: 'nothing',
      should: 'be done',
      actual: clone.next().done,
      expected: true,
    });
  }

  {
    const clone = gen.clone();
    const error = { message: 'Error' };

    assert({
      given: 'an error while fetching the questions',
      should: 'dispatch an open snackbar action with the error',
      actual: clone.throw(error).value,
      expected: put({ type: openSnackbar().type, payload: error.message }),
    });

    assert({
      given: 'nothing',
      should: 'be done',
      actual: clone.next().done,
      expected: true,
    });
  }
});

describe('create question saga', async assert => {
  const newQuestion = {
    id: 'test-abc',
    askee: 'Someone',
    question: 'Some question?',
    status: 'Rejected',
    createdAt: '2019-07-22T08:42:21.595Z',
  };

  const genInput = R.pick(['askee', 'question', 'status'], newQuestion);

  const gen = cloneableGenerator(createQuestion)({ payload: genInput });

  assert({
    given: 'the next action',
    should: 'yield a create question GraphQL operation effect',
    actual: gen.next().value,
    expected: call(
      [API, 'graphql'],
      graphqlOperation(gqlCreateQuestion, { input: genInput })
    ),
  });

  {
    const clone = gen.clone();
    const graphqlResponse = {
      data: { createQuestion: newQuestion },
    };
    const payload = {
      timestamp: new Date(newQuestion.createdAt),
      ...R.omit(['createdAt'], newQuestion),
    };

    assert({
      given: 'a GraphQL response with a new question',
      should: 'dispatch an add question action with the question',
      actual: clone.next(graphqlResponse).value,
      expected: put({ type: addQuestion().type, payload }),
    });

    assert({
      given: 'nothing',
      should: 'be done',
      actual: clone.next().done,
      expected: true,
    });
  }

  {
    const clone = gen.clone();
    const message = 'Error';
    const error = { errors: [{ message }] };

    assert({
      given: 'an error while creating the question',
      should: 'an open snackbar action with the error',
      actual: clone.throw(error).value,
      expected: put({ type: openSnackbar().type, payload: message }),
    });

    assert({
      given: 'nothing',
      should: 'be done',
      actual: clone.next().done,
      expected: true,
    });
  }
});
