import Project from "@/components/Project";
import { projects } from "@/utils/data";

const Hero = () => {
  return (
    <section className="flex h-fit w-full flex-col gap-16">
      <header>
        <h1>Projects [{projects.length}]</h1>
      </header>
      <main>
        <ul className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {projects.map((project, i) => (
            <Project key={i} project={project} />
          ))}
        </ul>
      </main>
    </section>
  );
};

export default Hero;
