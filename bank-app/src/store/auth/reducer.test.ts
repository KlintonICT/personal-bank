import { AUTH_ACTION } from './action';
import { authReducer } from './reducer';

describe('Auth Reducer', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, { type: '@@INIT' })).toEqual({ isAuth: false });
  });

  it('should handle AUTH_ACTION.CHECK_AUTH_DONE', () => {
    const action = {
      type: AUTH_ACTION.CHECK_AUTH_DONE,
      payload: { isAuth: true },
    };
    const expectedState = { isAuth: true };
    expect(authReducer({ isAuth: false }, action)).toEqual(expectedState);
  });

  it('should handle AUTH_ACTION.LOGIN_SUCCESS', () => {
    const action = { type: AUTH_ACTION.LOGIN_SUCCESS };
    const newState = authReducer(undefined, action);

    expect(newState).toEqual({ isAuth: true });
  });

  it('should return the current state for unknown action types', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    const currentState = { isAuth: false };
    expect(authReducer(currentState, action)).toEqual(currentState);
  });
});
