import React, { useState } from 'react';
import { connect } from 'react-redux';

import { createQuestion } from '../factories';
import { addQuestion } from '../question/question-reducer';
import Game from './game-component';

export default connect(
  null,
  { addQuestion }
)(({ addQuestion }) => {
  const [askee, setAskee] = useState('');
  const [question, setNewQuestion] = useState('');

  const handleClick = (status = 'Rejected') => {
    addQuestion(createQuestion({ askee, status, question }));
    setAskee('');
    setNewQuestion('');
  };

  return (
    <Game
      askee={askee}
      newQuestion={question}
      onChangeAskee={({ target }) => setAskee(target.value)}
      onChangeNewQuestion={({ target }) => setNewQuestion(target.value)}
      onClick={handleClick}
    />
  );
});
