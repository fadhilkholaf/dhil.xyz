const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  return (
    <main className="layout flex h-fit flex-col gap-32 pt-32">
      {decodeURIComponent(id)}
    </main>
  );
};

export default ProjectDetailsPage;
