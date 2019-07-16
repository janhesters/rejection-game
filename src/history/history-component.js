import PropTypes from 'prop-types';
import React from 'react';

import Ask from '../ask';
import strings from './strings';

function History({ asks }) {
  return (
    <>
      <h3 className="history-heading">{strings.historyHeading}</h3>
      {asks.length === 0 && <p className="no-asks">{strings.noAsks}</p>}
      {asks.map(({ id, ...ask }) => (
        <Ask key={id} {...ask} />
      ))}
    </>
  );
}

History.propTypes = {
  asks: PropTypes.array.isRequired,
};

History.defaultProps = {
  asks: [],
};

export default History;
