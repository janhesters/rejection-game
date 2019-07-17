import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addAsk, getDayScore, getTotalScore } from '../ask/ask-reducer';
import { createAsk } from '../factories';
import Game from './game-component';

const mapStateToProps = state => ({
  dayScore: getDayScore(state),
  totalScore: getTotalScore(state),
});

export default connect(
  mapStateToProps,
  { addAsk }
)(({ addAsk, ...props }) => {
  const [demand, setNewDemand] = useState('');

  const handleClick = (accepted = false) => {
    addAsk(createAsk({ demand, accepted }));
    setNewDemand('');
  };

  return (
    <Game
      {...props}
      newAsk={demand}
      onChangeNewAsk={({ target }) => setNewDemand(target.value)}
      onClick={handleClick}
    />
  );
});
