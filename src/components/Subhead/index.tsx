import clsx from 'clsx';
import { ElementType, HTMLProps } from 'react';

import styles from './index.module.scss';

interface Props<T extends ElementType = 'span'> extends HTMLProps<T> {
  asComponent?: ElementType;
}

export const Subhead = <T extends ElementType = 'span'>({
  asComponent: Component = 'span',
  className,
  children,
  ...props
}: Props<T>) => (
  <Component className={clsx(styles.root, className)} {...props}>
    {children}
  </Component>
);
