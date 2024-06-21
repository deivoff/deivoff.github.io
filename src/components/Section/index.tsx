import { HTMLProps } from 'react';
import clsx from 'clsx';

import { Subhead } from '../Subhead';

import s from './index.module.scss';

interface Props extends HTMLProps<HTMLElement> {
  title?: string;
}

export const Section = ({ title, children, className, ...props }: Props) => (
  <section className={clsx(s.root, className)} {...props}>
    {title && (
      <Subhead asComponent="h2" theme="medium" className={s.title}>
        {title}
        <div className={s.divider} />
      </Subhead>
    )}
    <div className={s.content}>{children}</div>
  </section>
);
