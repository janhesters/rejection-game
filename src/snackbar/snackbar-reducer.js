import * as R from 'ramda';

const openSnackbar = payload => ({ type: 'snackbar/OPEN', payload });
const closeSnackbar = () => ({ type: 'snackbar/CLOSE' });

const getSnackbar = R.prop('snackbar');
const getOpen = R.pipe(
  getSnackbar,
  R.prop('open')
);
const getMessage = R.pipe(
  getSnackbar,
  R.prop('message')
);

const initial = { open: false, message: '' };

const reducer = (state = initial, { type, payload } = {}) => {
  switch (type) {
    case openSnackbar().type:
      return { open: true, message: payload };
    case closeSnackbar().type:
      return initial;
    default:
      return state;
  }
};

export {
  closeSnackbar,
  getSnackbar,
  getOpen,
  getMessage,
  openSnackbar,
  reducer,
};
