"use client";

import { use } from "react";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";

export default function AsyncLDProvider({
  children,
  context
}: {
  children: React.ReactNode;
  context: any
}) {
  const LDDynaProvider = use(
    asyncWithLDProvider({
      clientSideID: process.env.NEXT_PUBLIC_LD_CLIENT_SDK_KEY || '',
      reactOptions: {
        useCamelCaseFlagKeys: false
      },
      context: context
    })
  );

  return <LDDynaProvider>{children}</LDDynaProvider>;
}
