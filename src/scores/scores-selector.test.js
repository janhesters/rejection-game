import { describe } from 'riteway';

import { createQuestion } from '../factories';
import {
  calculateScore,
  getQuestionsPoints,
  youngerThanYesterday,
} from './scores-selector';

const question = createQuestion();
const otherQuestion = createQuestion({
  timestamp: new Date('2000-01-01'),
  question: 'foo',
  status: 'Accepted',
});

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
