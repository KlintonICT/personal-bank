import { AUTH_ACTION, handleCheckAuth, handleCheckAuthDone, CHECK_AUTH_DONE_PAYLOAD } from './action';

describe('Auth Actions', () => {
  it('should create an action to check auth', () => {
    const expectedAction = { type: AUTH_ACTION.CHECK_AUTH };
    expect(handleCheckAuth()).toEqual(expectedAction);
  });

  it('should create an action to handle check auth done', () => {
    const payload: CHECK_AUTH_DONE_PAYLOAD = { isAuth: true };
    const expectedAction = {
      type: AUTH_ACTION.CHECK_AUTH_DONE,
      payload,
    };
    expect(handleCheckAuthDone(payload)).toEqual(expectedAction);
  });
});
