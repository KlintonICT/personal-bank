import { USER_ACTION } from './action';
import { userReducer } from './reducer';

import { UserAccount, UserAccountType, UserCard, UserCardStatus, UserInfo, UserProfile } from '@/types';

describe('User Reducer', () => {
  const initState = {
    userInfo: null,
    recentTransaction: {
      userProfiles: [],
    },
    userCards: [],
    userAccount: {
      accounts: [],
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

  it('should handle USER_ACTION.FETCH_USER_CARD_SUCCESS', () => {
    const payload: UserCard[] = [
      {
        name: 'My Salary',
        status: UserCardStatus.IN_PROGRESS,
        issuer: 'TestLab',
        color: '#00a1e2',
      },
    ];
    const action = { type: USER_ACTION.FETCH_USER_CARD_SUCCESS, payload };
    const expectedState = { ...initState, userCards: payload };
    expect(userReducer(initState, action)).toEqual(expectedState);
  });

  it('should handle USER_ACTION.FETCH_USER_ACCOUNT_SUCCESS', () => {
    const payload: UserAccount[] = [
      {
        type: UserAccountType.SAVING_ACCOUNT,
        title: 'Saving Account',
        amount: 62000.0,
        currency: 'THB',
        accountNumber: '568-2-81740-9',
        issuer: 'TestLab',
        color: '#24c875',
        isMainAccount: true,
      },
    ];
    const action = { type: USER_ACTION.FETCH_USER_ACCOUNT_SUCCESS, payload };
    const expectedState = {
      ...initState,
      userAccount: {
        mainAccount: payload[0],
        accounts: payload,
      },
    };
    expect(userReducer(initState, action)).toEqual(expectedState);
  });
});
