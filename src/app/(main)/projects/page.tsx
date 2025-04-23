import { Metadata } from "next";

import { BASE_URL, OG_BASE_API_URL } from "@/constants/constants";

import Hero from "./_components/parts/Hero";
import MiniProjects from "./_components/parts/MiniProjects";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Projects",
    openGraph: {
        siteName: "Fadhilkholaf",
        url: BASE_URL,
        images: [
            {
                url: `${OG_BASE_API_URL}?name=Projects`,
                width: 800,
                height: 418,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        creator: "@fadhilkholaf",
        images: `${OG_BASE_API_URL}?name=Projects`,
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
