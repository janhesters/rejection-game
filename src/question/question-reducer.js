import * as R from 'ramda';

const addQuestion = payload => ({ type: 'questions/ADD', payload });
const addQuestions = payload => ({ type: 'questions/ADD_ARRAY', payload });

// NOTE: Bundle this action creator here with the reducer, or with the saga?
const fetchQuestions = () => ({ type: 'questions/FETCH' });
const createQuestion = payload => ({ type: 'questions/CREATE', payload });

const sortByTimeStamp = (q1, q2) =>
  q2.timestamp.getTime() - q1.timestamp.getTime();

const initial = [];

const getQuestions = state => state.questions;

const reducer = (state = initial, { type, payload } = {}) => {
  switch (type) {
    case addQuestion().type:
      return R.sort(sortByTimeStamp, [...state, payload]);
    case addQuestions().type:
      return R.sort(sortByTimeStamp, R.concat(state, payload));
    default:
      return state;
  }
};

export {
  addQuestion,
  addQuestions,
  createQuestion,
  fetchQuestions,
  getQuestions,
  reducer,
};
