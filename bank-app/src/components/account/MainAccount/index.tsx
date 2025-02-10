import clsx from 'clsx';
import { FC } from 'react';

import { LinkIcon } from '@/components/common';
import { TUserAccount } from '@/types';
import { formatCurrency } from '@/utils';

interface MainAccountProps extends TUserAccount {
  wrapperClassName: string;
}

export const MainAccount: FC<MainAccountProps> = ({
  title,
  amount,
  currency,
  accountNumber,
  issuer,
  wrapperClassName,
}) => (
  <div className={clsx('main-acc main-acc--large', wrapperClassName)}>
    <div className='main-acc__top'>
      <h2 className='main-acc__name'>{title}</h2>
      <span className='main-acc__amount'>{formatCurrency(amount, currency)}</span>
      <span className='main-acc__detail main-acc__detail--num'>{`Smart account ${accountNumber}`}</span>
      <span className='main-acc__detail'>{`Powered by ${issuer}`}</span>
    </div>

    <button type='button' className='main-acc__more'>
      <span className='blind'>More Action</span>
    </button>

    <div className='main-acc__bottom'>
      <div className='main-acc__link__box'>
        <div className='main-acc__link__item'>
          <LinkIcon link='#' name='withdrawal' text='Withdrawal' />
          <LinkIcon link='#' name='qr' text='QR scan' />
          <LinkIcon link='#' name='addmoney' text='Add money' />
        </div>
      </div>
    </div>
  </div>
);
