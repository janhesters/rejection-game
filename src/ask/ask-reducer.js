import * as R from 'ramda';

const addAsk = payload => ({
  type: 'ask/ADD',
  payload,
});

const initial = [];

const youngerThanYesterday = ask =>
  ask.dateCreated > (d => new Date(d.setDate(d.getDate() - 1)))(new Date());

const getAsks = state => state.asks;
const getTotalScore = R.pipe(
  getAsks,
  R.length
);
const getDayScore = R.pipe(
  getAsks,
  R.filter(youngerThanYesterday),
  R.length
);

const reducer = (state = initial, { type, payload } = {}) => {
  switch (type) {
    case addAsk().type:
      return [...state, payload];
    default:
      return state;
  }
};

export { addAsk, getAsks, getDayScore, getTotalScore, reducer };
