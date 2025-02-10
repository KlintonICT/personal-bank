import { FC } from 'react';

import { TBanner } from '@/types';

export const Banner: FC<TBanner> = ({ title, image, description }) => (
  <a href='#' className='main-prod'>
    <span className='main-prod__cms-ico'>
      <img src={image} alt={`${title}-banner`} />
    </span>
    <strong className='main-prod__tit'>{title}</strong>
    <p className='main-prod__dsc'>{description}</p>
  </a>
);
