const addQuestion = payload => ({
  type: 'questions/ADD',
  payload,
});

const initial = [];

const getQuestions = state => state.questions;

const reducer = (state = initial, { type, payload } = {}) => {
  switch (type) {
    case addQuestion().type:
      return [...state, payload];
    default:
      return state;
  }
};

export { addQuestion, getQuestions, reducer };
