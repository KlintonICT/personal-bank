import { delay, put, takeLatest } from 'redux-saga/effects';

import { AUTH_ACTION, handleCheckAuthDone, handleLoginSuccess } from './action';

import { handleHideSplash } from '@/store/splash/action';

export function* checkAuthSaga() {
  const isAuth = localStorage.getItem('isAuth') === 'true';
  yield delay(1000);
  yield put(handleCheckAuthDone({ isAuth }));
  yield put(handleHideSplash());
}

export function* login() {
  localStorage.setItem('isAuth', 'true');
  yield put(handleLoginSuccess());
}

export function* authSaga() {
  yield takeLatest(AUTH_ACTION.CHECK_AUTH, checkAuthSaga);
  yield takeLatest(AUTH_ACTION.LOGIN_REQUEST, login);
}
