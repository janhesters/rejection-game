import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';

import Header from './header-component';

describe('Header component', async assert => {
  const createHeader = (props = {}) => render(<Header {...props} />);

  {
    const props = { appTitle: 'foo' };
    const $ = createHeader(props);

    assert({
      given: 'a an app title',
      should: 'display the app title',
      actual: $('.app-title')
        .html()
        .trim(),
      expected: props.appTitle,
    });
  }
});
