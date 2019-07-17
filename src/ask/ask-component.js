import PropTypes from 'prop-types';
import React from 'react';

function Ask({ accepted, dateCreated, demand }) {
  return (
    <div className="ask">
      <span className="ask-demand">{demand}</span>
      <span className="ask-date-created">
        {dateCreated.toLocaleDateString()}
      </span>
      <span className="ask-status">{accepted ? '✅' : '🚫'}</span>
    </div>
  );
}

Ask.propTypes = {
  dateCreated: PropTypes.object.isRequired,
  demand: PropTypes.string.isRequired,
  accepted: PropTypes.bool.isRequired,
};

export default Ask;
