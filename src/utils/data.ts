import { ExperienceInterface } from "@/types/experience";
import { ProjectInterface } from "@/types/project";

import KantinNegro from "@/../public/images/projects/kantin-negro.png";
import Chat from "@/../public/images/mini-projects/chat.png";
import Lily from "@/../public/images/mini-projects/lily.png";
import Hillaryours from "@/../public/images/mini-projects/hillaryours.png";

export const projects: ProjectInterface[] = [
  {
    name: "Kantin: Anti Starving",
    slogan: "Find your perfect foods and drinks",
    image: KantinNegro,
    tag: "Full-stack - Web - Animation",
    url: "https://kantin.fadhilkholaf.my.id",
    source: "https://github.com/fadhilkholaf/web-kantin-negro-ukk-2025",
  },
];

export const miniProjects: ProjectInterface[] = [
  {
    name: "Chat",
    slogan: "Personal AI assistant",
    image: Chat,
    tag: "AI - Chat - Bot",
    url: "https://chat.fadhilkholaf.my.id",
  },
  {
    name: "Lily",
    slogan: "リリー",
    image: Lily,
    tag: "Front-end - Web - Animation",
    url: "https://lily.fadhilkholaf.my.id",
  },
  {
    name: "Hillaryours",
    slogan: "New spirit of blume",
    image: Hillaryours,
    tag: "Front-end - Web - Animation",
    url: "https://hillaryours.fadhilkholaf.my.id",
  },
];

export const experiences: ExperienceInterface[] = [
  {
    dateRange: "Jul 2024 - Nov 2024",
    position: "Front-end Developer Intern",
    office: "PT. Ina Gata Persada - Malang, Indonesia",
    description: [
      "Worked as a front-end developer intern as part of the SMK Telkom Malang Internship Program. This internship followed a hybrid working model 60% remote and 40% on-site for 4 months.",
    ],
    works: [
      "Converted internal web designs into code using Next.js and Tailwind CSS.",
      "Contributed to client projects as a front-end developer, utilizing tools such as PHP Laravel, Blade Templating, and Bootstrap.",
    ],
  },
];
