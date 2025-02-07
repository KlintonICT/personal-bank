import { testSaga } from 'redux-saga-test-plan';

import { AUTH_ACTION, handleCheckAuthDone } from './action';
import { checkAuthSaga, authSaga } from './saga';

import { handleHideSplash } from '@/store/splash/action';

describe('Auth Saga', () => {
  it('should handle checkAuthSaga', async () => {
    const localStorageMock = jest.spyOn(Storage.prototype, 'getItem').mockReturnValue('true');

    testSaga(checkAuthSaga)
      .next()
      .delay(1000)
      .next()
      .put(handleCheckAuthDone({ isAuth: true }))
      .next()
      .put(handleHideSplash())
      .next()
      .isDone();

    localStorageMock.mockRestore();
  });

  it('should trigger checkAuthSaga on CHECK_AUTH action', () => {
    testSaga(authSaga).next().takeLatest(AUTH_ACTION.CHECK_AUTH, checkAuthSaga).finish();
  });
});
