import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import {
  Background,
  Line,
  Main,
  Paper,
  PaperContainer,
  Section,
} from '@/components';
import { locales } from '@/dictionaries';

import { LayoutParams } from './types';
import { companies, Header, Work } from './widgets';

import styles from './page.module.scss';

const Index = ({ params: { locale } }: LayoutParams) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations('Index');

  return (
    <>
      <Background />
      <Main itemScope itemType="http://schema.org/Person">
        <PaperContainer>
          <Paper>
            <Header
              switcherHref={`/${locales.find((anotherLocale) => anotherLocale !== locale)}`}
            />
            <Section />
            <Section title={t('experience')}>
              <Line />
              <ol className={styles.companies}>
                {companies.map((company) => (
                  <li key={company}>
                    <Work company={company} />
                  </li>
                ))}
              </ol>
            </Section>
            <Section title={t('education')} />
          </Paper>
        </PaperContainer>
      </Main>
    </>
  );
};

export default Index;
