import clsx from 'clsx';

import styles from './index.module.scss';

interface Props {
  size?: 'medium' | 'large';
  className?: string;
}

export const Circle = ({ size = 'medium', className }: Props) => (
  <div className={clsx(styles[size], styles.root, className)} />
);
