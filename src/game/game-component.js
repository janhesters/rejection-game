import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import React from 'react';

import History from '../history';
import QuestionForm from '../question-form';
import Scores from '../scores';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    height: '100%',
  },
  container: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
}));

function Game() {
  const classes = useStyles();

  return (
    <Container
      maxWidth="md"
      className={classNames(classes.container, 'game-container')}
    >
      <Paper className={classes.root}>
        <Scores />
        <QuestionForm />
        <History />
      </Paper>
    </Container>
  );
}

export default Game;
