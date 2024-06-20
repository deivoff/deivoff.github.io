import clsx from 'clsx';
import { HTMLProps, ReactNode } from 'react';

import styles from './index.module.scss';

interface Props extends Omit<HTMLProps<HTMLDivElement>, 'children'> {
  leftColumn: ReactNode;
  rightColumn: ReactNode;
}

export const TwoColumns = ({
  rightColumn,
  leftColumn,
  className,
  ...props
}: Props) => (
  <div className={clsx(className, styles.root)} {...props}>
    <div className={styles.leftColumn}>{leftColumn}</div>
    <div className={styles.rightColumn}>{rightColumn}</div>
  </div>
);
