import Hero from "./_components/parts/Hero";
import MiniProjects from "./_components/parts/MiniProjects";

const ProjectsPage = () => {
  return (
    <main className="layout flex h-fit flex-col gap-32 pt-32">
      <Hero />
      <MiniProjects />
    </main>
  );
};

export default ProjectsPage;
