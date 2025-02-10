import { put, call, takeLatest } from 'redux-saga/effects';

import {
  handleFetchRecentTransactionSuccess,
  handleFetchUserAccountSuccess,
  handleFetchUserCardSuccess,
  handleFetchUserInfoSuccess,
  USER_ACTION,
} from './action';

import { fetchUserInfo, APIResponse, fetchRecentTransaction, fetchUserCard, fetchUserAccount } from '@/apis';
import { TUserAccount, TUserCard, TUserInfo, TUserProfile } from '@/types';

export function* fetchUserInfoSaga() {
  try {
    const response: APIResponse<TUserInfo> = yield call(fetchUserInfo);
    yield put(handleFetchUserInfoSuccess(response.data));
  } catch (error) {
    console.error('fetch user info error', error);
  }
}

export function* fetchRecentTransactionSaga() {
  try {
    const response: APIResponse<TUserProfile[]> = yield call(fetchRecentTransaction);
    yield put(handleFetchRecentTransactionSuccess(response.data));
  } catch (error) {
    console.error('fetch recent transaction error', error);
  }
}

export function* fetchUserCardSaga() {
  try {
    const response: APIResponse<TUserCard[]> = yield call(fetchUserCard);
    yield put(handleFetchUserCardSuccess(response.data));
  } catch (error) {
    console.error('fetch user card error', error);
  }
}

export function* fetchUserAccountSaga() {
  try {
    const response: APIResponse<TUserAccount[]> = yield call(fetchUserAccount);
    yield put(handleFetchUserAccountSuccess(response.data));
  } catch (error) {
    console.error('fetch user account error', error);
  }
}

export function* userSaga() {
  yield takeLatest(USER_ACTION.FETCH_USER_INFO, fetchUserInfoSaga);
  yield takeLatest(USER_ACTION.FETCH_RECENT_TRANSACTION, fetchRecentTransactionSaga);
  yield takeLatest(USER_ACTION.FETCH_USER_CARD, fetchUserCardSaga);
  yield takeLatest(USER_ACTION.FETCH_USER_ACCOUNT, fetchUserAccountSaga);
}
