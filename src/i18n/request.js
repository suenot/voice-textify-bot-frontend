import {createSharedPathnamesNavigation} from 'next-intl/navigation';
import {getRequestConfig} from 'next-intl/server';
import {locales, defaultLocale} from '@/navigation';

export default getRequestConfig(async ({locale}) => ({
  messages: (await import(`../messages/${locale}.json`)).default,
  timeZone: 'Europe/Moscow',
  defaultLocale,
  locales,
  locale
}));
