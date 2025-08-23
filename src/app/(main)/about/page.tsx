import { Metadata } from "next";

import { BASE_URL, OG_BASE_API_URL } from "@/constants/constants";

import Education from "./_components/parts/Education";
import Experiences from "./_components/parts/Experiences";
import Hero from "./_components/parts/Hero";

export const metadata: Metadata = {
    title: "About",
    openGraph: {
        siteName: "Dhil",
        url: BASE_URL,
        images: [
            {
                url: `${OG_BASE_API_URL}?s=About`,
                width: 600,
                height: 315,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        creator: "@fadhilkholaf",
        images: `${OG_BASE_API_URL}?s=About`,
    },
};

const AboutPage = () => {
    return (
        <>
            <Hero />
            <Experiences />
            <Education />
        </>
    );
};

export default AboutPage;
