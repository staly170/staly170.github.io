import type { Metadata } from "next";
import { Open_Sans, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-opensans",
});

const raleway = Raleway({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "이의태 | 모바일 개발자",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${openSans.variable} ${raleway.variable}`}>
      <body suppressHydrationWarning>
        <Header />
        {children}
      </body>
    </html>
  );
}
