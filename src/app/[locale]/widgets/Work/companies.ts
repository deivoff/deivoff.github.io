export const companies = ['uula', 'yandex', 'ozon', 'crtweb'] as const;

export type Company = (typeof companies)[number];

export const companiesMeta: Record<
  Company,
  { href: string; time: [start: string, end?: string] }
> = {
  uula: {
    href: 'https://www.uula.com/',
    time: ['2022-03'],
  },
  yandex: {
    href: 'http://www.yandex.ru/',
    time: ['2021-07', '2022-03'],
  },
  ozon: {
    href: 'https://www.ozon.ru/',
    time: ['2019-10', '2021-07'],
  },
  crtweb: {
    href: 'https://crtweb.ru/',
    time: ['2018-07', '2019-10'],
  },
};
