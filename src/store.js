import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

import { reducer as asks } from './ask/ask-reducer';

const reducer = combineReducers({ asks });

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
