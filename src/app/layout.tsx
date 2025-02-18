import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";

import LenisWrapper from "@/components/wrappers/LenisWrapper";
import { CursorImageProvider } from "@/hooks/useCursorImage";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { PageTransitionProvider } from "@/hooks/usePageTransition";

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
    <html lang="en" className="size-full bg-pink-500 text-gray-800">
      <body
        className={`${geistMono.className} ${geistSans.variable} size-full antialiased`}
      >
        <LenisWrapper>
          <PageTransitionProvider>
            <CursorImageProvider>
              <Navbar />
              {children}
            </CursorImageProvider>
          </PageTransitionProvider>
        </LenisWrapper>
      </body>
    </html>
  );
}
