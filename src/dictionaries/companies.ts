export const lastCompanies = ['yandex', 'ozon', 'crtweb'] as const;
export const currentCompany = 'uula' as const;

type LastCompany = (typeof lastCompanies)[number];
type CurrentCompany = typeof currentCompany;

export const companies: Record<LastCompany | CurrentCompany, { link: string }> =
  {
    uula: {
      link: 'https://www.uula.com/',
    },
    yandex: {
      link: 'http://www.yandex.ru/',
    },
    ozon: {
      link: 'https://www.ozon.ru/',
    },
    crtweb: {
      link: 'https://crtweb.ru/',
    },
  };
