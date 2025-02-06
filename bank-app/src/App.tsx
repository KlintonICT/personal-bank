import { Routes, Route, useNavigate, useLocation } from 'react-router';

import Pin from '@/pages/Pin';

import { useAppDispatch, useAppSelector } from '@/store';
import { useEffect } from 'react';
import { handleCheckAuth } from '@/store/auth/action';

const SplashScreen = () => (
  <div className='splash'>
    <div className='loader' />
  </div>
);

const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const { showSplash, isAuth } = useAppSelector((state) => ({
    showSplash: state.splash.showSplash,
    isAuth: state.auth.isAuth,
  }));

  useEffect(() => {
    dispatch(handleCheckAuth());
  }, [dispatch]);

  useEffect(() => {
    if (!showSplash) {
      if (isAuth && pathname === '/pin') navigate('/');
      if (!isAuth && pathname !== '/pin') navigate('/pin');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth, showSplash]);

  return (
    <div className='wrap'>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <Routes>
          <Route path='/' element={<div>Bank Main</div>} />
          <Route path='/pin' element={<Pin />} />
          <Route path='*' element={<div>Not Found</div>} />
        </Routes>
      )}
    </div>
  );
};

export default App;
