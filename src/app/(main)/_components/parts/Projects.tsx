"use client";

import PageTransitionLink from "@/components/PageTransitionLink";
import Project from "@/components/Project";
import { projects } from "@/utils/data";

const featuredProjectName: string[] = ["Kantin: Anti Starving"];

const Projects = () => {
  return (
    <section className="flex h-fit w-full flex-col gap-16">
      <header>
        <h1>Featured Projects</h1>
      </header>
      <main>
        <ul className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {projects
            .filter((project) => featuredProjectName.includes(project.name))
            .map((project, i) => (
              <Project key={i} project={project} />
            ))}
        </ul>
      </main>
      <footer className="flex justify-center">
        <PageTransitionLink
          href="/projects"
          transitionType="vertical"
          className="rounded-full bg-gray-800 px-4 py-2 text-pink-200 no-underline"
        >
          All projects →
        </PageTransitionLink>
      </footer>
    </section>
  );
};

export default Projects;
