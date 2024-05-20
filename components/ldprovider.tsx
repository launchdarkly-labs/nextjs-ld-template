"use client";

import { use, useMemo } from "react";
import { LDContext, asyncWithLDProvider } from "launchdarkly-react-client-sdk";

export default function AsyncLDProvider({
  children,
  context,
}: {
  children: React.ReactNode;
  context: LDContext;
}) {
  const ld = useMemo(() => 
    asyncWithLDProvider({
      clientSideID: process.env.NEXT_PUBLIC_LD_CLIENT_SDK_KEY || '',
      reactOptions: {
        useCamelCaseFlagKeys: false
      },
      context: context
    }), [])

  const LDDynaProvider = use(ld);

  return <LDDynaProvider>{children}</LDDynaProvider>;
}
