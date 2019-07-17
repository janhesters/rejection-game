import PropTypes from 'prop-types';
import React from 'react';

import Question from '../question';
import strings from './strings';

function History({ questions }) {
  return (
    <div className="history">
      <h3 className="history-heading">{strings.historyHeading}</h3>
      {questions.length === 0 && (
        <p className="no-questions">{strings.noQuestions}</p>
      )}
      {questions.map(({ id, ...question }) => (
        <Question key={id} {...question} />
      ))}
    </div>
  );
}

History.propTypes = {
  questions: PropTypes.array.isRequired,
};

History.defaultProps = {
  questions: [],
};

export default History;
