import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import strings from './strings';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
});

function Header({ appTitle, onClick, user }) {
  const classes = useStyles();

  let signOutButton = null;

  if (user) {
    signOutButton = (
      <Button color="inherit" onClick={onClick}>
        {strings.logOut}
      </Button>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            className={classNames(classes.title, 'app-title')}
          >
            {appTitle}
          </Typography>
          {signOutButton}
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  appTitle: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  user: PropTypes.object,
};

Header.defaultProps = {
  user: null,
};

export default Header;
