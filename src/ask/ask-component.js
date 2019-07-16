import PropTypes from 'prop-types';
import React from 'react';

function Ask({ demand, accepted }) {
  return (
    <div className="ask">
      <span className="ask-demand">{demand}</span>
      <span className="ask-status">{accepted ? '✅' : '🚫'}</span>
    </div>
  );
}

Ask.propTypes = {
  demand: PropTypes.string.isRequired,
  accepted: PropTypes.bool.isRequired,
};

export default Ask;
