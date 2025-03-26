import { notFound } from "next/navigation";

import { allProjects } from "@/utils/data";

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
      <p className="break-words">Working on {project.name} project details.</p>
    </main>
  );
};

export default ProjectDetailsPage;
