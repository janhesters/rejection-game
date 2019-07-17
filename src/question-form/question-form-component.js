import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import strings from './strings';

const useStyles = makeStyles(theme => ({
  accepted: {
    backgroundColor: theme.palette.accepted[500],
  },
  rejected: {
    backgroundColor: theme.palette.rejected[500],
  },
}));

function QuestionForm({
  askee,
  newQuestion,
  onChangeAskee,
  onChangeNewQuestion,
  onClick,
}) {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className="question-form" alignItems="center">
      <Grid item md={5} xs={12}>
        <TextField
          inputProps={{ className: 'question-input' }}
          fullWidth={true}
          label={strings.question}
          onChange={onChangeNewQuestion}
          placeholder={strings.questionPlaceholder}
          value={newQuestion}
          variant="outlined"
        />
      </Grid>
      <Grid item md={3} xs={12}>
        <TextField
          inputProps={{ className: 'question-askee-input' }}
          fullWidth={true}
          label={strings.askee}
          onChange={onChangeAskee}
          placeholder={strings.askeePlaceholder}
          value={askee}
          variant="outlined"
        />
      </Grid>
      <Grid item md={2} sm={6} xs={12}>
        <Button
          className={classNames(classes.rejected, 'rejected-button')}
          color="primary"
          fullWidth={true}
          onClick={() => onClick()}
          variant="contained"
        >
          {strings.rejected}
        </Button>
      </Grid>
      <Grid item md={2} sm={6} xs={12}>
        <Button
          className={classNames(classes.accepted, 'accepted-button')}
          color="primary"
          fullWidth={true}
          onClick={() => onClick('Accepted')}
          variant="contained"
        >
          {strings.accepted}
        </Button>
      </Grid>
    </Grid>
  );
}

QuestionForm.propTypes = {
  newQuestion: PropTypes.string.isRequired,
  onChangeAskee: PropTypes.func.isRequired,
  onChangeNewQuestion: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

QuestionForm.defaultProps = {
  newQuestion: '',
};

export default QuestionForm;
