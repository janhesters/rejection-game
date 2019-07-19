import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Auth from '../auth';
import History from '../history';
import Loading from '../loading';
import QuestionForm from '../question-form';
import Scores from '../scores';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 2),
    height: 'calc(100vh - 64px)',
  },
  container: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  progress: {
    margin: theme.spacing(2),
  },
}));

function Game({ loading, user }) {
  const classes = useStyles();

  let content = <Loading />;

  if (!loading) {
    if (user) {
      content = (
        <>
          <Scores />
          <QuestionForm />
          <History />
        </>
      );
    } else {
      content = <Auth />;
    }
  }

  return (
    <Container
      maxWidth="md"
      className={classNames(classes.container, 'game-container')}
    >
      <Paper className={classes.root}>{content}</Paper>
    </Container>
  );
}

Game.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object,
};

Game.defaultProps = {
  loading: false,
  user: null,
};

export default Game;
