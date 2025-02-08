import { testSaga } from 'redux-saga-test-plan';

import { handleFetchUserInfoSuccess, USER_ACTION } from './action';
import { fetchUserInfoSaga, userSaga } from './saga';

import { fetchUserInfo } from '@/apis';

jest.mock('@/apis', () => ({
  fetchUserInfo: jest.fn(),
}));

describe('fetchUserInfoSaga', () => {
  it('should call fetchUserInfo API and dispatch success action', () => {
    const resData = { data: { name: 'Clare', greetingMessage: 'Have a nice day Clare' } };

    testSaga(fetchUserInfoSaga)
      .next()
      .call(fetchUserInfo)
      .next(resData)
      .put(handleFetchUserInfoSuccess(resData.data))
      .next()
      .isDone();
  });

  it('should call fetchUserInfo API and throw error', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

    testSaga(fetchUserInfoSaga).next().call(fetchUserInfo).throw(new Error('fail')).next();
    expect(consoleErrorSpy).toHaveBeenCalledWith('fetch user info error', expect.any(Error));

    consoleErrorSpy.mockRestore();
  });

  it('should listen for all expected actions', async () => {
    testSaga(userSaga).next().takeLatest(USER_ACTION.FETCH_USER_INFO, fetchUserInfoSaga);
  });
});
