import { FC } from 'react';

import { TUserProfile } from '@/types';

interface UserProfilesProps {
  profiles: TUserProfile[];
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
