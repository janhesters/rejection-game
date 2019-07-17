import React, { useState } from 'react';
import { connect } from 'react-redux';

import { createQuestion } from '../factories';
import {
  addQuestion,
  getDayScore,
  getTotalScore,
} from '../question/question-reducer';
import Game from './game-component';

const mapStateToProps = state => ({
  dayScore: getDayScore(state),
  totalScore: getTotalScore(state),
});

export default connect(
  mapStateToProps,
  { addQuestion }
)(({ addQuestion, ...props }) => {
  const [askee, setAskee] = useState('');
  const [question, setNewQuestion] = useState('');

  const handleClick = (status = 'Rejected') => {
    addQuestion(createQuestion({ askee, status, question }));
    setAskee('');
    setNewQuestion('');
  };

  return (
    <Game
      {...props}
      askee={askee}
      newQuestion={question}
      onChangeAskee={({ target }) => setAskee(target.value)}
      onChangeNewQuestion={({ target }) => setNewQuestion(target.value)}
      onClick={handleClick}
    />
  );
});
