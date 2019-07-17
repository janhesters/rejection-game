import PropTypes from 'prop-types';
import React from 'react';

import strings from './strings';

function Game({
  askee,
  dayScore,
  newQuestion,
  onChangeAskee,
  onChangeNewQuestion,
  onClick,
  totalScore,
}) {
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
      <input
        className="question-input"
        value={newQuestion}
        onChange={onChangeNewQuestion}
        placeholder={strings.questionPlaceholder}
      />
      <input
        className="question-askee-input"
        value={askee}
        onChange={onChangeAskee}
        placeholder={strings.askeePlaceholder}
      />
      <button className="rejected-button" onClick={() => onClick()}>
        {strings.rejected}
      </button>
      <button className="accepted-button" onClick={() => onClick('Accepted')}>
        {strings.accepted}
      </button>
    </>
  );
}

Game.propTypes = {
  dayScore: PropTypes.number.isRequired,
  newQuestion: PropTypes.string.isRequired,
  onChangeAskee: PropTypes.func.isRequired,
  onChangeNewQuestion: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  totalScore: PropTypes.number.isRequired,
};

Game.defaultProps = {
  dayScore: 0,
  newQuestion: '',
  totalScore: 0,
};

export default Game;
