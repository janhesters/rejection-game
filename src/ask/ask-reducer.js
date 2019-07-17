const addAsk = payload => ({
  type: 'ask/ADD',
  payload,
});

const initial = [];

const getAsks = state => state.asks;
const getDayScore = state =>
  state.asks.filter(
    a => a.dateCreated > (d => new Date(d.setDate(d.getDate() - 1)))(new Date())
  ).length;
const getTotalScore = state => state.asks.length;

const reducer = (state = initial, { type, payload } = {}) => {
  switch (type) {
    case addAsk().type:
      return [...state, payload];
    default:
      return state;
  }
};

export { addAsk, getAsks, getDayScore, getTotalScore, reducer };
