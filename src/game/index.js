import React from 'react';
import { connect } from 'react-redux';

import { clearUser, getUser, setUser } from '../auth/auth-reducer';
import { useAuth } from '../auth/hooks';
import { getLoading, stopLoading } from '../loading/loading-reducer';
import Game from './game-component';

const mapStateToProps = state => ({
  loading: getLoading(state),
  user: getUser(state),
});

export default connect(
  mapStateToProps,
  { clearUser, setUser, stopLoading }
)(({ clearUser, setUser, stopLoading, ...props }) => {
  useAuth({ clearUser, setUser, stopLoading });
  return <Game {...props} />;
});
