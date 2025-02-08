import { handleFetchUserInfo, handleFetchUserInfoSuccess, USER_ACTION } from './action';

import { UserInfo } from '@/types';

describe('User Actions', () => {
  it('should create an action to handle USER_ACTION.FETCH_USER_INFO', () => {
    const expectedAction = { type: USER_ACTION.FETCH_USER_INFO };
    expect(handleFetchUserInfo()).toEqual(expectedAction);
  });

  it('should create an action to handle USER_ACTION.FETCH_USER_INFO_SUCCESS', () => {
    const payload: UserInfo = { name: 'name', greetingMessage: 'greeting message' };
    const expectedAction = { type: USER_ACTION.FETCH_USER_INFO_SUCCESS, payload };
    expect(handleFetchUserInfoSuccess(payload)).toEqual(expectedAction);
  });
});
