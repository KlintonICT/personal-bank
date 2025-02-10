import clsx from 'clsx';
import { FC } from 'react';

const classMapping = {
  withdrawal: 'main-acc__link--withdrawal',
  qr: 'main-acc__link--qr',
  addmoney: 'main-acc__link--addmoney',
};

interface LinkIconProps {
  link: string;
  name: keyof typeof classMapping;
  text?: string;
}

export const LinkIcon: FC<LinkIconProps> = ({ link, name, text = '' }) => (
  <a href={link} className={clsx('main-acc__link', classMapping[name])}>
    {text}
  </a>
);
