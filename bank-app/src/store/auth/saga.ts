import { all, delay, put, takeLatest } from 'redux-saga/effects';

import { AUTH_ACTION, handleCheckAuthDone, handleLoginSuccess } from './action';

import { handleHideSplash } from '@/store/splash/action';
import { handleFetchUserInfo } from '@/store/user/action';

export function* checkAuthSaga() {
  const isAuth = localStorage.getItem('isAuth') === 'true';
  yield delay(1000);
  yield all([put(handleFetchUserInfo())])
  yield put(handleCheckAuthDone({ isAuth }));
  yield put(handleHideSplash());
}

export function* login() {
  localStorage.setItem('isAuth', 'true');
  yield all([put(handleFetchUserInfo())])
  yield put(handleLoginSuccess());
}

export function* authSaga() {
  yield takeLatest(AUTH_ACTION.CHECK_AUTH, checkAuthSaga);
  yield takeLatest(AUTH_ACTION.LOGIN_REQUEST, login);
}
