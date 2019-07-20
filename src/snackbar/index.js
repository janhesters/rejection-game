import { connect } from 'react-redux';

import Snackbar from './snackbar-component';
import { closeSnackbar, getMessage, getOpen } from './snackbar-reducer';

const mapStateToProps = state => ({
  message: getMessage(state),
  open: getOpen(state),
});

export default connect(
  mapStateToProps,
  { onClose: closeSnackbar }
)(Snackbar);
