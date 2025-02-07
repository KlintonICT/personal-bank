import {
  AUTH_ACTION,
  handleCheckAuth,
  handleCheckAuthDone,
  CHECK_AUTH_DONE_PAYLOAD,
  handleLogin,
  handleLoginSuccess,
} from './action';

describe('Auth Actions', () => {
  it('should create an action to handle AUTH_ACTION.CHECK_AUTH', () => {
    const expectedAction = { type: AUTH_ACTION.CHECK_AUTH };
    expect(handleCheckAuth()).toEqual(expectedAction);
  });

  it('should create an action to handle AUTH_ACTION.CHECK_AUTH_DONE', () => {
    const payload: CHECK_AUTH_DONE_PAYLOAD = { isAuth: true };
    const expectedAction = {
      type: AUTH_ACTION.CHECK_AUTH_DONE,
      payload,
    };
    expect(handleCheckAuthDone(payload)).toEqual(expectedAction);
  });

  it('should create an action to handle AUTH_ACTION.LOGIN_REQUEST', () => {
    const expectedAction = { type: AUTH_ACTION.LOGIN_REQUEST };
    expect(handleLogin()).toEqual(expectedAction);
  });

  it('should create an action to handle AUTH_ACTION.LOGIN_SUCCESS', () => {
    const expectedAction = { type: AUTH_ACTION.LOGIN_SUCCESS };
    expect(handleLoginSuccess()).toEqual(expectedAction);
  });
});
