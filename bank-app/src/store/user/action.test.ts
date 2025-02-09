import {
  handleFetchRecentTransaction,
  handleFetchRecentTransactionSuccess,
  handleFetchUserCard,
  handleFetchUserCardSuccess,
  handleFetchUserInfo,
  handleFetchUserInfoSuccess,
  USER_ACTION,
} from './action';

import { UserCard, UserCardStatus, UserInfo, UserProfile } from '@/types';

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

  it('should create an action to handle USER_ACTION.FETCH_RECENT_TRANSACTION', () => {
    const expectedAction = { type: USER_ACTION.FETCH_RECENT_TRANSACTION };
    expect(handleFetchRecentTransaction()).toEqual(expectedAction);
  });

  it('should create an action to handle USER_ACTION.FETCH_RECENT_TRANSACTION_SUCCESS', () => {
    const payload: UserProfile[] = [
      {
        name: 'Emily',
        image: 'https://dummyimage.com/54x54/999/fff',
        isBank: false,
      },
    ];
    const expectedAction = { type: USER_ACTION.FETCH_RECENT_TRANSACTION_SUCCESS, payload };
    expect(handleFetchRecentTransactionSuccess(payload)).toEqual(expectedAction);
  });

  it('should create an action to handle USER_ACTION.FETCH_USER_CARD', () => {
    const expectedAction = { type: USER_ACTION.FETCH_USER_CARD };
    expect(handleFetchUserCard()).toEqual(expectedAction);
  });

  it('should create an action to handle USER_ACTION.FETCH_USER_CARD_SUCCESS', () => {
    const payload: UserCard[] = [
      {
        name: 'My Salary',
        status: UserCardStatus.IN_PROGRESS,
        issuer: 'TestLab',
        color: '#00a1e2',
      },
    ];
    const expectedAction = { type: USER_ACTION.FETCH_USER_CARD_SUCCESS, payload };
    expect(handleFetchUserCardSuccess(payload)).toEqual(expectedAction);
  });
});
