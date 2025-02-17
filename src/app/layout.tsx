import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";

import { CursorImageProvider } from "@/hooks/useCursorImage";

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
        <CursorImageProvider>{children}</CursorImageProvider>
      </body>
    </html>
  );
}
