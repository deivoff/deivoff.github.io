import { PropsWithChildren } from 'react';
import { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from 'next-intl/server';
import { GoogleTagManager } from '@next/third-parties/google';
import { getLangDir } from 'rtl-detect';

import { locales } from '@/dictionaries';

import Profile from '../../../public/profile.png';

import { LayoutParams } from './types';

import './globals.css';

const montserrat = Montserrat({
  variable: '--montserrat-font',
  weight: ['400', '600', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const generateMetadata = async ({
  params: { locale },
}: LayoutParams): Promise<Metadata> => {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    },
    openGraph: {
      type: 'profile',
      title: t('title'),
      locale,
      images: [
        {
          url: Profile.src,
          width: 50,
          height: 50,
        },
      ],
      firstName: t('firstName'),
      lastName: t('lastName'),
      username: 'deivoff',
    },
  };
};

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

const LocaleLayout = async ({
  children,
  params: { locale },
}: PropsWithChildren<LayoutParams>) => {
  unstable_setRequestLocale(locale);
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={getLangDir(locale)}
      className={montserrat.variable}
    >
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
