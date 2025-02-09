import { testSaga } from 'redux-saga-test-plan';

import {
  handleFetchRecentTransactionSuccess,
  handleFetchUserAccountSuccess,
  handleFetchUserCardSuccess,
  handleFetchUserInfoSuccess,
  USER_ACTION,
} from './action';
import {
  fetchRecentTransactionSaga,
  fetchUserAccountSaga,
  fetchUserCardSaga,
  fetchUserInfoSaga,
  userSaga,
} from './saga';

import { fetchRecentTransaction, fetchUserAccount, fetchUserCard, fetchUserInfo } from '@/apis';
import { UserCardStatus } from '@/types';

jest.mock('@/apis', () => ({
  fetchUserInfo: jest.fn(),
  fetchRecentTransaction: jest.fn(),
  fetchUserCard: jest.fn(),
  fetchUserAccount: jest.fn(),
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

  it('should call fetchUserCard API and dispatch success action', () => {
    const resData = {
      data: [
        {
          name: 'My Salary',
          status: UserCardStatus.IN_PROGRESS,
          issuer: 'TestLab',
          color: '#00a1e2',
        },
      ],
    };

    testSaga(fetchUserCardSaga)
      .next()
      .call(fetchUserCard)
      .next(resData)
      .put(handleFetchUserCardSuccess(resData.data))
      .next()
      .isDone();
  });

  it('should call fetchUserCard API and throw error', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

    testSaga(fetchUserCardSaga).next().call(fetchUserCard).throw(new Error('fail')).next();
    expect(consoleErrorSpy).toHaveBeenCalledWith('fetch user card error', expect.any(Error));

    consoleErrorSpy.mockRestore();
  });

  it('should call fetchUserAccount API and dispatch success action', () => {
    const resData = {
      data: [
        {
          type: 'saving-account',
          amount: 62000.0,
          currency: 'THB',
          accountNumber: '568-2-81740-9',
          issuer: 'TestLab',
          color: '#24c875',
          isMainAccount: true,
        },
      ],
    };

    testSaga(fetchUserAccountSaga)
      .next()
      .call(fetchUserAccount)
      .next(resData)
      .put(handleFetchUserAccountSuccess(resData.data))
      .next()
      .isDone();
  });

  it('should call fetchUserAccount API and throw error', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

    testSaga(fetchUserAccountSaga).next().call(fetchUserAccount).throw(new Error('fail')).next();
    expect(consoleErrorSpy).toHaveBeenCalledWith('fetch user account error', expect.any(Error));

    consoleErrorSpy.mockRestore();
  });

  it('should listen for all expected actions', async () => {
    testSaga(userSaga)
      .next()
      .takeLatest(USER_ACTION.FETCH_USER_INFO, fetchUserInfoSaga)
      .next()
      .takeLatest(USER_ACTION.FETCH_RECENT_TRANSACTION, fetchRecentTransactionSaga)
      .next()
      .takeLatest(USER_ACTION.FETCH_USER_CARD, fetchUserCardSaga)
      .next()
      .takeLatest(USER_ACTION.FETCH_USER_ACCOUNT, fetchUserAccountSaga)
      .finish();
  });
});
