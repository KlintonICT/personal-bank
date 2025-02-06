import { AUTH_ACTION, AUTH_ACTION_TYPE, CHECK_AUTH_DONE_PAYLOAD } from './action';

type InitAuthState = {
  isAuth: boolean;
};

const initialState: InitAuthState = {
  isAuth: false,
};

export const authReducer = (state = initialState, action: AUTH_ACTION_TYPE) => {
  switch (action.type) {
    case AUTH_ACTION.CHECK_AUTH_DONE: {
      const payload = action.payload as CHECK_AUTH_DONE_PAYLOAD;
      return { ...state, ...payload };
    }
    default:
      return state;
  }
};
