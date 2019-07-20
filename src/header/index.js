import { Auth } from 'aws-amplify';
import { connect } from 'react-redux';

import { clearUser, getUser } from '../auth/auth-reducer';
import Header from './header-component';
import strings from './strings';

const mapStateToProps = state => ({
  appTitle: strings.appTitle,
  user: getUser(state),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...ownProps,
  ...dispatchProps,
  onClick: async () => {
    await Auth.signOut();
    dispatchProps.clearUser();
  },
});

export default connect(
  mapStateToProps,
  { clearUser },
  mergeProps
)(Header);
