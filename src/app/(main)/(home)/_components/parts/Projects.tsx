"use client";

import PageTransitionLink from "@/components/PageTransitionLink";
import Project from "@/components/Project";
import { allProjects, featuredProjectName } from "@/utils/data";

const Projects = () => {
    return (
        <section className="flex h-fit w-full flex-col gap-16">
            <header>
                <h1>Featured Projects</h1>
            </header>
            <main>
                <ul className="grid grid-cols-1 gap-16 md:grid-cols-2">
                    {allProjects
                        .filter((project) =>
                            featuredProjectName.includes(project.name),
                        )
                        .map((project, i) => (
                            <Project key={i} project={project} />
                        ))}
                </ul>
            </main>
            <footer className="flex justify-center">
                <PageTransitionLink href="/projects">
                    All projects →
                </PageTransitionLink>
            </footer>
        </section>
    );
};

export default Projects;
