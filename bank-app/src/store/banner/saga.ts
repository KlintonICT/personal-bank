import { call, put, takeLatest } from 'redux-saga/effects';

import { BANNER_ACTION, handleFetchBannerSuccess } from './action';

import { APIResponse, fetchBanner } from '@/apis';
import { Banner } from '@/types';

export function* fetchBannerSaga() {
  try {
    const response: APIResponse<Banner[]> = yield call(fetchBanner);
    yield put(handleFetchBannerSuccess(response.data));
  } catch (error) {
    console.error('fetch banner error', error);
  }
}

export function* bannerSaga() {
  yield takeLatest(BANNER_ACTION.FETCH_BANNER, fetchBannerSaga);
}
