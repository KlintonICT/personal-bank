import { USER_ACTION, USER_ACTION_TYPE } from './action';

import { UserInfo } from '@/types';

type InitUserState = {
  userInfo: UserInfo | null;
};

const initialState: InitUserState = {
  userInfo: null,
};

export const userReducer = (state = initialState, action: USER_ACTION_TYPE) => {
  switch (action.type) {
    case USER_ACTION.FETCH_USER_INFO_SUCCESS: {
      const payload = action.payload as UserInfo;
      return {
        ...state,
        userInfo: payload,
      };
    }

    default:
      return state;
  }
};
