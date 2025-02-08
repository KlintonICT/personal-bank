import { UserInfo } from '@/types';

export const USER_ACTION = {
  FETCH_USER_INFO: 'FETCH_USER_INFO',
  FETCH_USER_INFO_SUCCESS: 'FETCH_USER_INFO_SUCCESS',
};

export const handleFetchUserInfo = () => ({ type: USER_ACTION.FETCH_USER_INFO });
export const handleFetchUserInfoSuccess = (payload: UserInfo) => ({
  type: USER_ACTION.FETCH_USER_INFO_SUCCESS,
  payload,
});

export type USER_ACTION_TYPE = {
  type: string;
  payload?: any;
};
