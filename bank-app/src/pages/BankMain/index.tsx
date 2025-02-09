import { UserProfiles } from '@/components/UserProfiles';
import { useAppSelector } from '@/store';

const BankMain = () => {
  const {
    userInfo,
    recentTransaction: { userProfiles },
  } = useAppSelector((state) => state.user);

  return (
    <>
      <header className='header'>
        <a href='#' className='header__lft header__menu'>
          <span className='blind'>Menu</span>
        </a>
        <button type='button' className='header__rgt header__cxl'>
          <span className='blind'>Cancel</span>
        </button>
      </header>

      <main className='container container--main'>
        <div className='content_wrap'>
          <div className='main-top'>
            <h1 className='main-top__tit main-loading main-loading--order1'>{userInfo?.greetingMessage}</h1>
          </div>

          <div className='rctly__wrap main-loading main-loading--order5'>
            <UserProfiles profiles={userProfiles} />
          </div>
        </div>
      </main>
    </>
  );
};

export default BankMain;
