import Image from "next/image";

import { ProjectMDXMetadata } from "@/types/mdx";

import PageTransitionLink from "./PageTransitionLink";

const Project = ({ project }: { project: ProjectMDXMetadata }) => {
    return (
        <li className="flex flex-col gap-y-4">
            <header className="flex flex-col gap-y-2">
                <Image
                    src={project.imageURL}
                    alt={project.title}
                    width={1280}
                    height={720}
                    priority
                    className="aspect-video h-fit w-full rounded-lg object-cover"
                />
                <div>
                    <h2>{project.title}</h2>
                    <p>{project.tags.slice(0, 3).join(" • ")}</p>
                </div>
            </header>
            <main>
                <PageTransitionLink
                    href={`/projects/${project.fileName}`}
                    transitionType="vertical"
                    className="inline-block"
                >
                    <span className="animated-underline before:bg-primary">
                        Details →
                    </span>
                </PageTransitionLink>
            </main>
        </li>
    );
};

export default Project;
