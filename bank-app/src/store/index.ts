import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { authReducer } from './auth/reducer';
import { authSaga } from './auth/saga';
import { bannerReducer } from './banner/reducer';
import { bannerSaga } from './banner/saga';
import { splashReducer } from './splash/reducer';
import { userReducer } from './user/reducer';
import { userSaga } from './user/saga';

function* rootSaga() {
  yield all([authSaga(), userSaga(), bannerSaga()]);
}

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: {
    splash: splashReducer,
    auth: authReducer,
    user: userReducer,
    banner: bannerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store };
