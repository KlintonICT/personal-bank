import { MainAccount, UserAccount } from '@/components/account';
import { Banner } from '@/components/Banner';
import { UserCards } from '@/components/UserCards';
import { UserProfiles } from '@/components/UserProfiles';
import { useAppSelector } from '@/store';

const BankMain = () => {
  const {
    userInfo,
    recentTransaction: { userProfiles },
    userCards,
    userAccount: { mainAccount, accounts },
  } = useAppSelector((state) => state.user);
  const { banners } = useAppSelector((state) => state.banner);

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

          {mainAccount && <MainAccount data={mainAccount} wrapperClassName='main-loading main-loading--order3' />}

          <div className='rctly__wrap main-loading main-loading--order5'>
            <UserProfiles profiles={userProfiles} />
          </div>

          <div className='debit-swipe__wrap main-loading main-loading--order6'>
            <UserCards cards={userCards} />
          </div>

          {accounts.map((item) => (
            <UserAccount data={item} key={item.title} />
          ))}

          {banners.length > 0 && <Banner {...banners[0]} />}

          <div className='main-tb'>
            <a href='#' className='link-to'>
              Total Balance
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default BankMain;
