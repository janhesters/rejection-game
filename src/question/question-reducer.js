const addQuestion = payload => ({
  type: 'questions/ADD',
  payload,
});

const initial = [];

const getQuestions = state => state.questions;

const reducer = (state = initial, { type, payload } = {}) => {
  switch (type) {
    case addQuestion().type:
      return [...state, payload].sort(
        (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
      );
    default:
      return state;
  }
};

export { addQuestion, getQuestions, reducer };
