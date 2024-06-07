import { getNodeClient } from '@/launchDarkly/server';
import type { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextJS 14 + LaunchDarkly Template (Unofficial)',
  description: 'NextJS 14 and LaunchDarkly template for quick scaffolding',
};

const LDProvider = dynamic(() => import('@/launchDarkly/client').then((c) => c.LDProvider), {
  ssr: false,
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // Prevents caching of the page which results in static feature flag values at build time
  noStore();

  // The context is usually sourced from the request cookie. This is hardcoded for example only.
  const context = {
    kind: 'user',
    key: '1',
  };

  const ldNodeClient = getNodeClient();
  const bootstrap = await ldNodeClient.allFlagsState(context);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <LDProvider
            context={context}
            options={{ bootstrap: JSON.parse(JSON.stringify(bootstrap)) }}
          >
            {children}
          </LDProvider>
        </Suspense>
      </body>
    </html>
  );
}
