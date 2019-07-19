import { describe } from 'riteway';

import { createState } from '../factories';
import { clearUser, getUser, reducer, setUser } from './auth-reducer';

describe('auth reducer', async assert => {
  assert({
    given: 'no arguments',
    should: 'return the valid initial state',
    actual: reducer(),
    expected: { user: null },
  });

  assert({
    given: 'initial state and a set user action',
    should: 'set the user',
    actual: reducer(undefined, setUser({ foo: 'bar' })),
    expected: { user: { foo: 'bar' } },
  });

  assert({
    given: 'a user and a clear user action',
    should: 'return the valid initial state',
    actual: reducer({ user: { foo: 'bar' } }, clearUser()),
    expected: { user: null },
  });

  assert({
    given: 'a user and a get user selector',
    should: 'return the user',
    actual: getUser(createState()),
    expected: { sub: 'user-abc' },
  });
});
