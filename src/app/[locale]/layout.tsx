import { NextIntlClientProvider } from 'next-intl';
import { GoogleTagManager } from '@next/third-parties/google';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from 'next-intl/server';
import { Montserrat } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { dir } from 'i18next';
import { locales } from '@/i18n';
import { LayoutParams } from './types';

import './globals.css';

const montserrat = Montserrat({
  variable: '--montserrat-font',
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export const generateMetadata = async ({
  params: { locale },
}: LayoutParams) => {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
  };
};

const LocaleLayout = async ({
  children,
  params: { locale },
}: PropsWithChildren<LayoutParams>) => {
  unstable_setRequestLocale(locale);
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={dir(locale)} className={montserrat.variable}>
      {process.env.NEXT_PUBLIC_GTM && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      )}
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
