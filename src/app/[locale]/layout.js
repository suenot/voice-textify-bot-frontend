import {notFound} from 'next/navigation';
import {locales} from '@/navigation';
import {inter} from '../layout';
import Providers from './providers';
import {getMessages} from 'next-intl/server';

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({children, params}) {
  const {locale} = params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
