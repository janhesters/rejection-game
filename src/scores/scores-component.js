import PropTypes from 'prop-types';
import React from 'react';

function Scores({ dayScore, totalScore }) {
  return (
    <>
      <p>
        Total:
        <span className="total-score">{totalScore}</span>
      </p>
      <p>
        Today:
        <span className="day-score">{dayScore}</span>
      </p>
    </>
  );
}

Scores.propTypes = {
  dayScore: PropTypes.number.isRequired,
  totalScore: PropTypes.number.isRequired,
};

Scores.defaultProps = {
  dayScore: 0,
  totalScore: 0,
};

export default Scores;