import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { reducer as auth } from './auth/auth-reducer';
import { reducer as loading } from './loading/loading-reducer';
import { reducer as questions } from './question/question-reducer';
import {
  watchCreateQuestions,
  watchFetchQuestions,
} from './question/question-saga';
import { reducer as snackbar } from './snackbar/snackbar-reducer';

const rootReducer = combineReducers({ auth, loading, questions, snackbar });

function* rootSaga() {
  yield all([watchCreateQuestions(), watchFetchQuestions()]);
}

const sagaMiddleware = createSagaMiddleware();
const configureStore = () => {
  const middlewares = [sagaMiddleware];
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  const middlewareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(rootReducer, middlewareEnhancer);
  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore();
