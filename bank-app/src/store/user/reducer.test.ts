import { USER_ACTION } from './action';
import { userReducer } from './reducer';

import { UserInfo, UserProfile } from '@/types';

describe('Splash Reducer', () => {
  const initState = {
    userInfo: null,
    recentTransaction: {
      userProfiles: [],
    },
  };

  it('should return the initial state', () => {
    expect(userReducer(undefined, { type: '@@INIT' })).toEqual(initState);
  });

  it('should handle USER_ACTION.FETCH_USER_INFO_SUCCESS', () => {
    const payload: UserInfo = { name: 'name', greetingMessage: 'greeting message' };
    const action = { type: USER_ACTION.FETCH_USER_INFO_SUCCESS, payload };
    const expectedState = { ...initState, userInfo: payload };
    expect(userReducer(initState, action)).toEqual(expectedState);
  });

  it('should handle USER_ACTION.FETCH_RECENT_TRANSACTION_SUCCESS', () => {
    const payload: UserProfile[] = [
      {
        name: 'Emily',
        image: 'https://dummyimage.com/54x54/999/fff',
        isBank: false,
      },
    ];
    const action = { type: USER_ACTION.FETCH_RECENT_TRANSACTION_SUCCESS, payload };
    const expectedState = {
      ...initState,
      recentTransaction: {
        userProfiles: payload,
      },
    };
    expect(userReducer(initState, action)).toEqual(expectedState);
  });
});
