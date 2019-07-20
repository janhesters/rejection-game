import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';

import Snackbar from './snackbar-component';

describe('Snackbar component', async assert => {
  const createSnackbar = (props = {}) =>
    render(<Snackbar onClose={() => {}} {...props} />);

  {
    const props = { open: false, message: '' };
    const $ = createSnackbar(props);

    assert({
      given: 'open set to false',
      should: 'render nothing',
      actual: $('.snackbar-message').html(),
      expected: null,
    });
  }

  {
    const props = { open: true, message: 'This is an error message' };
    const $ = createSnackbar(props);

    assert({
      given: 'open set to true and a message',
      should: 'render the message',
      actual: $('.snackbar-message')
        .html()
        .trim(),
      expected: props.message,
    });
  }
});
