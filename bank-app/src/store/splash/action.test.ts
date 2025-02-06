import { SPLASH_ACTION, handleHideSplash } from './action';

describe('Splash Actions', () => {
  it('should create an action to hide splash', () => {
    const expectedAction = { type: SPLASH_ACTION.HIDE };
    expect(handleHideSplash()).toEqual(expectedAction);
  });
});
