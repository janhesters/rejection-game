import React, { useState } from 'react';
import { connect } from 'react-redux';

import { createQuestion } from '../question/question-reducer';
import QuestionForm from './question-form-component';

export default connect(
  null,
  { createQuestion }
)(({ createQuestion }) => {
  const [askee, setAskee] = useState('');
  const [question, setNewQuestion] = useState('');

  const disabled = askee === '' || question === '';

  const handleClick = (status = 'Rejected') => {
    createQuestion({ askee, status, question });
    setAskee('');
    setNewQuestion('');
  };

  return (
    <QuestionForm
      askee={askee}
      disabled={disabled}
      newQuestion={question}
      onChangeAskee={({ target }) => setAskee(target.value)}
      onChangeNewQuestion={({ target }) => setNewQuestion(target.value)}
      onClick={handleClick}
    />
  );
});
