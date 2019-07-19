import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';

import Loading from './loading-component';

describe('Loading component', async assert => {
  const createLoading = (props = {}) => render(<Loading {...props} />);

  {
    const props = {};
    const $ = createLoading(props);

    assert({
      given: 'just rendering',
      should: 'display a spinner',
      actual: $('.spinner').length,
      expected: 1,
    });
  }
});
