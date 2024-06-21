import { HTMLProps } from 'react';
import clsx from 'clsx';

import s from './index.module.scss';

export const Main = ({
  children,
  className,
  ...props
}: HTMLProps<HTMLElement>) => (
  <main className={clsx(className, s.root)} {...props}>
    {children}
  </main>
);
