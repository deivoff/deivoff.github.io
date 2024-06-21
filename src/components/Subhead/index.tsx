import { ElementType, HTMLProps } from 'react';
import clsx from 'clsx';

import s from './index.module.scss';

interface Props<T extends ElementType = 'span'> extends HTMLProps<T> {
  asComponent?: ElementType;
  theme?: 'small' | 'medium';
}

export const Subhead = <T extends ElementType = 'span'>({
  asComponent: Component = 'span',
  theme = 'small',
  className,
  children,
  ...props
}: Props<T>) => (
  <Component className={clsx(s[theme], className)} {...props}>
    {children}
  </Component>
);
