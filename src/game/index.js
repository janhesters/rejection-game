import { connect } from 'react-redux';

import { getUser } from '../auth/auth-reducer';
import { getLoading } from '../loading/loading-reducer';
import Game from './game-component';

const mapStateToProps = state => ({
  loading: getLoading(state),
  user: getUser(state),
});

export default connect(mapStateToProps)(Game);
