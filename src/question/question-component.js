import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BlockIcon from '@material-ui/icons/Block';
import CheckIcon from '@material-ui/icons/Check';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
  inline: {
    display: 'inline',
    marginRight: '7px',
  },
  accepted: {
    backgroundColor: theme.palette.accepted[500],
  },
  rejected: {
    backgroundColor: theme.palette.rejected[500],
  },
}));

function Question({ askee, status, timestamp, question }) {
  const classes = useStyles();

  // NOTE: Is it okay to have conditional logic like this in pure components?
  const getIcon = () => {
    switch (status) {
      case 'Accepted':
        return (
          <Avatar className={classNames(classes.accepted, 'question-status')}>
            <CheckIcon />
          </Avatar>
        );
      case 'Rejected':
        return (
          <Avatar className={classNames(classes.rejected, 'question-status')}>
            <BlockIcon />
          </Avatar>
        );
      default:
        return (
          <Avatar className="question-status">
            <HelpOutlineIcon />
          </Avatar>
        );
    }
  };

  return (
    <ListItem className="question">
      <ListItemAvatar>{getIcon()}</ListItemAvatar>
      <ListItemText
        primaryTypographyProps={{ className: 'question-content' }}
        primary={question}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classNames(classes.inline, 'question-askee')}
              color="textPrimary"
            >
              {askee}
            </Typography>
            <span className="question-timestamp">
              {timestamp.toLocaleDateString()}
            </span>
          </React.Fragment>
        }
      />
      {/* <span className="question-status">{status}</span> */}
    </ListItem>
  );
}

Question.propTypes = {
  askee: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  timestamp: PropTypes.object.isRequired,
  question: PropTypes.string.isRequired,
};

export default Question;
