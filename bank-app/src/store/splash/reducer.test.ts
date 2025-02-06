import { SPLASH_ACTION } from './action';
import { splashReducer } from './reducer';

describe('Splash Reducer', () => {
  it('should return the initial state', () => {
    expect(splashReducer(undefined, { type: '@@INIT' })).toEqual({ showSplash: true });
  });

  it('should handle SPLASH_ACTION.HIDE', () => {
    const action = { type: SPLASH_ACTION.HIDE };
    const expectedState = { showSplash: false };
    expect(splashReducer({ showSplash: true }, action)).toEqual(expectedState);
  });

  it('should return the current state for unknown action types', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    const currentState = { showSplash: true };
    expect(splashReducer(currentState, action)).toEqual(currentState);
  });
});
