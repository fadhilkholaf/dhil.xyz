import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LenisWrapper from "@/components/wrappers/LenisWrapper";
import { CursorImageProvider } from "@/hooks/useCursorImage";
import { PageTransitionProvider } from "@/hooks/usePageTransition";
import { baseUrl, openGraphImageURL } from "@/utils/data";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("/", baseUrl),
  title: { default: "Home | Fadhilkholaf", template: "%s | Fadhilkholaf" },
  description:
    "Junior front-end dev all about Next.js and Tailwind CSS, plus a total tech enthusiast.",
  authors: [
    {
      name: "Muhammad Fadhil Kholaf",
      url: "https://fadhilkholaf.my.id",
    },
  ],
  generator: "Next.js",
  keywords:
    "fadhilkholaf personal website, fadhilkholaf, fadhil, kholaf, personal, website, web, site",
  referrer: "origin",
  creator: "Muhammad Fadhil Kholaf",
  publisher: "Vercel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: baseUrl },
  openGraph: {
    siteName: "Fadhilkholaf",
    url: baseUrl,
    images: [
      {
        url: openGraphImageURL,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@fadhilkholaf",
    images: openGraphImageURL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="h-fit w-full bg-pink-200 text-gray-800">
      <body
        className={`${geistMono.className} ${geistSans.variable} size-full antialiased`}
      >
        <LenisWrapper>
          <PageTransitionProvider>
            <CursorImageProvider>
              <main className="flex flex-col">
                <Navbar />
                {children}
                <Footer />
              </main>
            </CursorImageProvider>
          </PageTransitionProvider>
        </LenisWrapper>
      </body>
    </html>
  );
}
