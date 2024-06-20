import { useTranslations } from 'next-intl';
import { Circle } from '../Circle';

import styles from './index.module.scss';

export const Header = () => {
  const t = useTranslations('Header');
  return (
    <header className={styles.root}>
      <Circle size="large" className={styles.circle} />
      <h1 className={styles.title} itemProp="name">
        {t('title')}
      </h1>
      <span className={styles.subtitle} itemProp="jobTitle">
        {t('subtitle')}
      </span>
      <hr className={styles.divider} />
    </header>
  );
};
