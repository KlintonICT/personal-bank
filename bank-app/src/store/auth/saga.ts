import { all, delay, put, takeLatest } from 'redux-saga/effects';

import { AUTH_ACTION, handleCheckAuthDone, handleLoginSuccess } from './action';

import { handleFetchBanner } from '@/store/banner/action';
import { handleHideSplash } from '@/store/splash/action';
import { handleFetchRecentTransaction, handleFetchUserCard, handleFetchUserInfo } from '@/store/user/action';

export function* checkAuthSaga() {
  const isAuth = localStorage.getItem('isAuth') === 'true';
  yield delay(1000);
  if (isAuth) {
    yield all([
      put(handleFetchUserInfo()),
      put(handleFetchRecentTransaction()),
      put(handleFetchUserCard()),
      put(handleFetchBanner()),
    ]);
  }
  yield put(handleCheckAuthDone({ isAuth }));
  yield put(handleHideSplash());
}

export function* login() {
  localStorage.setItem('isAuth', 'true');
  yield all([
    put(handleFetchUserInfo()),
    put(handleFetchRecentTransaction()),
    put(handleFetchUserCard()),
    put(handleFetchBanner()),
  ]);
  yield put(handleLoginSuccess());
}

export function* authSaga() {
  yield takeLatest(AUTH_ACTION.CHECK_AUTH, checkAuthSaga);
  yield takeLatest(AUTH_ACTION.LOGIN_REQUEST, login);
}
