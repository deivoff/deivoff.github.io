import clsx from 'clsx';
import { HTMLProps } from 'react';

import styles from './index.module.scss';

interface Props extends HTMLProps<HTMLElement> {
  title: string;
}

export const Section = ({ title, children, className, ...props }: Props) => (
  <section className={clsx(styles.root, className)} {...props}>
    <h2 className={styles.title}>{title}</h2>
    <hr className={styles.divider} />
    <div className={styles.content}>{children}</div>
  </section>
);
