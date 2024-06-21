import clsx from 'clsx';

import s from './index.module.scss';

interface Props {
  type?: 'short' | 'section' | 'header';
  className?: string;
}

export const Line = ({ type = 'section', className }: Props) => (
  <div className={clsx(s.root, s[type], className)}>
    <div className={s.gray} />
    <div className={s.yellow} />
  </div>
);
