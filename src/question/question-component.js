import PropTypes from 'prop-types';
import React from 'react';

function Question({ askee, status, timestamp, question }) {
  return (
    <div className="question">
      <span className="question-content">{question}</span>
      <span className="question-timestamp">
        {timestamp.toLocaleDateString()}
      </span>
      <span className="question-askee">{askee}</span>
      <span className="question-status">{status}</span>
    </div>
  );
}

Question.propTypes = {
  askee: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  timestamp: PropTypes.object.isRequired,
  question: PropTypes.string.isRequired,
};

export default Question;
