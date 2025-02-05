import { useState } from 'react';
import { Routes, Route } from 'react-router';

import SplashScreen from '@/pages/SplashScreen';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  const onCloseSplashScreen = () => {
    setShowSplash(false);
  };

  return (
    <div className='wrap'>
      {showSplash ? (
        <SplashScreen onFinish={onCloseSplashScreen} />
      ) : (
        <Routes>
          <Route path='/' element={<div>Bank Main</div>} />
          <Route path='/pin' element={<div>Pin</div>} />
          <Route path='*' element={<div>Not Found</div>} />
        </Routes>
      )}
    </div>
  );
};

export default App;
