import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const AsyncLDProvider = dynamic(() => import("@/components/ldprovider"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "NextJS 14 + LaunchDarkly Template (Unofficial)",
  description: "NextJS 14 and LaunchDarkly template for quick scaffolding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AsyncLDProvider>{children}</AsyncLDProvider>
      </body>
    </html>
  );
}
