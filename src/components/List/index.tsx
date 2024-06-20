import clsx from 'clsx';
import { HTMLProps } from 'react';

import { Text } from '../Text';
import styles from './index.module.scss';

interface Props<T extends 'ul' | 'ol' = 'ul'> extends HTMLProps<T> {
  asComponent?: T;
}

export const List = <T extends 'ul' | 'ol' = 'ul'>({
  asComponent = 'ul',
  children,
  className,
  ...props
}: Props<T>) => (
  <Text
    asComponent={asComponent}
    className={clsx(styles.root, className)}
    {...props}
  >
    {children}
  </Text>
);
