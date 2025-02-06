export const AUTH_ACTION = {
  CHECK_AUTH: 'CHECK_AUTH',
  CHECK_AUTH_DONE: 'CHECK_AUTH_DONE',
};

export type CHECK_AUTH_DONE_PAYLOAD = {
  isAuth: boolean;
};

export const handleCheckAuth = () => ({ type: AUTH_ACTION.CHECK_AUTH });
export const handleCheckAuthDone = (payload: CHECK_AUTH_DONE_PAYLOAD) => ({
  type: AUTH_ACTION.CHECK_AUTH_DONE,
  payload,
});

export type AUTH_ACTION_TYPE = {
  type: string;
  payload?: CHECK_AUTH_DONE_PAYLOAD;
};
