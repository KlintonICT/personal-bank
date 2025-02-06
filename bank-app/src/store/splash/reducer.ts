import { SPLASH_ACTION, SPLASH_ACTION_TYPE } from './action';

type InitSplashState = {
  showSplash: boolean;
};

const initialState: InitSplashState = {
  showSplash: true,
};

export const splashReducer = (state = initialState, action: SPLASH_ACTION_TYPE) => {
  switch (action.type) {
    case SPLASH_ACTION.HIDE:
      return { ...state, showSplash: false };
    default:
      return state;
  }
};
