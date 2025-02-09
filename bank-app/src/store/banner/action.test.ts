import { BANNER_ACTION, handleFetchBanner, handleFetchBannerSuccess } from './action';

import { Banner } from '@/types';

describe('Banner Actions', () => {
  it('should create an action to handle BANNER_ACTION.FETCH_USER_INFO', () => {
    const expectedAction = { type: BANNER_ACTION.FETCH_BANNER };
    expect(handleFetchBanner()).toEqual(expectedAction);
  });

  it('should create an action to handle BANNER_ACTION.FETCH_BANNER_SUCCESS', () => {
    const payload: Banner[] = [
      {
        title: 'Want some money?',
        description: "You can start apply 'Clare'",
        image: 'https://dummyimage.com/54x54/999/fff',
      },
    ];
    const expectedAction = { type: BANNER_ACTION.FETCH_BANNER_SUCCESS, payload };
    expect(handleFetchBannerSuccess(payload)).toEqual(expectedAction);
  });
});
