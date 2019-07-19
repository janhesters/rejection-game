import { Auth } from 'aws-amplify';
import { connect } from 'react-redux';

import { getUser } from '../auth/auth-reducer';
import Header from './header-component';
import strings from './strings';

// NOTE: Is this okay?
const mapStateToProps = state => ({
  appTitle: strings.appTitle,
  onClick: () => Auth.signOut(),
  user: getUser(state),
});

export default connect(mapStateToProps)(Header);
