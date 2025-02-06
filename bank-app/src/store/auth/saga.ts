import { delay, put, takeLatest } from 'redux-saga/effects';
import { handleHideSplash } from '@/store/splash/action';
import { AUTH_ACTION, handleCheckAuthDone } from './action';

export function* checkAuthSaga() {
  const isAuth = localStorage.getItem('isAuth') === 'true';
  yield delay(1000);
  yield put(handleCheckAuthDone({ isAuth }));
  yield put(handleHideSplash());
}

export function* authSaga() {
  yield takeLatest(AUTH_ACTION.CHECK_AUTH, checkAuthSaga);
}
