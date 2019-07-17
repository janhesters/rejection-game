import { describe } from 'riteway';

import { createQuestion } from '../factories';
import { addQuestion, getQuestions, reducer } from './question-reducer';

const question = createQuestion();
const otherQuestion = createQuestion({
  timestamp: new Date('2000-01-01'),
  question: 'foo',
  status: 'Accepted',
});

describe('question reducer', async assert => {
  assert({
    given: 'no arguments',
    should: 'return the valid initial state',
    actual: reducer(),
    expected: [],
  });

  assert({
    given: 'initial state and an add question action',
    should: 'add the question to the state',
    actual: reducer(undefined, addQuestion(question)),
    expected: [question],
  });

  assert({
    given: 'state and an add question action',
    should: 'add the question to the state',
    actual: reducer([question], addQuestion(otherQuestion)),
    expected: [question, otherQuestion],
  });

  // NOTE: Ask Eric, if this is how to test selectors.
  assert({
    given: 'state and a get questions selector',
    should: 'return the questions',
    actual: getQuestions({ questions: [question, otherQuestion] }),
    expected: [question, otherQuestion],
  });
});
