import { getAllFeaturedProjectsMetadata } from "@/actions/projects";
import PageTransitionLink from "@/components/PageTransitionLink";
import Project from "@/components/Project";

const Projects = async () => {
    const featuredProjectsMetadata = await getAllFeaturedProjectsMetadata();

    return (
        <section className="flex h-fit w-full flex-col gap-16">
            <header>
                <h1>Featured Projects</h1>
            </header>
            <main>
                <ul className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
                    {featuredProjectsMetadata.map((p, i) => (
                        <Project key={i} project={p} />
                    ))}
                </ul>
            </main>
            <footer className="flex justify-center">
                <PageTransitionLink href="/projects">
                    <span className="animated-underline before:bg-primary">
                        All projects →
                    </span>
                </PageTransitionLink>
            </footer>
        </section>
    );
};

export default Projects;
