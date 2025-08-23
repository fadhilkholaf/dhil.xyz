import { Metadata } from "next";

import { BASE_URL, OG_BASE_API_URL } from "@/constants/constants";

import Hero from "./_components/parts/Hero";
import MiniProjects from "./_components/parts/MiniProjects";

export const metadata: Metadata = {
    title: "Projects",
    openGraph: {
        siteName: "Dhil",
        url: BASE_URL,
        images: [
            {
                url: `${OG_BASE_API_URL}?s=Projects`,
                width: 600,
                height: 315,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        creator: "@fadhilkholaf",
        images: `${OG_BASE_API_URL}?s=Projects`,
    },
};

const ProjectsPage = () => {
    return (
        <>
            <Hero />
            <MiniProjects />
        </>
    );
};

export default ProjectsPage;
