import { BANNER_ACTION, BANNER_ACTION_TYPE } from './action';

import { Banner } from '@/types';

type InitBannerState = {
  banners: Banner[];
};

const initialState: InitBannerState = {
  banners: [],
};

export const bannerReducer = (state = initialState, action: BANNER_ACTION_TYPE) => {
  switch (action.type) {
    case BANNER_ACTION.FETCH_BANNER_SUCCESS: {
      const payload: Banner[] = action.payload;
      return { ...state, banners: payload };
    }

    default:
      return state;
  }
};
