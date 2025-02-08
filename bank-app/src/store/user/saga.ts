import { put, call, takeLatest } from 'redux-saga/effects';

import { handleFetchUserInfoSuccess, USER_ACTION } from './action';

import { fetchUserInfo, APIResponse } from '@/apis';
import { UserInfo } from '@/types';

export function* fetchUserInfoSaga() {
  try {
    const response: APIResponse<UserInfo> = yield call(fetchUserInfo);
    yield put(handleFetchUserInfoSuccess(response.data));
  } catch (error) {
    console.error('fetch user info error', error);
  }
}

export function* userSaga() {
  yield takeLatest(USER_ACTION.FETCH_USER_INFO, fetchUserInfoSaga);
}
