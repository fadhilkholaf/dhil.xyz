import { Metadata } from "next";

import Education from "./_components/parts/Education";
import Experiences from "./_components/parts/Experiences";
import Hero from "./_components/parts/Hero";

export const metadata: Metadata = {
  title: "About",
};

const AboutPage = () => {
  return (
    <main className="layout flex h-fit flex-col gap-32 pt-32">
      <Hero />
      <Experiences />
      <Education />
    </main>
  );
};

export default AboutPage;
