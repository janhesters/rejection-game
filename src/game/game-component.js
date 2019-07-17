import Container from '@material-ui/core/Container';
import React from 'react';

import History from '../history';
import QuestionForm from '../question-form';
import Scores from '../scores';

function Game() {
  return (
    <Container maxWidth="md" className="game-container">
      <Scores />
      <QuestionForm />
      <History />
    </Container>
  );
}

export default Game;
