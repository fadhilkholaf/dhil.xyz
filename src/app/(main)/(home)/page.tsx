import { getAllFeaturedProjectsMetadata } from "@/actions/projects";

import Hero from "./_components/parts/Hero";
import Projects from "./_components/parts/Projects";

export const dynamic = "force-dynamic";

const HomePage = async () => {
    const featuredProjectsMetadata = await getAllFeaturedProjectsMetadata();

    return (
        <main>
            <Hero />
            <Projects featuredProjectsMetadata={featuredProjectsMetadata} />
        </main>
    );
};

export default HomePage;
