import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';

import Auth from './auth-component';

describe('Auth component', async assert => {
  const createAuth = (props = {}) =>
    render(<Auth onClick={() => {}} {...props} />);

  {
    const props = {};
    const $ = createAuth(props);

    assert({
      given: 'just rendering',
      should: 'display a facebook button',
      actual: $('.facebook-button')[0].name,
      expected: 'button',
    });
  }
});
