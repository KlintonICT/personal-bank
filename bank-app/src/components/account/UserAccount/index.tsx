import { FC } from 'react';

import { UserAccountType } from '@/constants';
import { TUserAccount } from '@/types';
import { formatCurrency } from '@/utils';

const AccountFlags: FC<{ flags: string[] }> = ({ flags }) => (
  <>
    {flags.map((item) => (
      <span className='main-acc__flag' key={item}>
        {item}
      </span>
    ))}
  </>
);

const AccountProgress: FC<{ progress: number }> = ({ progress }) => (
  <div className='main-acc__circle'>
    <svg className='graph-bar' width='100%' height='100%' viewBox='0 0 42 42'>
      <circle
        cx='21'
        cy='21'
        r='15.91549430918954'
        fill='transparent'
        stroke='rgba(0,0,0,0.07)'
        strokeWidth='1.5'
      ></circle>
      <circle
        className='gauge'
        cx='21'
        cy='21'
        r='15.91549430918954'
        fill='transparent'
        stroke='#fff'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeDashoffset='25'
        style={{ strokeDasharray: `${progress} ${100 - progress}` }}
      ></circle>
    </svg>
    <div className='main-acc__num' data-testid='acc-percent'>
      <span className='percent'>{progress}</span>
      <span className='unit'>%</span>
    </div>
  </div>
);

const AccountDetails: FC<Pick<TUserAccount, 'type' | 'accountNumber' | 'issuer'>> = ({
  type,
  accountNumber,
  issuer,
}) => {
  const prefixMap = {
    [UserAccountType.SAVING_ACCOUNT]: 'Smart account ',
    [UserAccountType.GOAL_SAVING_ACCOUNT]: 'Goal driven savings ',
    [UserAccountType.CREDIT_LOAN]: 'Credit Loan ',
  };

  return (
    <div className='main-acc__bottom'>
      <span className='main-acc__detail'>{(prefixMap[type] || '') + accountNumber}</span>
      {type !== UserAccountType.CREDIT_LOAN && <span className='main-acc__detail'>Powered by {issuer}</span>}
    </div>
  );
};

export const UserAccount: FC<TUserAccount> = ({
  color,
  title,
  amount,
  currency,
  flags,
  progress,
  type,
  accountNumber,
  issuer,
}) => (
  <div className='main-acc is-small' style={{ backgroundColor: color }}>
    <div className='main-acc__top'>
      <h2 className='main-acc__name'>{title}</h2>
      <span className='main-acc__amount'>{formatCurrency(amount, currency)}</span>
      {flags && flags.length > 0 && <AccountFlags flags={flags} />}
    </div>

    <button type='button' className='main-acc__more main-acc__more--small'>
      <span className='blind'>More Action</span>
    </button>

    <AccountDetails {...{ type, accountNumber, issuer }} />

    {progress ? <AccountProgress progress={progress} /> : <a href='#' />}
  </div>
);
