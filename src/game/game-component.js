import PropTypes from 'prop-types';
import React from 'react';

import strings from './strings';

function Game({ dayScore, newAsk, onChangeNewAsk, totalScore }) {
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
      <input className="ask-input" value={newAsk} onChange={onChangeNewAsk} />
      <button className="accepted-button">{strings.accepted}</button>
      <button className="rejected-button">{strings.rejected}</button>
    </>
  );
}

Game.propTypes = {
  dayScore: PropTypes.number.isRequired,
  newAsk: PropTypes.string.isRequired,
  onChangeNewAsk: PropTypes.func.isRequired,
  totalScore: PropTypes.number.isRequired,
};

Game.defaultProps = {
  dayScore: 0,
  newAsk: '',
  totalScore: 0,
};

export default Game;
