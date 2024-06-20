import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Circle } from '../Circle';
import styles from './index.module.scss';

interface Props {
  switcherHref: string;
}

export const Header = ({ switcherHref }: Props) => {
  const t = useTranslations('Header');
  return (
    <header className={styles.root}>
      <Circle size="large" className={styles.circle} />
      <h1 className={styles.title} itemProp="name">
        {t('title')}
      </h1>
      <Link className={styles.switcher} href={switcherHref}>
        {t('lang')}
      </Link>
      <span className={styles.subtitle} itemProp="jobTitle">
        {t('subtitle')}
      </span>
      <hr className={styles.divider} />
      <div className={styles.info} />
      <div className={styles.info} />
      <div className={styles.info} />
    </header>
  );
};
