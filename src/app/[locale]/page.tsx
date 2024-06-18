import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Main, Paper, PaperContainer, Background } from '@/components';
import { LayoutParams } from './types';

const Index = ({ params: { locale } }: LayoutParams) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations('Index');
  return (
    <>
      <Background />
      <Main itemScope itemType="http://schema.org/Person">
        <PaperContainer>
          <Paper>
            <header>
              <h1 itemProp="name">{t('title')}</h1>
              <span itemProp="jobTitle">{t('subtitle')}</span>
            </header>
          </Paper>
        </PaperContainer>
      </Main>
    </>
  );
};

export default Index;
