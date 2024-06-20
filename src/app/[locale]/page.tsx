import { unstable_setRequestLocale } from 'next-intl/server';

import { Background, Header, Main, Paper, PaperContainer } from '@/components';
import { LayoutParams } from './types';

const Index = ({ params: { locale } }: LayoutParams) => {
  unstable_setRequestLocale(locale);

  return (
    <>
      <Background />
      <Main itemScope itemType="http://schema.org/Person">
        <PaperContainer>
          <Paper>
            <Header />
          </Paper>
        </PaperContainer>
      </Main>
    </>
  );
};

export default Index;
