import { testSaga } from 'redux-saga-test-plan';

import { BANNER_ACTION, handleFetchBannerSuccess } from './action';
import { bannerSaga, fetchBannerSaga } from './saga';

import { fetchBanner } from '@/apis';

jest.mock('@/apis', () => ({
  fetchBanner: jest.fn(),
}));

describe('Banner Saga', () => {
  it('should call fetchBanner API and dispatch success action', () => {
    const resData = {
      data: [
        {
          title: 'Want some money?',
          description: "You can start apply 'Clare'",
          image: 'https://dummyimage.com/54x54/999/fff',
        },
      ],
    };

    testSaga(fetchBannerSaga)
      .next()
      .call(fetchBanner)
      .next(resData)
      .put(handleFetchBannerSuccess(resData.data))
      .next()
      .isDone();
  });

  it('should call fetchBanner API and throw error', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

    testSaga(fetchBannerSaga).next().call(fetchBanner).throw(new Error('fail')).next();
    expect(consoleErrorSpy).toHaveBeenCalledWith('fetch banner error', expect.any(Error));

    consoleErrorSpy.mockRestore();
  });

  it('should listen for all expected actions', () => {
    testSaga(bannerSaga).next().takeLatest(BANNER_ACTION.FETCH_BANNER, fetchBannerSaga);
  });
});
