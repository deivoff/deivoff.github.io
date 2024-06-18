import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { LayoutParams } from './types';

const Index = ({ params: { locale } }: LayoutParams) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations('Index');
  return <h1>{t('title')}</h1>;
};

export default Index;
