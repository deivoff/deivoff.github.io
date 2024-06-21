import { MetadataRoute } from 'next';

import { locales } from '@/dictionaries';

const url = process.env.NEXT_PUBLIC_SITE_URL ?? '';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url,
      lastModified: new Date(),
      alternates: {
        languages: locales.reduce<Record<string, string>>((acc, locale) => {
          acc[locale] = `${url}/${locale}`;
          return acc;
        }, {}),
      },
    },
  ];
}
