const setUser = payload => ({
  type: 'user/ADD',
  payload,
});
const clearUser = () => ({ type: 'user/CLEAR' });

const getUser = state => state.auth.user;

const initial = { user: null };

const reducer = (state = initial, { type, payload } = {}) => {
  switch (type) {
    case setUser().type:
      return { user: payload };
    case clearUser().type:
      return initial;
    default:
      return state;
  }
};

export { clearUser, getUser, reducer, setUser };
