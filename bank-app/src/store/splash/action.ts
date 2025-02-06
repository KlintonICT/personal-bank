export const SPLASH_ACTION = {
  HIDE: 'SPLASH_HIDE',
};

export const handleHideSplash = () => ({ type: SPLASH_ACTION.HIDE });

export type SPLASH_ACTION_TYPE = { type: string };
