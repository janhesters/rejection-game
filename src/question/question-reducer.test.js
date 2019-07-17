import { describe } from 'riteway';

import { createQuestion } from '../factories';
import {
  addQuestion,
  calculateScore,
  getQuestions,
  getQuestionsPoints,
  reducer,
  youngerThanYesterday,
} from './question-reducer';

const question = createQuestion();
const otherQuestion = createQuestion({
  timestamp: new Date('2000-01-01'),
  question: 'foo',
  status: 'Accepted',
});

// NOTE: Ask Eric, if he would split up these methods (getQuestionsPoints,
// calculateScore, youngerThanYesterday) into different files?
// If yes, what would the file and folder structure look like?
describe('getQuestionsPoints()', async assert => {
  assert({
    given: 'an unanswered question',
    should: 'return 0',
    actual: getQuestionsPoints(question),
    expected: 0,
  });

  assert({
    given: 'an accepted question',
    should: 'return 1',
    actual: getQuestionsPoints(otherQuestion),
    expected: 1,
  });

  assert({
    given: 'a rejected question',
    should: 'return 10',
    actual: getQuestionsPoints(createQuestion({ status: 'Rejected' })),
    expected: 10,
  });
});

describe('calculateScore()', async assert => {
  assert({
    given: 'an empty array',
    should: 'return 0',
    actual: calculateScore([]),
    expected: 0,
  });

  assert({
    given: 'an array of questions',
    should: 'return the correct score',
    actual: calculateScore([
      question,
      otherQuestion,
      createQuestion({ status: 'Accepted' }),
      createQuestion({ status: 'Rejected' }),
    ]),
    expected: 12,
  });
});

describe('youngerThanYesterday()', async assert => {
  assert({
    given: 'a question which is younger than yesterday',
    should: 'return true',
    actual: youngerThanYesterday(question),
    expected: true,
  });

  assert({
    given: 'a question which is older than yesterday',
    should: 'return false',
    actual: youngerThanYesterday(otherQuestion),
    expected: false,
  });
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

  // NOTE: Ask Eric if no tests for the selectors are okay, since they are composed
});
