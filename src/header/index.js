import { connect } from 'react-redux';

import { getUser } from '../auth/auth-reducer';
import Header from './header-component';
import strings from './strings';

const mapStateToProps = state => ({
  appTitle: strings.appTitle,
  user: getUser(state),
});

export default connect(mapStateToProps)(Header);
