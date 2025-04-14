import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { allProjects, baseUrl, projects } from "@/utils/data";
import PageTransitionLink from "@/components/PageTransitionLink";

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> => {
    const { id } = await params;

    const project = allProjects.find(
        (p) => p.name.toLowerCase().replaceAll(" ", "-") === id,
    );

    if (!project) {
        return { title: "Home" };
    }

    return {
        title: project.name,
        description: project.tag,
        openGraph: {
            siteName: "Fadhilkholaf",
            url: baseUrl,
            images: [
                {
                    url: `${baseUrl}/api/og/${id}`,
                    width: 800,
                    height: 418,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            creator: "@fadhilkholaf",
            images: `${baseUrl}/api/og/${id}`,
        },
    };
};

const ProjectDetailsPage = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;

    const project = allProjects.find(
        (p) => p.name.toLowerCase().replaceAll(" ", "-") === id,
    );

    if (!project) {
        notFound();
    }

    const projectIndex = allProjects.findIndex(
        (p) => p.name.toLowerCase().replaceAll(" ", "-") === id,
    );

    const { default: ProjectDetail } = await import(
        `@/contents/${projectIndex < projects.length ? "projects" : "mini-projects"}/${project.name.toLowerCase().replaceAll(" ", "-")}.mdx`
    );

    const nextProject =
        allProjects[
            projectIndex + 1 < allProjects.length ? projectIndex + 1 : 0
        ];

    return (
        <>
            <main className="flex flex-col gap-y-8">
                <PageTransitionLink
                    href="/projects"
                    transitionType="vertical"
                    className="text-secondary flex gap-x-2 bg-transparent"
                >
                    ←
                    <span className="animated-underline">Back to projects</span>
                </PageTransitionLink>
                <header className="flex flex-col gap-y-4">
                    <h1>{project.name}</h1>
                    <div className="flex gap-x-4">
                        {project.url && (
                            <a
                                href={project.url}
                                target="_blank"
                                className="bg-secondary text-primary size-fit rounded-lg px-4 py-2 no-underline"
                            >
                                Visit site →
                            </a>
                        )}
                        {project.source && (
                            <a
                                href={project.source}
                                target="_blank"
                                className="bg-secondary text-primary size-fit rounded-lg px-4 py-2 no-underline"
                            >
                                Source code →
                            </a>
                        )}
                    </div>
                    {!project.detail && project.image && (
                        <Image
                            src={project.image}
                            alt={project.name}
                            className="w-full rounded-lg"
                        />
                    )}
                </header>
                {project.detail && (
                    <main className="flex flex-col gap-y-4">
                        <ProjectDetail />
                    </main>
                )}
            </main>
            <footer className="flex flex-col gap-y-8">
                <PageTransitionLink
                    href={`/projects/${allProjects[
                        projectIndex + 1 < allProjects.length
                            ? projectIndex + 1
                            : 0
                    ].name
                        .toLowerCase()
                        .replaceAll(" ", "-")}`}
                    transitionType="vertical"
                >
                    Next Project →
                </PageTransitionLink>
                <article>
                    <header>
                        {nextProject.image && (
                            <Image
                                src={nextProject.image}
                                alt={nextProject.name}
                                className="aspect-video h-fit w-full rounded-lg object-cover"
                            />
                        )}
                        <p className="mt-2">{nextProject.type}</p>
                    </header>
                    <main>
                        <h3>{nextProject.name}</h3>
                        <p>{nextProject.tag}</p>
                    </main>
                </article>
            </footer>
        </>
    );
};

export default ProjectDetailsPage;
