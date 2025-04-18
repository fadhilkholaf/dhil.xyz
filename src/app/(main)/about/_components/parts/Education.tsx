import Experience from "@/components/Experience";
import { education } from "@/constants/data/about";

const Education = () => {
    return (
        <section className="flex h-fit w-full flex-col gap-16">
            <header>
                <h1>Education</h1>
            </header>
            <main>
                <ul className="flex flex-col gap-8">
                    {education.map((experience, i) => (
                        <Experience key={i} experience={experience} />
                    ))}
                </ul>
            </main>
        </section>
    );
};

export default Education;
