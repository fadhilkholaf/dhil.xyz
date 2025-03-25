import { Metadata } from "next";

import { openGraphBaseURL } from "@/utils/data";

import Education from "./_components/parts/Education";
import Experiences from "./_components/parts/Experiences";
import Hero from "./_components/parts/Hero";

export const metadata: Metadata = {
  title: "About",
  openGraph: {
    images: [
      {
        url: `${openGraphBaseURL}about.png`,
        width: 800,
        height: 418,
      },
    ],
  },
  twitter: { images: `${openGraphBaseURL}a.png` },
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
