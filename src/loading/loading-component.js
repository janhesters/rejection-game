import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import React from 'react';

const useStyles = makeStyles(theme => ({
  loadingContainer: {
    height: '100%',
  },
  progress: {
    margin: theme.spacing(2),
  },
}));

function Loading() {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ height: '100%' }}
      className={classNames('loading', classes.loadingContainer)}
    >
      <CircularProgress className={classNames(classes.spinner, 'spinner')} />
    </Grid>
  );
}

export default Loading;
