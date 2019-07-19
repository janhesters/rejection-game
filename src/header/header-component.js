import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function Header({ appTitle, user }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit" className="app-title">
            {appTitle}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  appTitle: PropTypes.string.isRequired,
  user: PropTypes.object,
};

Header.defaultProps = {
  user: null,
};

export default Header;
