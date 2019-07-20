import { describe } from 'riteway';

import { createState } from '../factories';
import {
  closeSnackbar,
  getMessage,
  getOpen,
  getSnackbar,
  openSnackbar,
  reducer,
} from './snackbar-reducer';

describe('snackbar reducer', async assert => {
  assert({
    given: 'no arguments',
    should: 'return the valid initial state',
    actual: reducer(),
    expected: { open: false, message: '' },
  });

  assert({
    given: 'initial state and an open snack bar action',
    should: 'set open to true and set the message',
    actual: reducer(undefined, openSnackbar('foo')),
    expected: { open: true, message: 'foo' },
  });

  assert({
    given: 'some state and a close snack bar action',
    should: 'set open to false and reset the message',
    actual: reducer({ open: true, message: 'foo' }, closeSnackbar()),
    expected: { open: false, message: '' },
  });

  assert({
    given: 'state and a get snackbar selector',
    should: "return the snackbar's state",
    actual: getSnackbar(createState()),
    expected: { open: true, message: 'Error: No internet connection.' },
  });

  assert({
    given: 'state and a get open selector',
    should: "return the snackbar's open state",
    actual: getOpen(createState()),
    expected: true,
  });

  assert({
    given: 'state and a get message selector',
    should: "return the snackbar's message state",
    actual: getMessage(createState()),
    expected: 'Error: No internet connection.',
  });
});
