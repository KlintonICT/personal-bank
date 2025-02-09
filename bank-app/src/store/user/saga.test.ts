import { testSaga } from 'redux-saga-test-plan';

import { handleFetchRecentTransactionSuccess, handleFetchUserInfoSuccess, USER_ACTION } from './action';
import { fetchRecentTransactionSaga, fetchUserInfoSaga, userSaga } from './saga';

import { fetchRecentTransaction, fetchUserInfo } from '@/apis';

jest.mock('@/apis', () => ({
  fetchUserInfo: jest.fn(),
  fetchRecentTransaction: jest.fn(),
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

  it('should call fetchRecentTransaction API and dispatch success action', () => {
    const resData = {
      data: [
        {
          name: 'Emily',
          image: 'https://dummyimage.com/54x54/999/fff',
          isBank: false,
        },
      ],
    };

    testSaga(fetchRecentTransactionSaga)
      .next()
      .call(fetchRecentTransaction)
      .next(resData)
      .put(handleFetchRecentTransactionSuccess(resData.data))
      .next()
      .isDone();
  });

  it('should call fetchRecentTransaction API and throw error', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

    testSaga(fetchRecentTransactionSaga).next().call(fetchRecentTransaction).throw(new Error('fail')).next();
    expect(consoleErrorSpy).toHaveBeenCalledWith('fetch recent transaction error', expect.any(Error));

    consoleErrorSpy.mockRestore();
  });

  it('should listen for all expected actions', async () => {
    testSaga(userSaga)
      .next()
      .takeLatest(USER_ACTION.FETCH_USER_INFO, fetchUserInfoSaga)
      .next()
      .takeLatest(USER_ACTION.FETCH_RECENT_TRANSACTION, fetchRecentTransactionSaga)
      .finish();
  });
});
