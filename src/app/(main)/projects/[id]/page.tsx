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
                    url: `${baseUrl}/api/og/${project.name}`,
                    width: 800,
                    height: 418,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            creator: "@fadhilkholaf",
            images: `${baseUrl}/api/og/${project.name}`,
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
                <div className="flex justify-center">
                    <PageTransitionLink
                        href="/projects"
                        transitionType="vertical"
                    >
                        ← Back To Projects
                    </PageTransitionLink>
                </div>
                <header className="flex flex-col gap-y-4">
                    {project.image && (
                        <Image
                            src={project.image}
                            alt={project.name}
                            className="w-full rounded-lg"
                        />
                    )}
                    <h1 className="mt-2">{project.name}</h1>
                    <div className="flex gap-x-4">
                        {project.url && (
                            <a
                                href={project.url}
                                target="_blank"
                                className="no-underline"
                            >
                                <span className="underline">Visit site</span> →
                            </a>
                        )}
                        {project.source && (
                            <a
                                href={project.source}
                                target="_blank"
                                className="no-underline"
                            >
                                <span className="underline">Source code</span> →
                            </a>
                        )}
                    </div>
                </header>
                <main className="flex flex-col gap-y-4">
                    {project.detail && <ProjectDetail />}
                </main>
            </main>
            <footer className="flex flex-col items-center gap-y-8">
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
            </footer>
        </>
    );
};

export default ProjectDetailsPage;
