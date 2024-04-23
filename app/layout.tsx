import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import getServerClient from "@/utils/ld-server/serverClient";
import serverflag from "@/utils/ld-server/flaggetter";
import { unstable_noStore as noStore } from "next/cache";
import { LDClient } from "launchdarkly-node-server-sdk";

const inter = Inter({ subsets: ["latin"] });

const AsyncLDProvider = dynamic(() => import("@/components/ldprovider"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "NextJS 14 + LaunchDarkly Template (Unofficial)",
  description: "NextJS 14 and LaunchDarkly template for quick scaffolding",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // Prevents caching of the page which results in static feature flag values at build time
  noStore()

  const context = {
    kind: "user",
    key: "1",
    name: "Anonymous",
  };

  // Server SDK Client
  // const client: LDClient = await getServerClient(process.env.LAUNCHDARKLY_SDK_KEY!);

  // Sample flag getter
  // const flag = await serverflag(client, "flag-key", context, false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <AsyncLDProvider context={context}>{children}</AsyncLDProvider>
        </Suspense>
      </body>
    </html>
  );
}
