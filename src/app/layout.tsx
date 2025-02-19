import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LenisWrapper from "@/components/wrappers/LenisWrapper";
import { CursorImageProvider } from "@/hooks/useCursorImage";
import { PageTransitionProvider } from "@/hooks/usePageTransition";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="size-full bg-pink-200 text-gray-800">
      <body
        className={`${geistMono.className} ${geistSans.variable} size-full antialiased`}
      >
        <LenisWrapper>
          <PageTransitionProvider>
            <CursorImageProvider>
              <Navbar />
              {children}
              <Footer />
            </CursorImageProvider>
          </PageTransitionProvider>
        </LenisWrapper>
      </body>
    </html>
  );
}
