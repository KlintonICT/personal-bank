import { FC } from 'react';

import { TUserProfile } from '@/types';

export const UserProfile: FC<TUserProfile> = ({ image, name }) => (
  <a href='#' className='rctly__link'>
    <span className='rctly__thumb'>
      <img src={image} alt={`${name}-image`} />
    </span>
    <span className='rctly__name'>{name}</span>
  </a>
);
