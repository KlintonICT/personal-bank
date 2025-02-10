import { call, put, takeLatest } from 'redux-saga/effects';

import { BANNER_ACTION, handleFetchBannerSuccess } from './action';

import { APIResponse, fetchBanner } from '@/apis';
import { TBanner } from '@/types';

export function* fetchBannerSaga() {
  try {
    const response: APIResponse<TBanner[]> = yield call(fetchBanner);
    yield put(handleFetchBannerSuccess(response.data));
  } catch (error) {
    console.error('fetch banner error', error);
  }
}

export function* bannerSaga() {
  yield takeLatest(BANNER_ACTION.FETCH_BANNER, fetchBannerSaga);
}
