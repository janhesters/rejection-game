import { API, graphqlOperation } from 'aws-amplify';
import * as R from 'ramda';
import { call, put, takeEvery } from 'redux-saga/effects';

import { createQuestion as gqlCreateQuestion } from '../graphql/mutations';
import { listQuestions } from '../graphql/queries';
import { openSnackbar } from '../snackbar/snackbar-reducer';
import {
  addQuestion,
  addQuestions,
  createQuestion as cq,
  fetchQuestions as fq,
} from './question-reducer';

const convertGraphQLDataToQuestion = ({ createdAt, ...q }) => ({
  timestamp: new Date(createdAt),
  ...q,
});

function* fetchQuestions() {
  const toAction = R.pipe(
    R.path(['data', 'listQuestions', 'items']),
    R.map(convertGraphQLDataToQuestion),
    addQuestions
  );

  try {
    const result = yield call(
      [API, 'graphql'],
      graphqlOperation(listQuestions, { limit: 100 })
    );
    yield put(toAction(result));
  } catch (e) {
    console.log(e);
    yield put(openSnackbar(e.message || e.errors[0].message));
  }
}

function* createQuestion({ payload: { askee, question, status } }) {
  const toAction = R.pipe(
    R.path(['data', 'createQuestion']),
    convertGraphQLDataToQuestion,
    addQuestion
  );
  console.log(askee, question, status);

  try {
    const result = yield call(
      [API, 'graphql'],
      graphqlOperation(gqlCreateQuestion, {
        input: { askee, question, status },
      })
    );
    yield put(toAction(result));
  } catch (e) {
    console.log(e);
    yield put(openSnackbar(e.message || e.errors[0].message));
  }
}

function* watchFetchQuestions() {
  yield takeEvery(fq().type, fetchQuestions);
}

function* watchCreateQuestions() {
  yield takeEvery(cq().type, createQuestion);
}

export {
  createQuestion,
  fetchQuestions,
  watchCreateQuestions,
  watchFetchQuestions,
};
