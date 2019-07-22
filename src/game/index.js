import React from 'react';
import { connect } from 'react-redux';

import { clearUser, getUser, setUser } from '../auth/auth-reducer';
import { useAuth } from '../auth/hooks';
import { getLoading, stopLoading } from '../loading/loading-reducer';
import { fetchQuestions } from '../question/question-reducer';
import Game from './game-component';

const mapStateToProps = state => ({
  loading: getLoading(state),
  user: getUser(state),
});

export default connect(
  mapStateToProps,
  { clearUser, fetchQuestions, setUser, stopLoading }
)(({ clearUser, fetchQuestions, setUser, stopLoading, ...props }) => {
  useAuth({ clearUser, fetchQuestions, setUser, stopLoading });
  return <Game {...props} />;
});
