import { getAllMainProjectsMetadata } from "@/actions/projects";
import Project from "@/components/Project";

const Hero = async () => {
    const mainProjectsMetadata = await getAllMainProjectsMetadata();

    return (
        <section className="flex h-fit w-full flex-col gap-16">
            <header>
                <h1>Projects [{mainProjectsMetadata.length}]</h1>
            </header>
            <main>
                <ul className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
                    {mainProjectsMetadata.map((p, i) => (
                        <Project key={i} project={p} />
                    ))}
                </ul>
            </main>
        </section>
    );
};

export default Hero;
