import { ReactNode } from 'react';
import { useFormatter, useTranslations } from 'next-intl';

import { List, Subhead, Text } from '@/components';

import { companiesMeta, type Company } from './companies';

import s from './index.module.scss';

export { companies } from './companies';

interface Props {
  company: Company;
}

const format = { year: 'numeric', month: 'short' } as const;
const item = (chunks: ReactNode) => <li>{chunks}</li>;
const list = (chunks: ReactNode) => (
  <List itemProp="description">{chunks}</List>
);
export const Work = ({ company }: Props) => {
  const t = useTranslations(`Work.${company}`);
  const globalT = useTranslations('Work');
  const {
    href,
    time: [start, end],
  } = companiesMeta[company];
  const formatter = useFormatter();

  const isCurrent = !end;
  const endProps = isCurrent
    ? {
        asComponent: 'span' as const,
      }
    : {
        asComponent: 'time' as const,
        dateTime: end,
        itemProp: 'endDate',
      };
  return (
    <div
      className={s.root}
      itemScope
      itemType="http://schema.org/OrganizationRole"
    >
      <Subhead asComponent="h3" itemProp="roleName" className={s.title}>
        {t('role')}
      </Subhead>
      <div
        itemProp="workFor"
        itemScope
        itemType="http://schema.org/Organization"
        className={s.work}
      >
        <Subhead asComponent="a" href={href} target="_blank" itemProp="url">
          {t('company')}
        </Subhead>
        <div
          itemProp="address"
          itemScope
          itemType="http://schema.org/PostalAddress"
        >
          <Text
            asComponent="span"
            itemProp="addressLocality"
            className={s.state}
          >
            {t('state')}
          </Text>
        </div>
      </div>
      <div className={s.timeWrapper}>
        <Text
          itemProp="startDate"
          className={s.time}
          asComponent="time"
          dateTime={start}
        >
          {formatter.dateTime(new Date(start), format)}
        </Text>
        &nbsp;-
        <br />
        <Text {...endProps} className={s.time}>
          {isCurrent
            ? globalT('currentTime')
            : formatter.dateTime(new Date(end), format)}
        </Text>
      </div>
      <div className={s.description}>
        {t.rich('achievements', {
          item,
          list,
        })}
      </div>
    </div>
  );
};
