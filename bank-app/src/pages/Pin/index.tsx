import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { useAppDispatch, useAppSelector } from '@/store';
import { handleLogin } from '@/store/auth/action';

const Pin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.auth);

  const [pinNumber, setPinNumber] = useState('');

  useEffect(() => {
    if (pinNumber.length === 6) {
      dispatch(handleLogin());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pinNumber]);

  useEffect(() => {
    if (isAuth) {
      setPinNumber('');
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  const handlePressKey = (value: string) => {
    if (pinNumber.length < 6) {
      setPinNumber((prev) => prev + value);
    }
  };

  const handleDeletePin = () => {
    setPinNumber((prev) => prev.slice(0, -1));
  };

  return (
    <main className='container container--pin-type'>
      <div className='pin'>
        <div className='pin__top'>
          <span className='pin__photo'>
            <img src='https://dummyimage.com/200x200/999/fff' alt='user-profile' />
          </span>
          <h1 className='pin__name'>Interview User</h1>
          <div className='pin__dots' data-testid='pin-dots'>
            {Array.from({ length: 6 }).map((_, index) => (
              <span key={`pin-${index}`} className={clsx('pin__dot', index < pinNumber.length && 'is-filled')} />
            ))}
          </div>
        </div>

        <div className='pin__btm'>
          <a href='#' className='pin__login'>
            Login with ID / Password
          </a>
          <span className='pin__kb'>Powered by TestLab</span>
          <div className='pin__keys'>
            {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num) => (
              <button
                type='button'
                className='pin__key'
                key={`key-${num}`}
                data-testid={`key-${num}`}
                onClick={() => handlePressKey(num)}
              >
                {num}
              </button>
            ))}
            <span className='pin__key pin__key--space'></span>
            <button type='button' className='pin__key' onClick={() => handlePressKey('0')} data-testid='key-0'>
              0
            </button>
            <button type='button' className='pin__key pin__key--del' onClick={handleDeletePin} data-testid='key-X'>
              <span>X</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Pin;
