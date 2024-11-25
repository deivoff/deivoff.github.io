import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Subhead, Text } from '@/components';

import ProfileImg from '../../../../../public/profile.png';

import s from './index.module.scss';

export const Profile = () => {
  const t = useTranslations('Profile');
  const years = new Date().getFullYear() - 2016;
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
          src={ProfileImg.src}
          alt="Avatar"
          unoptimized
          width={100}
          height={100}
          className={s.img}
        />
        <Text itemProp="description" asComponent="p">
          {t('description', { years })}
        </Text>
      </div>
    </div>
  );
};
