import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';

import { createAsk } from '../factories';
import History from './history-component';

describe('History component', async assert => {
  const createHistory = (props = {}) => render(<History {...props} />);

  {
    const props = {};
    const $ = createHistory(props);

    assert({
      given: 'just rendering',
      should: 'render a heading',
      actual: $('.history-heading').length,
      expected: 1,
    });
  }

  {
    const props = {};
    const $ = createHistory(props);

    assert({
      given: 'no asks',
      should: 'render a no asks message',
      actual: $('.no-asks').length,
      expected: 1,
    });
  }

  {
    const props = {
      asks: [createAsk(), createAsk({ demand: 'baz', accepted: true })],
    };
    const $ = createHistory(props);

    assert({
      given: 'some asks',
      should: 'render the asks',
      actual: $('.ask').length,
      expected: props.asks.length,
    });
  }
});
