import { TBanner } from '@/types';

export const BANNER_ACTION = {
  FETCH_BANNER: 'FETCH_BANNER',
  FETCH_BANNER_SUCCESS: 'FETCH_BANNER_SUCCESS',
};

export const handleFetchBanner = () => ({ type: BANNER_ACTION.FETCH_BANNER });
export const handleFetchBannerSuccess = (payload: TBanner[]) => ({ type: BANNER_ACTION.FETCH_BANNER_SUCCESS, payload });

export type BANNER_ACTION_TYPE = {
  type: string;
  payload?: any;
};
