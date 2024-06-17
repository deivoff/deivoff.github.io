import i18n from 'i18next';
import common from '../locales/en/common.json';
import ruCommon from '../locales/ru/common.json';

i18n
  .use({
    type: 'languageDetector',
    detect: () => 'en',
  })
  .init({
    ns: 'common',
    resources: {
      en: {
        common,
      },
      ru: {
        common: ruCommon,
      },
    },
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });

export default i18n;
