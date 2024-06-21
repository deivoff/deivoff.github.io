import clsx from 'clsx';

import s from './index.module.scss';

interface Props {
  size?: 'medium' | 'large';
  className?: string;
}

export const Circle = ({ size = 'medium', className }: Props) => (
  <div className={clsx(s[size], s.root, className)} />
);
