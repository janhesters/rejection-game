import PropTypes from 'prop-types';
import React from 'react';

function Game({ dayScore, totalScore }) {
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
      <input className="ask-input" />
      <button className="accepted-button" />
      <button className="rejected-button" />
    </>
  );
}

Game.propTypes = {
  dayScore: PropTypes.number.isRequired,
  totalScore: PropTypes.number.isRequired,
};

Game.defaultProps = {
  dayScore: 0,
  totalScore: 0,
};

export default Game;
