import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: FC<SplashScreenProps> = ({ onFinish }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInitDate = async () => {
      const isAuth = localStorage.getItem('isAuth') === 'false';
      await new Promise((resolve) => setTimeout(resolve, 2000));
      onFinish();

      if (!isAuth) navigate('/pin');
    };

    fetchInitDate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='wrap'>
      <div className='splash'>
        <div className='loader' />
      </div>
    </div>
  );
};

export default SplashScreen;
