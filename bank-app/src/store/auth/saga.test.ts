import { put } from 'redux-saga/effects';
import { testSaga } from 'redux-saga-test-plan';

import { AUTH_ACTION, handleCheckAuthDone, handleLoginSuccess } from './action';
import { checkAuthSaga, authSaga, login } from './saga';

import { handleHideSplash } from '@/store/splash/action';
import { handleFetchRecentTransaction, handleFetchUserCard, handleFetchUserInfo } from '@/store/user/action';

describe('Auth Saga', () => {
  it('should handle checkAuthSaga', async () => {
    const localStorageMock = jest.spyOn(Storage.prototype, 'getItem').mockReturnValue('true');

    testSaga(checkAuthSaga)
      .next()
      .delay(1000)
      .next()
      .all([put(handleFetchUserInfo()), put(handleFetchRecentTransaction()), put(handleFetchUserCard())])
      .next()
      .put(handleCheckAuthDone({ isAuth: true }))
      .next()
      .put(handleHideSplash())
      .next()
      .isDone();

    localStorageMock.mockRestore();
  });

  it('should handle login', async () => {
    testSaga(login)
      .next()
      .all([put(handleFetchUserInfo()), put(handleFetchRecentTransaction()), put(handleFetchUserCard())])
      .next()
      .put(handleLoginSuccess())
      .finish();
  });

  it('should listen for all expected actions', async () => {
    testSaga(authSaga)
      .next()
      .takeLatest(AUTH_ACTION.CHECK_AUTH, checkAuthSaga)
      .next()
      .takeLatest(AUTH_ACTION.LOGIN_REQUEST, login)
      .finish();
  });
});
