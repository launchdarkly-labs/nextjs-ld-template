'use client';

import { LDOptions } from 'launchdarkly-js-client-sdk';
import { LDContext } from 'launchdarkly-js-sdk-common';
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';
import { ReactNode, use } from 'react';

export function LDProvider({
  children,
  context,
  options,
}: {
  children: ReactNode;
  context: LDContext;
  options: LDOptions;
}) {
  const Provider = use(
    asyncWithLDProvider({
      clientSideID: process.env.NEXT_PUBLIC_LD_CLIENT_SDK_KEY ?? '',
      context,
      options,
      timeout: 5,
    }),
  );

  return <Provider>{children}</Provider>;
}
