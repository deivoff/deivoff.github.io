import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Circle, Line, Text } from '@/components';

import { socials } from './socials';

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
      <Text asComponent={Link} className={styles.switcher} href={switcherHref}>
        {t('lang')}
      </Text>
      <span className={styles.subtitle} itemProp="jobTitle">
        {t('subtitle')}
      </span>
      <Line className={styles.divider} type="header" />
      <ul className={styles.info}>
        {socials.map(({ name, Icon, href }) => (
          <li key={href} className={styles.social}>
            <Icon />
            <Text
              asComponent="a"
              href={href}
              target="_blank"
              itemProp="url"
              rel="me"
            >
              {name}
            </Text>
          </li>
        ))}
      </ul>
    </header>
  );
};
