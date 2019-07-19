import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

import { reducer as user } from './auth/auth-reducer';
import { reducer as loading } from './loading/loading-reducer';
import { reducer as questions } from './question/question-reducer';

const reducer = combineReducers({ loading, questions, user });

const configureStore = () => {
  const middlewares = [];
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  const middlewareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(reducer, middlewareEnhancer);
  return store;
};

export default configureStore();
