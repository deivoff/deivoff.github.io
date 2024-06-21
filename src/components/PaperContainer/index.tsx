import { HTMLProps } from 'react';
import clsx from 'clsx';

import s from './index.module.scss';

export const PaperContainer = ({
  className,
  children,
  ...props
}: HTMLProps<HTMLDivElement>) => (
  <div className={clsx(s.root, className)} {...props}>
    {children}
  </div>
);
