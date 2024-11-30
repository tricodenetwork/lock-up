import localFont from "next/font/local";
import "./globals.css";
import {Nunito} from "next/font/google"
import Header from "@/components/shared/Header/Header";

const nunito = Nunito({weight:["200","300","400","500","600","700","800","900"],subsets:["cyrillic","cyrillic-ext"]})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "SUI IO",
  description: "Send Money easy anywhere",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} antialiased bg-background`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
