import { UserAccount, UserCard, UserInfo, UserProfile } from '@/types';

export const USER_ACTION = {
  FETCH_USER_INFO: 'FETCH_USER_INFO',
  FETCH_USER_INFO_SUCCESS: 'FETCH_USER_INFO_SUCCESS',
  FETCH_RECENT_TRANSACTION: 'FETCH_RECENT_TRANSACTION',
  FETCH_RECENT_TRANSACTION_SUCCESS: 'FETCH_RECENT_TRANSACTION_SUCCESS',
  FETCH_USER_CARD: 'FETCH_USER_CARD',
  FETCH_USER_CARD_SUCCESS: 'FETCH_USER_CARD_SUCCESS',
  FETCH_USER_ACCOUNT: 'FETCH_USER_ACCOUNT',
  FETCH_USER_ACCOUNT_SUCCESS: 'FETCH_USER_ACCOUNT_SUCCESS',
};

export const handleFetchUserInfo = () => ({ type: USER_ACTION.FETCH_USER_INFO });
export const handleFetchUserInfoSuccess = (payload: UserInfo) => ({
  type: USER_ACTION.FETCH_USER_INFO_SUCCESS,
  payload,
});

export const handleFetchRecentTransaction = () => ({ type: USER_ACTION.FETCH_RECENT_TRANSACTION });
export const handleFetchRecentTransactionSuccess = (payload: UserProfile[]) => ({
  type: USER_ACTION.FETCH_RECENT_TRANSACTION_SUCCESS,
  payload,
});

export const handleFetchUserCard = () => ({ type: USER_ACTION.FETCH_USER_CARD });
export const handleFetchUserCardSuccess = (payload: UserCard[]) => ({
  type: USER_ACTION.FETCH_USER_CARD_SUCCESS,
  payload,
});

export const handleFetchUserAccount = () => ({ type: USER_ACTION.FETCH_USER_ACCOUNT });
export const handleFetchUserAccountSuccess = (payload: UserAccount[]) => ({
  type: USER_ACTION.FETCH_USER_ACCOUNT_SUCCESS,
  payload,
});

export type USER_ACTION_TYPE = {
  type: string;
  payload?: any;
};
