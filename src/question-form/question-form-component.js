import PropTypes from 'prop-types';
import React from 'react';

import strings from './strings';

function QuestionForm({
  askee,
  newQuestion,
  onChangeAskee,
  onChangeNewQuestion,
  onClick,
}) {
  return (
    <div className="question-form">
      <input
        className="question-input"
        value={newQuestion}
        onChange={onChangeNewQuestion}
        placeholder={strings.questionPlaceholder}
      />
      <input
        className="question-askee-input"
        value={askee}
        onChange={onChangeAskee}
        placeholder={strings.askeePlaceholder}
      />
      <button className="rejected-button" onClick={() => onClick()}>
        {strings.rejected}
      </button>
      <button className="accepted-button" onClick={() => onClick('Accepted')}>
        {strings.accepted}
      </button>
    </div>
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
