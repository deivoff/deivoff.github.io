import clsx from 'clsx';
import { ElementType, HTMLProps } from 'react';

import styles from './index.module.scss';

interface Props<T extends ElementType = 'p'> extends HTMLProps<T> {
  asComponent?: ElementType;
}

export const Text = <T extends ElementType = 'p'>({
  asComponent: Component = 'p',
  children,
  className,
  ...props
}: Props<T>) => (
  <Component className={clsx(styles.root, className)} {...props}>
    {children}
  </Component>
);
