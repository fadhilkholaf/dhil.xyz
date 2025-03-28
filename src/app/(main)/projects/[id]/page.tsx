import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { allProjects, baseUrl } from "@/utils/data";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> => {
  const { id } = await params;

  const project = allProjects.find((p) => p.name === decodeURIComponent(id));

  if (!project) {
    return { title: "Home" };
  }

  return {
    title: project.name,
    openGraph: {
      images: [
        {
          url: `${baseUrl}/api/og/${project.name}`,
          width: 800,
          height: 418,
        },
      ],
    },
    twitter: { images: `${baseUrl}/api/og/${project.name}` },
  };
};

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const projectTitle = decodeURIComponent(id);

  const project = allProjects.find((p) => p.name === projectTitle);

  if (!project) {
    notFound();
  }

  return (
    <main className="layout flex h-fit flex-col gap-32 pt-32">
      <header className="flex flex-col gap-4">
        {project.image && (
          <Image src={project.image} alt={project.name} className="w-full" />
        )}
        <h1 className="mt-2">{project.name}</h1>
        <p>{project.description}</p>
      </header>
      <h1>Working on this thing! 👷 🏗️</h1>
    </main>
  );
};

export default ProjectDetailsPage;
