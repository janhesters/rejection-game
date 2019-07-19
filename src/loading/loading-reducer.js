const startLoading = () => ({ type: 'loading/START' });
const stopLoading = () => ({ type: 'loading/stop' });

const getLoading = state => state.loading;

const initial = true;

const reducer = (state = initial, { type } = {}) => {
  switch (type) {
    case startLoading().type:
      return true;
    case stopLoading().type:
      return false;
    default:
      return state;
  }
};

export { getLoading, reducer, startLoading, stopLoading };
