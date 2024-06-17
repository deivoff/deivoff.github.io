import { dir } from 'i18next';
import { ReactNode } from 'react';
import i18n from '@/i18n';
import { LayoutParams, Params } from './types';

const languages = ['en', 'ru'];

export const generateMetadata = ({ params: { lng } }: LayoutParams) => {
  const t = i18n.getFixedT(lng);

  return {
    title: t('title'),
  };
};

export const generateStaticParams = (): Params[] =>
  languages.map((lng) => ({ lng }));

interface Props extends LayoutParams {
  children: ReactNode;
}

const CVLayout = ({ children, params: { lng } }: Props) => (
  <html lang={lng} dir={dir(lng)}>
    <body>{children}</body>
  </html>
);

export default CVLayout;
