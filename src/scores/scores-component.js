import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

import strings from './strings';

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(1),
  },
}));

function Scores({ dayScore, totalScore }) {
  const classes = useStyles();
  return (
    <Grid className="scores" container spacing={1} justify="center">
      <Grid item xs={6}>
        <Chip
          avatar={<Avatar className="total-score">{totalScore}</Avatar>}
          label={strings.totalPoints}
          clickable
          className={classes.chip}
          color="primary"
        />
      </Grid>
      <Grid item xs={6}>
        <Chip
          avatar={<Avatar className="day-score">{dayScore}</Avatar>}
          label={strings.dayPoints}
          clickable
          className={classes.chip}
          color="primary"
        />
      </Grid>
    </Grid>
  );
}

Scores.propTypes = {
  dayScore: PropTypes.number.isRequired,
  totalScore: PropTypes.number.isRequired,
};

Scores.defaultProps = {
  dayScore: 0,
  totalScore: 0,
};

export default Scores;
