import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Circle, Line, Text } from '@/components';

import { socials } from './socials';

import s from './index.module.scss';

interface Props {
  switcherHref: string;
}

export const Header = ({ switcherHref }: Props) => {
  const t = useTranslations('Header');
  return (
    <header className={s.root}>
      <Circle size="large" className={s.circle} />
      <h1 className={s.title} itemProp="name">
        {t('title')}
      </h1>
      <Text asComponent={Link} className={s.switcher} href={switcherHref}>
        {t('lang')}
      </Text>
      <span className={s.subtitle} itemProp="jobTitle">
        {t('subtitle')}
      </span>
      <Line className={s.divider} type="header" />
      <ul className={s.info}>
        {socials.map(({ name, Icon, href }) => (
          <li key={href} className={s.social}>
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
