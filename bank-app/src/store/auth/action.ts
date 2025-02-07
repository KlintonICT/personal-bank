export const AUTH_ACTION = {
  CHECK_AUTH: 'CHECK_AUTH',
  CHECK_AUTH_DONE: 'CHECK_AUTH_DONE',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
};

export type CHECK_AUTH_DONE_PAYLOAD = {
  isAuth: boolean;
};
export const handleCheckAuth = () => ({ type: AUTH_ACTION.CHECK_AUTH });
export const handleCheckAuthDone = (payload: CHECK_AUTH_DONE_PAYLOAD) => ({
  type: AUTH_ACTION.CHECK_AUTH_DONE,
  payload,
});

export const handleLogin = () => ({ type: AUTH_ACTION.LOGIN_REQUEST });
export const handleLoginSuccess = () => ({ type: AUTH_ACTION.LOGIN_SUCCESS });

export type AUTH_ACTION_TYPE = {
  type: string;
  payload?: CHECK_AUTH_DONE_PAYLOAD;
};
