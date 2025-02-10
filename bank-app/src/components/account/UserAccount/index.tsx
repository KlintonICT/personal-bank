import { FC } from 'react';

import { UserAccountType } from '@/constants';
import { TUserAccount } from '@/types';
import { formatCurrency } from '@/utils';

interface UserAccountProps {
  data: TUserAccount;
}

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
    <div className='main-acc__num' data-testid="acc-percent">
      <span className='percent'>{progress}</span>
      <span className='unit'>%</span>
    </div>
  </div>
);

const AccountDetails: FC<{ data: TUserAccount }> = ({ data }) => {
  const accountNumberDetail = () => {
    const { type, accountNumber } = data;
    const prefixMap = {
      [UserAccountType.SAVING_ACCOUNT]: 'Smart account ',
      [UserAccountType.GOAL_SAVING_ACCOUNT]: 'Goal driven savings ',
      [UserAccountType.CREDIT_LOAN]: 'Credit Loan ',
    };

    return (prefixMap[type] || '') + accountNumber;
  };

  return (
    <div className='main-acc__bottom'>
      <span className='main-acc__detail'>{accountNumberDetail()}</span>
      {data.type !== UserAccountType.CREDIT_LOAN && <span className='main-acc__detail'>Powered by {data.issuer}</span>}
    </div>
  );
};

export const UserAccount: FC<UserAccountProps> = ({ data }) => (
  <div className='main-acc is-small' style={{ backgroundColor: data.color }}>
    <div className='main-acc__top'>
      <h2 className='main-acc__name'>{data.title}</h2>
      <span className='main-acc__amount'>{formatCurrency(data.amount, data.currency)}</span>
      {data.flags && data.flags.length > 0 && <AccountFlags flags={data.flags} />}
    </div>

    <button type='button' className='main-acc__more main-acc__more--small'>
      <span className='blind'>More Action</span>
    </button>

    <AccountDetails data={data} />

    {data.progress ? <AccountProgress progress={data.progress} /> : <a href='#' />}
  </div>
);
