import i18n from '@/i18n';
import { Section } from '@/components';
import { LayoutParams } from './types';

const CV = ({ params: { lng } }: LayoutParams) => {
  const t = i18n.getFixedT(lng);
  return (
    <div>
      {t('hello')}
      <Section />
    </div>
  );
};

export default CV;
