import Project from "@/components/Project";
import { miniProjects } from "@/constants/data/projects";

const MiniProjects = () => {
    return (
        <section className="flex h-fit w-full flex-col gap-16">
            <header>
                <h1>Mini Projects [{miniProjects.length}]</h1>
            </header>
            <main>
                <ul className="grid grid-cols-1 gap-16 md:grid-cols-2">
                    {miniProjects.map((project, i) => (
                        <Project key={i} project={project} />
                    ))}
                </ul>
            </main>
        </section>
    );
};

export default MiniProjects;
