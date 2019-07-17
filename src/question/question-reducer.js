import * as R from 'ramda';

const addQuestion = payload => ({
  type: 'questions/ADD',
  payload,
});

const initial = [];

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

const getQuestions = state => state.questions;
const getTotalScore = R.pipe(
  getQuestions,
  calculateScore
);
const getDayScore = R.pipe(
  getQuestions,
  R.filter(youngerThanYesterday),
  calculateScore
);

const reducer = (state = initial, { type, payload } = {}) => {
  switch (type) {
    case addQuestion().type:
      return [...state, payload];
    default:
      return state;
  }
};

export {
  addQuestion,
  calculateScore,
  getQuestions,
  getQuestionsPoints,
  getDayScore,
  getTotalScore,
  reducer,
  youngerThanYesterday,
};
