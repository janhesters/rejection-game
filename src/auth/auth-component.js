import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles({
  facebookButton: {
    maxWidth: 250,
    padding: '0px 16px',
    borderRadius: 2,
    boxShadow: '0px 1px 3px rgba(0, 0, 0, .3)',
    cursor: 'pointer',
    outline: 'none',
    border: 'none',
    minHeight: 40,
    backgroundColor: '#3b5998',
  },
  container: {
    height: '100%',
  },
  text: {
    color: 'white',
    fontSize: 14,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
});

function Auth({ onClick }) {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classNames(classes.container, 'auth')}
    >
      <button
        className={classNames('facebook-button', classes.facebookButton)}
        onClick={onClick}
      >
        <p className={classes.text}>Sign in with Facebook</p>
      </button>
    </Grid>
  );
}

Auth.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Auth;
