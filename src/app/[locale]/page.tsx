import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';

import {
  Background,
  Header,
  Line,
  List,
  Main,
  Paper,
  PaperContainer,
  Section,
  Subhead,
  Text,
  TwoColumns,
} from '@/components';
import { companies, lastCompanies, locales } from '@/dictionaries';

import styles from './index.module.scss';
import { LayoutParams } from './types';

const item = (chunks: ReactNode) => <li>{chunks}</li>;
const list = (chunks: ReactNode) => (
  <List itemProp="description">{chunks}</List>
);

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
            <Section title={t('experience')}>
              <Line />
              <TwoColumns
                className={styles.company}
                leftColumn={
                  <span
                    itemProp="worksFor"
                    itemScope
                    itemType="http://schema.org/Organization"
                  >
                    <Subhead
                      className={styles.companyLink}
                      asComponent="a"
                      href={companies.uula.link}
                      target="_blank"
                      itemProp="url"
                    >
                      {t(`uula.company`)}
                    </Subhead>
                    <div
                      itemProp="address"
                      itemScope
                      itemType="http://schema.org/PostalAddress"
                    >
                      <Text
                        asComponent="span"
                        itemProp="addressLocality"
                        className={styles.companyState}
                      >
                        {t(`uula.state`)}
                      </Text>
                    </div>
                    <Text className={styles.companyTime} asComponent="time">
                      {t(`uula.time`)}
                    </Text>
                  </span>
                }
                rightColumn={
                  <>
                    <Subhead asComponent="h3" itemProp="jobTitle">
                      {t(`uula.role`)}
                    </Subhead>
                    {t.rich(`uula.achievements`, {
                      item,
                      list,
                    })}
                  </>
                }
              />
              {lastCompanies.map((key) => (
                <TwoColumns
                  key={key}
                  itemScope
                  itemType="http://schema.org/Event/Job"
                  className={styles.company}
                  leftColumn={
                    <>
                      <span
                        itemProp="location"
                        itemScope
                        itemType="http://schema.org/Place"
                      >
                        <Subhead
                          className={styles.companyLink}
                          asComponent="a"
                          href={companies[key].link}
                          target="_blank"
                          itemProp="url"
                        >
                          {t(`${key}.company`)}
                        </Subhead>
                        <div
                          itemProp="address"
                          itemScope
                          itemType="http://schema.org/PostalAddress"
                        >
                          <Text
                            asComponent="span"
                            itemProp="addressLocality"
                            className={styles.companyState}
                          >
                            {t(`${key}.state`)}
                          </Text>
                        </div>
                      </span>
                      <Text className={styles.companyTime} asComponent="time">
                        {t(`${key}.time`)}
                      </Text>
                    </>
                  }
                  rightColumn={
                    <>
                      <Subhead asComponent="h3" itemProp="jobTitle">
                        {t(`${key}.role`)}
                      </Subhead>
                      {t.rich(`${key}.achievements`, {
                        item,
                        list,
                      })}
                    </>
                  }
                />
              ))}
            </Section>
          </Paper>
        </PaperContainer>
      </Main>
    </>
  );
};

export default Index;
