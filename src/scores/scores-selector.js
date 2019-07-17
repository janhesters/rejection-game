import * as R from 'ramda';

import { getQuestions } from '../question/question-reducer';

const getQuestionsPoints = ({ status }) => {
  switch (status) {
    case 'Rejected':
      return 10;
    case 'Accepted':
      return 1;
    default:
      return 0;
  }
};
const calculateScore = R.reduce(
  (score, question) => score + getQuestionsPoints(question),
  0
);

const youngerThanYesterday = question =>
  question.timestamp > (d => new Date(d.setDate(d.getDate() - 1)))(new Date());

const getTotalScore = R.pipe(
  getQuestions,
  calculateScore
);
const getDayScore = R.pipe(
  getQuestions,
  R.filter(youngerThanYesterday),
  calculateScore
);

export {
  calculateScore,
  getQuestionsPoints,
  getTotalScore,
  getDayScore,
  youngerThanYesterday,
};
