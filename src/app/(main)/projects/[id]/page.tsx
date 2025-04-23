import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import {
    getAllMainProjectsMetadata,
    getAllProjectsMetadata,
} from "@/actions/projects";
import PageTransitionLink from "@/components/PageTransitionLink";
import { BASE_URL } from "@/constants/constants";
import { formatDate } from "@/utils/utils";

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> => {
    const { id } = await params;

    const allProjects = await getAllProjectsMetadata();

    const project = allProjects.find((p) => p.fileName === id);

    if (!project) {
        return { title: "Home" };
    }

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            siteName: "Fadhilkholaf",
            url: BASE_URL,
            images: [
                {
                    url: `${BASE_URL}/api/og?title=${decodeURIComponent("Projects:")}&name=${encodeURIComponent(project.title)}`,
                    width: 800,
                    height: 418,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            creator: "@fadhilkholaf",
            images: `${BASE_URL}/api/og?title=${decodeURIComponent("Projects:")}&name=${encodeURIComponent(project.title)}`,
        },
    };
};

const ProjectDetailsPage = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;

    const allProjects = await getAllProjectsMetadata();
    const mainProjects = await getAllMainProjectsMetadata();

    const project = allProjects.find((p) => p.fileName === id);

    if (!project) {
        notFound();
    }

    const projectIndex = allProjects.findIndex((p) => p.fileName === id);

    const { default: Project } = await import(
        `@/public/contents/projects/${projectIndex < mainProjects.length ? "main" : "mini"}/${project.fileName}.mdx`
    );

    const nextProject =
        allProjects[
            projectIndex + 1 < allProjects.length ? projectIndex + 1 : 0
        ];

    return (
        <>
            <main className="flex flex-col gap-y-4">
                <div className="flex w-full justify-end">
                    <PageTransitionLink href="/projects">
                        <span className="animated-underline before:bg-primary">
                            ← Back to projects
                        </span>
                    </PageTransitionLink>
                </div>
                <div>
                    <h1>{project.title}</h1>
                    <p>{formatDate(new Date(project.date))}</p>
                </div>
                <div className="flex gap-x-4">
                    {project.previewURL && (
                        <a
                            href={project.previewURL}
                            target="_blank"
                            className="bg-secondary text-primary size-fit rounded-lg px-4 py-2 no-underline"
                        >
                            <span className="animated-underline before:bg-primary">
                                Visit site →
                            </span>
                        </a>
                    )}
                    {project.sourceCodeURL && (
                        <a
                            href={project.sourceCodeURL}
                            target="_blank"
                            className="bg-secondary text-primary size-fit rounded-lg px-4 py-2 no-underline"
                        >
                            <span className="animated-underline before:bg-primary">
                                Source code →
                            </span>
                        </a>
                    )}
                </div>
                <div className="flex flex-col gap-y-2">
                    <Image
                        src={project.imageURL}
                        alt={project.title}
                        width={1280}
                        height={720}
                        priority
                        className="w-full rounded-lg"
                    />
                    <ul className="flex flex-wrap gap-2">
                        {project.tags.map((t, i) => (
                            <li
                                key={i}
                                className="bg-secondary text-primary rounded-lg px-2 py-1 text-xs"
                            >
                                {t}
                            </li>
                        ))}
                    </ul>
                </div>
                <Project />
            </main>
            <footer className="flex flex-col gap-y-8">
                <PageTransitionLink
                    href={`/projects/${
                        allProjects[
                            projectIndex + 1 < allProjects.length
                                ? projectIndex + 1
                                : 0
                        ].fileName
                    }`}
                    transitionType="vertical"
                >
                    <span className="animated-underline before:bg-primary">
                        Next Project →
                    </span>
                </PageTransitionLink>
                <article>
                    <header className="flex flex-col gap-y-2">
                        <Image
                            src={nextProject.imageURL}
                            alt={nextProject.title}
                            width={1280}
                            height={720}
                            priority
                            className="aspect-video h-fit w-full rounded-lg object-cover"
                        />
                        <p>{nextProject.tags.slice(0, 3).join(" • ")}</p>
                    </header>
                    <main>
                        <h2>{nextProject.title}</h2>
                    </main>
                </article>
            </footer>
        </>
    );
};

export default ProjectDetailsPage;
