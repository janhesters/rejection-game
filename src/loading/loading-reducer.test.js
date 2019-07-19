import { describe } from 'riteway';

import { createState } from '../factories';
import {
  getLoading,
  reducer,
  startLoading,
  stopLoading,
} from './loading-reducer';

describe('loading reducer', async assert => {
  assert({
    given: 'no arguments',
    should: 'return the valid initial state',
    actual: reducer(),
    expected: true,
  });

  assert({
    given: 'initial state and a stop loading action',
    should: 'return true',
    actual: reducer(undefined, stopLoading()),
    expected: false,
  });

  assert({
    given: 'not loading and a start loading action',
    should: 'return true',
    actual: reducer(false, startLoading()),
    expected: true,
  });

  assert({
    given: 'some loading state and a get loading selector',
    should: 'return the loading state',
    actual: getLoading(createState()),
    expected: false,
  });
});
