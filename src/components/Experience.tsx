import { ExperienceInterface } from "@/types/experience";

const Experience = ({ experience }: { experience: ExperienceInterface }) => {
  return (
    <li className="flex flex-col gap-2 lg:flex-row lg:gap-8">
      <header className="mt-0 lg:mt-1 lg:w-1/4 lg:shrink-0">
        <p>{experience.dateRange}</p>
      </header>
      <main className="flex flex-col gap-2">
        <header>
          <h3>{experience.position}</h3>
          <p>{experience.office}</p>
        </header>
        <main className="flex flex-col gap-2">
          {experience.description &&
            experience.description.map((d, i) => <p key={i}>{d}</p>)}
          <ul className="ms-4.5 list-disc">
            {experience.works &&
              experience.works.map((w, i) => <li key={i}>{w}</li>)}
          </ul>
        </main>
      </main>
    </li>
  );
};

export default Experience;
