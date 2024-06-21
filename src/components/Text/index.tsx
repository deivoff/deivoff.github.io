import { ElementType, HTMLProps } from 'react';
import clsx from 'clsx';

import s from './index.module.scss';

interface Props<T extends ElementType = 'p'> extends HTMLProps<T> {
  asComponent?: ElementType;
}

export const Text = <T extends ElementType = 'p'>({
  asComponent: Component = 'p',
  children,
  className,
  ...props
}: Props<T>) => (
  <Component className={clsx(s.root, className)} {...props}>
    {children}
  </Component>
);
