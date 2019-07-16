import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';

import { createAskFixture } from '../fixtures';
import History from './history-component';
import strings from './strings';

describe('History component', async assert => {
  const createHistory = (props = {}) => render(<History {...props} />);

  {
    const props = {};
    const $ = createHistory(props);

    assert({
      given: 'just rendering',
      should: 'render a heading',
      actual: $('.history-heading')
        .html()
        .trim(),
      expected: strings.historyHeading,
    });
  }

  {
    const props = {};
    const $ = createHistory(props);

    assert({
      given: 'no asks',
      should: 'render a no asks message',
      actual: $('.no-asks')
        .html()
        .trim(),
      expected: strings.noAsks,
    });
  }

  {
    const props = {
      asks: [
        createAskFixture(),
        createAskFixture({ demand: 'baz', accepted: true }),
      ],
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
