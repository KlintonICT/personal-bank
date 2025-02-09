import { FC } from 'react';

import { UserProfile } from '@/types';

export interface UserProfilesProps {
  profiles: UserProfile[];
}

export const UserProfiles: FC<UserProfilesProps> = ({ profiles }) => (
  <ul className='rctly__lst'>
    {profiles.map((item) => (
      <li className='rctly__item' key={item.name}>
        <a href='#' className='rctly__link'>
          <span className='rctly__thumb'>
            <img src={item.image} alt={`${item.name}-image`} />
          </span>
          <span className='rctly__name'>{item.name}</span>
        </a>
      </li>
    ))}
  </ul>
);
