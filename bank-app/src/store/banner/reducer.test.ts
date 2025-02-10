import { BANNER_ACTION } from './action';
import { bannerReducer } from './reducer';

import { TBanner } from '@/types';

describe('Banner Reducer', () => {
  const initState = { banners: [] };

  it('should return the initial state', () => {
    expect(bannerReducer(undefined, { type: '@@INIT' })).toEqual(initState);
  });

  it('should handle BANNER_ACTION.FETCH_BANNER_SUCCESS', () => {
    const payload: TBanner[] = [
      {
        title: 'Want some money?',
        description: "You can start apply 'Clare'",
        image: 'https://dummyimage.com/54x54/999/fff',
      },
    ];
    const action = { type: BANNER_ACTION.FETCH_BANNER_SUCCESS, payload };
    const expectedState = { ...initState, banners: payload };
    expect(bannerReducer(initState, action)).toEqual(expectedState);
  });

  it('should return the current state for unknown action types', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    expect(bannerReducer(initState, action)).toEqual(initState);
  });
});
