import Experiences from "./_components/parts/Experiences";
import Hero from "./_components/parts/Hero";

const AboutPage = () => {
  return (
    <main className="layout flex h-fit flex-col gap-32 pt-32">
      <Hero />
      <Experiences />
    </main>
  );
};

export default AboutPage;
