import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Subhead, Text } from '@/components';

import s from './index.module.scss';

export const Profile = () => {
  const t = useTranslations('Profile');

  return (
    <div className={s.root}>
      <div className={s.header}>
        <Subhead className={s.title} asComponent="h2" theme="medium">
          {t('title')}
        </Subhead>
      </div>
      <div className={s.content}>
        <Image
          itemProp="image"
          src="/profile.png"
          alt="Avatar"
          unoptimized
          width={100}
          height={100}
          className={s.img}
        />
        <Text itemProp="description" asComponent="p">
          {t('description')}
        </Text>
      </div>
    </div>
  );
};
