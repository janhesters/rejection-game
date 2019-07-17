import { describe } from 'riteway';

import { createAsk } from '../factories';
import {
  addAsk,
  getAsks,
  getDayScore,
  getTotalScore,
  reducer,
} from './ask-reducer';

const ask = createAsk();
const otherAsk = createAsk({
  demand: 'foo',
  accepted: true,
});

describe('ask reducer()', async assert => {
  assert({
    given: 'no arguments',
    should: 'return the valid initial state',
    actual: reducer(),
    expected: [],
  });

  assert({
    given: 'initial state and an add ask action',
    should: 'add the ask to the state',
    actual: reducer(undefined, addAsk(ask)),
    expected: [ask],
  });

  assert({
    given: 'state and an add ask action',
    should: 'add the ask to the state',
    actual: reducer([ask], addAsk(otherAsk)),
    expected: [ask, otherAsk],
  });

  // NOTE: Ask Eric, if this is how to test selectors.
  assert({
    given: 'state and a get asks selector',
    should: 'return the asks',
    actual: getAsks({ asks: [ask, otherAsk] }),
    expected: [ask, otherAsk],
  });

  assert({
    given: 'state and a get total score selector',
    should: 'return the amount of asks',
    actual: getTotalScore({ asks: [ask, otherAsk] }),
    expected: 2,
  });

  assert({
    given: 'state and a get day score selector',
    should: 'return the amount of asks younger than a day',
    actual: getDayScore({
      asks: [ask, createAsk({ dateCreated: new Date('2000-01-01') })],
    }),
    expected: 1,
  });
});
