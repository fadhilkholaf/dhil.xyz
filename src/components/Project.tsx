"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { useCursorImage } from "@/hooks/useCursorImage";
import { ProjectInterface } from "@/types/project";

import PageTransitionLink from "./PageTransitionLink";

const Project = ({ project }: { project: ProjectInterface }) => {
  const { setCursorImage } = useCursorImage();

  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const isMedium = window.innerWidth >= 768;
    const currentRef = ref.current;
    const image = project.image;

    if (currentRef && isMedium && image) {
      currentRef.addEventListener("pointerenter", () =>
        setCursorImage(image.src),
      );
      currentRef.addEventListener("pointerleave", () => setCursorImage(null));
    }

    return () => {
      if (currentRef && isMedium && image) {
        currentRef.removeEventListener("pointerenter", () =>
          setCursorImage(image.src),
        );
        currentRef.removeEventListener("pointerleave", () =>
          setCursorImage(null),
        );
      }
    };
  }, []);

  return (
    <li ref={ref} className="flex flex-col gap-4">
      <header>
        {project.image && (
          <Image
            src={project.image}
            alt={project.name}
            className="aspect-video h-fit w-full object-cover md:hidden"
          />
        )}
        <p className="mt-2">{project.type}</p>
      </header>
      <main>
        <h3>{project.name}</h3>
        <p>{project.tag}</p>
      </main>
      <footer className="flex gap-4">
        <PageTransitionLink
          href={`/projects/${encodeURIComponent(project.name)}`}
          transitionType="vertical"
        >
          <span className="underline">Details</span> →
        </PageTransitionLink>
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

export default Project;
