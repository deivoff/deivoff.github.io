import clsx from 'clsx';
import { HTMLProps } from 'react';

import styles from './index.module.scss';

export const Paper = ({
  className,
  children,
  ...props
}: HTMLProps<HTMLDivElement>) => (
  <div className={clsx(styles.root, className)} {...props}>
    {children}
  </div>
);
