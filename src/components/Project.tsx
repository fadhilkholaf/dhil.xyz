"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { useCursorImage } from "@/hooks/useCursorImage";
import { ProjectInterface } from "@/types/project";

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

export default Project;
