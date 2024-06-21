import { HTMLProps } from 'react';
import clsx from 'clsx';

import styles from './index.module.scss';

interface Props extends HTMLProps<HTMLElement> {
  title?: string;
}

export const Section = ({ title, children, className, ...props }: Props) => (
  <section className={clsx(styles.root, className)} {...props}>
    {title && (
      <h2 className={styles.title}>
        {title}
        <div className={styles.divider} />
      </h2>
    )}
    <div className={styles.content}>{children}</div>
  </section>
);
