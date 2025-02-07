import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { authReducer } from './auth/reducer';
import { authSaga } from './auth/saga';
import { splashReducer } from './splash/reducer';

function* rootSaga() {
  yield all([authSaga()]);
}

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: {
    splash: splashReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store };
