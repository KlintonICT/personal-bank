import { CSSProperties, FC } from 'react';

import { UserCardStatus, UserCardStatusText } from '@/constants';
import { TUserCard } from '@/types';

export const UserCard: FC<TUserCard> = ({ color, borderColor, name, status, number, issuer }) => {
  const statusOrNumber = (status: UserCardStatus, number?: string): string => {
    if (number) return number.replace(/^(\d{4} \d{2})\d{2} (\d{4}) (\d{4})$/, '$1•• •••• $3');
    return UserCardStatusText[status];
  };

  return (
    <a
      href='#'
      className='debit-swipe__item'
      style={
        {
          backgroundColor: color,
          ...(color === '#ffffff' && { color: '#97999e', '--border-color': '#f2f3f7' }),
          ...(borderColor && { '--border-color': borderColor }),
        } as CSSProperties
      }
    >
      <strong className='debit-swipe__name'>{name}</strong>
      <span className='debit-swipe__etc'>{statusOrNumber(status, number)}</span>
      <span className='debit-swipe__issue'>{issuer}</span>
    </a>
  );
};

interface UserCardsProps {
  cards: TUserCard[];
}

export const UserCards: FC<UserCardsProps> = ({ cards }) => {
  const totalCards = cards.length;
  const MAX_CARD_DISPLAY = 4;

  return (
    <div className='debit-swipe__inner'>
      <div className='debit-swipe__lst' style={{ width: 1595 }}>
        {cards.slice(0, MAX_CARD_DISPLAY).map((item) => (
          <UserCard {...item} key={item.name} />
        ))}

        {totalCards > MAX_CARD_DISPLAY && (
          <a href='#' className='debit-swipe__item debit-swipe__item--all'>
            See all
          </a>
        )}
      </div>
    </div>
  );
};
