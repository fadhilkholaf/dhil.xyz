import { Metadata } from "next";

import { baseUrl, openGraphBaseURL } from "@/constants/data/urls";

import Education from "./_components/parts/Education";
import Experiences from "./_components/parts/Experiences";
import Hero from "./_components/parts/Hero";

export const metadata: Metadata = {
    title: "About",
    openGraph: {
        siteName: "Fadhilkholaf",
        url: baseUrl,
        images: [
            {
                url: `${openGraphBaseURL}about.png`,
                width: 800,
                height: 418,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        creator: "@fadhilkholaf",
        images: `${openGraphBaseURL}about.png`,
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
