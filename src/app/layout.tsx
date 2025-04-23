import { Metadata } from "next";
import { Geist_Mono, Italiana } from "next/font/google";
import { ReactNode } from "react";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LenisWrapper from "@/components/wrappers/LenisWrapper";
import { BASE_URL, OG_BASE_API_URL } from "@/constants/constants";
import { CursorImageProvider } from "@/hooks/useCursorImage";
import { PageTransitionProvider } from "@/hooks/usePageTransition";
import { PageTransitionTypeProvider } from "@/hooks/usePageTransitionType";

import "./globals.css";

const italiana = Italiana({
    weight: "400",
    variable: "--font-italiana",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("/", BASE_URL),
    title: { default: "Home | Fadhilkholaf", template: "%s | Fadhilkholaf" },
    description:
        "Web developer with more than a year of experience. Currently down into UI/UX things and also a passionate lifelong learner.",
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
    alternates: { canonical: "./" },
    openGraph: {
        siteName: "Fadhilkholaf",
        url: BASE_URL,
        images: [
            {
                url: `${OG_BASE_API_URL}?name=Home`,
                width: 800,
                height: 418,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        creator: "@fadhilkholaf",
        images: `${OG_BASE_API_URL}?name=Home`,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" className="bg-primary text-secondary h-fit w-full">
            <body
                className={`${geistMono.className} ${italiana.variable} size-full antialiased`}
            >
                <LenisWrapper>
                    <PageTransitionTypeProvider>
                        <PageTransitionProvider>
                            <CursorImageProvider>
                                <Navbar />
                                <main className="layout flex h-fit flex-col gap-32 pt-32">
                                    {children}
                                </main>
                                <Footer />
                            </CursorImageProvider>
                        </PageTransitionProvider>
                    </PageTransitionTypeProvider>
                </LenisWrapper>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
