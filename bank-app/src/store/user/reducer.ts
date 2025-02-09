import { USER_ACTION, USER_ACTION_TYPE } from './action';

import { UserInfo, UserProfile } from '@/types';

type InitUserState = {
  userInfo: UserInfo | null;
  recentTransaction: {
    userProfiles: UserProfile[];
  };
};

const initialState: InitUserState = {
  userInfo: null,
  recentTransaction: {
    userProfiles: [],
  },
};

export const userReducer = (state = initialState, action: USER_ACTION_TYPE) => {
  switch (action.type) {
    case USER_ACTION.FETCH_USER_INFO_SUCCESS: {
      const payload: UserInfo = action.payload;
      return {
        ...state,
        userInfo: payload,
      };
    }
    case USER_ACTION.FETCH_RECENT_TRANSACTION_SUCCESS: {
      const payload: UserProfile[] = action.payload;
      return {
        ...state,
        recentTransaction: {
          userProfiles: payload,
        },
      };
    }

    default:
      return state;
  }
};
