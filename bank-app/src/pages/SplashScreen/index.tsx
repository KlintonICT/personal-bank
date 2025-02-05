import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: FC<SplashScreenProps> = ({ onFinish }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInitData = async () => {
      const isAuth = localStorage.getItem('isAuth') === 'true';
      await new Promise((resolve) => setTimeout(resolve, 1000));
      onFinish();

      if (!isAuth) navigate('/pin');
    };

    fetchInitData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='splash'>
      <div className='loader' />
    </div>
  );
};

export default SplashScreen;
