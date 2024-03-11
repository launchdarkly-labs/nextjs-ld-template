"use client";

import { use } from "react";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";

export default function AsyncLDProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const LDDynaProvider = use(
    asyncWithLDProvider({
      clientSideID: process.env.NEXT_PUBLIC_LD_CLIENT_SDK_KEY || '',
      reactOptions: {
        useCamelCaseFlagKeys: false
      },
      context: {
        kind: "user",
        key: "1",
        name: "Anonymous",
      },
    })
  );

  return <LDDynaProvider>{children}</LDDynaProvider>;
}
