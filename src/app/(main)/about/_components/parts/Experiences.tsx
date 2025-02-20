import Experience from "@/components/Experience";
import { experiences } from "@/utils/data";

const Experiences = () => {
  return (
    <section className="flex h-fit w-full flex-col gap-16">
      <header>
        <h1>Experiences</h1>
      </header>
      <main>
        <ul className="flex flex-col gap-8">
          {experiences.map((experience, i) => (
            <Experience key={i} experience={experience} />
          ))}
        </ul>
      </main>
    </section>
  );
};

export default Experiences;
