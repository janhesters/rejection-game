import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Question from '../question';
import strings from './strings';

function History({ questions }) {
  return (
    <List
      className={classNames('history')}
      subheader={
        <ListSubheader component="div" className="history-heading">
          {strings.historyHeading}
        </ListSubheader>
      }
    >
      <Divider />
      {questions.length === 0 && (
        <ListItem className="no-questions">
          <ListItemText>{strings.noQuestions}</ListItemText>
        </ListItem>
      )}
      {questions.map(({ id, ...question }) => (
        <span key={id}>
          <Question {...question} />
          <Divider />
        </span>
      ))}
    </List>
  );
}

History.propTypes = {
  questions: PropTypes.array.isRequired,
};

History.defaultProps = {
  questions: [],
};

export default History;
