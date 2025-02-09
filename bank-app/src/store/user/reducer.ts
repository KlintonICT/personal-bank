import { USER_ACTION, USER_ACTION_TYPE } from './action';

import { UserAccount, UserCard, UserInfo, UserProfile } from '@/types';

type InitUserState = {
  userInfo: UserInfo | null;
  recentTransaction: {
    userProfiles: UserProfile[];
  };
  userCards: UserCard[];
  userAccount: {
    mainAccount?: UserAccount;
    accounts: UserAccount[];
  };
};

const initialState: InitUserState = {
  userInfo: null,
  recentTransaction: {
    userProfiles: [],
  },
  userCards: [],
  userAccount: {
    accounts: [],
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
    case USER_ACTION.FETCH_USER_CARD_SUCCESS: {
      const payload: UserCard[] = action.payload;
      return {
        ...state,
        userCards: payload,
      };
    }
    case USER_ACTION.FETCH_USER_ACCOUNT_SUCCESS: {
      const payload: UserAccount[] = action.payload;
      const mainAccount = payload.find((item) => item.isMainAccount);

      return {
        ...state,
        userAccount: {
          mainAccount,
          accounts: payload,
        },
      };
    }

    default:
      return state;
  }
};
