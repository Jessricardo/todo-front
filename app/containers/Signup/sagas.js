import { takeLatest, call, put, take, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import {
  SEND_LOGIN,
} from './constants';
import {
  login,
} from './api';
import {
  loginFail,
} from './actions';

export function* watchLogin(action) {
  try {
    yield call(login, action.data);
    yield put(push('/'));
  } catch (e) {
    yield put(loginFail(e.response.body.error.message));
  }
}

export function* defaultSaga() {
  const watcher = yield [
    takeLatest(SEND_LOGIN, watchLogin),
  ];
  yield take(LOCATION_CHANGE);
  yield watcher.map((obj) => cancel(obj));
}

// All sagas to be loaded
export default [
  defaultSaga,
];
