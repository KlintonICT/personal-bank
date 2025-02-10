import { CSSProperties, FC } from 'react';

import { TUserCard, UserCardStatus, UserCardStatusText } from '@/types';

interface UserCardsProps {
  cards: TUserCard[];
}

export const UserCards: FC<UserCardsProps> = ({ cards }) => {
  const totalCards = cards.length;
  const MAX_CARD_DISPLAY = 4;

  const statusOrNumber = (status: UserCardStatus, number?: string): string => {
    if (number) return number.replace(/^(\d{4} \d{2})\d{2} (\d{4}) (\d{4})$/, '$1•• •••• $3');
    return UserCardStatusText[status];
  };

  return (
    <div className='debit-swipe__inner'>
      <div className='debit-swipe__lst' style={{ width: 1595 }}>
        {cards.slice(0, MAX_CARD_DISPLAY).map((item) => (
          <a
            href='#'
            className='debit-swipe__item'
            style={
              {
                backgroundColor: item.color,
                ...(item.borderColor && { '--border-color': item.borderColor }),
                ...(item.color === '#ffffff' && { color: '#97999e' }),
              } as CSSProperties
            }
            key={item.name}
          >
            <strong className='debit-swipe__name'>{item.name}</strong>
            <span className='debit-swipe__etc'>{statusOrNumber(item.status, item.number)}</span>
            <span className='debit-swipe__issue'>{item.issuer}</span>
          </a>
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
