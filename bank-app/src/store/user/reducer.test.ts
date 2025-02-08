import { USER_ACTION } from './action';
import { userReducer } from './reducer';

import { UserInfo } from '@/types';

describe('Splash Reducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, { type: '@@INIT' })).toEqual({ userInfo: null });
  });

  it('should handle USER_ACTION.FETCH_USER_INFO_SUCCESS', () => {
    const payload: UserInfo = { name: 'name', greetingMessage: 'greeting message' };
    const action = { type: USER_ACTION.FETCH_USER_INFO_SUCCESS, payload };
    const expectedState = { userInfo: payload };
    expect(userReducer({ userInfo: null }, action)).toEqual(expectedState);
  });
});
