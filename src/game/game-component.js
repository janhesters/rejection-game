import PropTypes from 'prop-types';
import React from 'react';

import strings from './strings';

function Game({ dayScore, newAsk, onChangeNewAsk, onClick, totalScore }) {
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
      <button className="accepted-button" onClick={() => onClick(true)}>
        {strings.accepted}
      </button>
      <button className="rejected-button" onClick={() => onClick()}>
        {strings.rejected}
      </button>
    </>
  );
}

Game.propTypes = {
  dayScore: PropTypes.number.isRequired,
  newAsk: PropTypes.string.isRequired,
  onChangeNewAsk: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  totalScore: PropTypes.number.isRequired,
};

Game.defaultProps = {
  dayScore: 0,
  newAsk: '',
  totalScore: 0,
};

export default Game;
