import clsx from 'clsx';

import styles from './index.module.scss';

interface Props {
  type?: 'short' | 'section' | 'header';
  className?: string;
}

export const Line = ({ type = 'section', className }: Props) => (
  <div className={clsx(styles.root, styles[type], className)}>
    <div className={styles.gray} />
    <div className={styles.yellow} />
  </div>
);
