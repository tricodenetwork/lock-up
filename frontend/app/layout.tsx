import { Metadata } from "next";
import { ProvidersAndLayout } from "./ProvidersAndLayout";
import "./globals.css";
import "@mysten/dapp-kit/dist/index.css";
import Header from "@/components/shared/header/Header";

import { Nunito } from "next/font/google";
import Footer from "@/components/shared/footer/Footer";

export const metadata: Metadata = {
  title: "LockUp",
  description: "A Decentralized P2P platforrm on the sui network",
};

const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["cyrillic", "cyrillic-ext"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${nunito.className} antialiased h-full bg-background`}>
        <ProvidersAndLayout>
          <Header />
          {children}
          <Footer />
        </ProvidersAndLayout>
      </body>
    </html>
  );
}
