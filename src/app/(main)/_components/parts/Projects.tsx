"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

import PageTransitionLink from "@/components/PageTransitionLink";
import { useCursorImage } from "@/hooks/useCursorImage";
import { ProjectInterface } from "@/types/project";
import { projects } from "@/utils/data";

const featuredProjectName: string[] = ["Kantin: Anti Starving"];

const Project = ({ project }: { project: ProjectInterface }) => {
  const { setCursorImage } = useCursorImage();

  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const isMedium = window.innerWidth >= 768;

    if (ref.current && isMedium) {
      ref.current.addEventListener("pointerenter", () =>
        setCursorImage(project.image.src),
      );
      ref.current.addEventListener("pointerleave", () => setCursorImage(null));
    }

    return () => {
      if (ref.current && isMedium) {
        ref.current.removeEventListener("pointerenter", () =>
          setCursorImage(project.image.src),
        );
        ref.current.removeEventListener("pointerleave", () =>
          setCursorImage(null),
        );
      }
    };
  }, []);

  return (
    <li ref={ref} className="flex flex-col gap-4">
      <header>
        <Image
          src={project.image}
          alt={project.name}
          className="aspect-video h-fit w-full object-cover md:hidden"
        />
        <p className="mt-2">{project.tag}</p>
      </header>
      <main>
        <h3>{project.name}</h3>
        {project.slogan && <p>{project.slogan}</p>}
      </main>
      <footer className="flex gap-4">
        {project.url && (
          <Link href={project.url} target="_blank" className="no-underline">
            <span className="underline">Visit site</span> →
          </Link>
        )}
        {project.source && (
          <Link href={project.source} target="_blank" className="no-underline">
            <span className="underline">Source code</span> →
          </Link>
        )}
      </footer>
    </li>
  );
};

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
          className="rounded-full bg-gray-800 px-4 py-2 text-pink-200 no-underline"
        >
          All projects →
        </PageTransitionLink>
      </footer>
    </section>
  );
};

export default Projects;
