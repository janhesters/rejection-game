import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';

import { createAskFixture } from '../fixtures';
import Ask from './ask-component';

describe('Ask component', async assert => {
  const createAsk = (props = {}) => render(<Ask {...props} />);

  {
    const props = createAskFixture();
    const $ = createAsk(props);

    assert({
      given: 'an ask',
      should: 'render its demand',
      actual: $('.ask-demand')
        .html()
        .trim(),
      expected: props.demand,
    });
  }

  {
    const props = createAskFixture();
    const $ = createAsk(props);

    assert({
      given: 'a rejected ask',
      should: "render '🚫'",
      actual: $('.ask-status')
        .html()
        .trim(),
      expected: '&#x1F6AB;',
    });
  }

  {
    const props = createAskFixture({ accepted: true });
    const $ = createAsk(props);

    assert({
      given: 'an accepted ask',
      should: "render '✅'",
      actual: $('.ask-status')
        .html()
        .trim(),
      expected: '&#x2705;',
    });
  }
});
