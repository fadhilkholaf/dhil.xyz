import { Metadata } from "next";

import { baseUrl, openGraphBaseURL } from "@/utils/data";

import Hero from "./_components/parts/Hero";
import MiniProjects from "./_components/parts/MiniProjects";

export const metadata: Metadata = {
  title: "Projects",
  openGraph: {
    siteName: "Fadhilkholaf",
    url: baseUrl,
    images: [
      {
        url: `${openGraphBaseURL}projects.png`,
        width: 800,
        height: 418,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@fadhilkholaf",
    images: `${openGraphBaseURL}p.png`,
  },
};

const ProjectsPage = () => {
  return (
    <main className="layout flex h-fit flex-col gap-32 pt-32">
      <Hero />
      <MiniProjects />
    </main>
  );
};

export default ProjectsPage;
