import { HTMLProps } from 'react';
import clsx from 'clsx';

import { Text } from '../Text';

import s from './index.module.scss';

interface Props<T extends 'ul' | 'ol' = 'ul'> extends HTMLProps<T> {
  asComponent?: T;
}

export const List = <T extends 'ul' | 'ol' = 'ul'>({
  // @ts-ignore
  asComponent = 'ul',
  children,
  className,
  ...props
}: Props<T>) => (
  <Text
    asComponent={asComponent}
    className={clsx(s.root, className)}
    {...props}
  >
    {children}
  </Text>
);
