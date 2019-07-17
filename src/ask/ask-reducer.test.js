import { describe } from 'riteway';

import { createAsk } from '../factories';
import { addAsk, getAsks, reducer, youngerThanYesterday } from './ask-reducer';

const ask = createAsk();
const otherAsk = createAsk({
  dateCreated: new Date('2000-01-01'),
  demand: 'foo',
  accepted: true,
});

describe('youngerThanYesterday()', async assert => {
  assert({
    given: 'an ask which is younger than yesterday',
    should: 'return true',
    actual: youngerThanYesterday(ask),
    expected: true,
  });

  assert({
    given: 'an ask which is older than yesterday',
    should: 'return false',
    actual: youngerThanYesterday(otherAsk),
    expected: false,
  });
});

describe('ask reducer', async assert => {
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

  // NOTE: Ask Eric if no tests for the selectors are okay, since they are composed
});
