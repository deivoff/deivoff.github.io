import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from 'next-intl/server';
import { ReactNode } from 'react';
import { dir } from 'i18next';
import { locales } from '@/i18n';
import { LayoutParams } from './types';

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export const generateMetadata = async ({
  params: { locale },
}: LayoutParams) => {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
  };
};

interface Props extends LayoutParams {
  children: ReactNode;
}

const LocaleLayout = async ({ children, params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={dir(locale)}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
