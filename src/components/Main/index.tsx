import clsx from 'clsx';
import { HTMLProps } from 'react';

import styles from './index.module.scss';

export const Main = ({
  children,
  className,
  ...props
}: HTMLProps<HTMLElement>) => (
  <main className={clsx(className, styles.root)} {...props}>
    {children}
  </main>
);
