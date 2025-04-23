import { Metadata } from "next";

import { BASE_URL, OG_BASE_API_URL } from "@/constants/constants";

import Education from "./_components/parts/Education";
import Experiences from "./_components/parts/Experiences";
import Hero from "./_components/parts/Hero";

export const metadata: Metadata = {
    title: "About",
    openGraph: {
        siteName: "Fadhilkholaf",
        url: BASE_URL,
        images: [
            {
                url: `${OG_BASE_API_URL}?name=About`,
                width: 800,
                height: 418,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        creator: "@fadhilkholaf",
        images: `${OG_BASE_API_URL}?name=About`,
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
