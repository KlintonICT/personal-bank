import { FC } from 'react';

import { TBanner } from '@/types';

interface BannerProps {
  data: TBanner;
}

export const Banner: FC<BannerProps> = ({ data }) => (
  <a href='#' className='main-prod'>
    <span className='main-prod__cms-ico'>
      <img src={data.image} alt={`${data.title}-banner`} />
    </span>
    <strong className='main-prod__tit'>{data.title}</strong>
    <p className='main-prod__dsc'>{data.description}</p>
  </a>
);
