import { dir } from 'i18next';
import { ReactNode } from 'react';
import { Metadata } from 'next';

const languages = ['en', 'ru'];

export const metadata: Metadata = {
  title: 'Eugeny Mazurov',
};

type Params = { lng: string };
export function generateStaticParams(): Params[] {
  return languages.map((lng) => ({ lng }));
}

interface Props {
  children: ReactNode;
  params: Params;
}

export default function CVLayout({ children, params: { lng } }: Props) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>{children}</body>
    </html>
  );
}
