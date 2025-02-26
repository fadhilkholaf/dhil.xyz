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

export const education: ExperienceInterface[] = [
  {
    dateRange: "Jul 2022 - Present",
    position: "Software Engineering",
    office: "SMK Telkom Malang - Malang, Indonesia",
    description: [
      "Majoring in Software Engineering with a curriculum focused on web development, object-oriented programming (OOP), and fundamental programming concepts. Participating in the Moklet Dev Organization.",
    ],
    works: [
      "Fundamentals of coding and an introduction to object-oriented programming (OOP) using Java.",
      "Introduction to MySQL databases and querying techniques.",
      "Introduction to web development using PHP, Node.js, Express, and React.js.",
    ],
  },
];

export const footerData: {
  [key: string]: { title: string; href: string }[];
}[] = [
  {
    Socials: [
      {
        title: "GitHub",
        href: "https://github.com/fadhilkholaf",
      },
      {
        title: "LinkedIn",
        href: "https://linkedin.com/in/fadhilkholaf",
      },
      {
        title: "X",
        href: "https://x.com/fadhilkholaf",
      },
    ],
  },
  {
    Attributions: [
      {
        title: "Flower",
        href: "https://unsplash.com/photos/selective-focus-photography-of-purple-petaled-flower-ko-Dt_501t4",
      },
      {
        title: "Lily",
        href: "https://tenor.com/view/love-mylofly-jkt48-lily-cantik-lily-lucu-gif-2165950836249670182",
      },
    ],
  },
  {
    Inspo: [
      {
        title: "Ahsan Azizan",
        href: "https://www.ahsanzizan.xyz",
      },
      {
        title: "Fiddle Digital",
        href: "https://fiddle.digital",
      },
      {
        title: "Lusion",
        href: "https://lusion.co",
      },
      {
        title: "Stevia Please",
        href: "https://www.steviaplease.me",
      },
      {
        title: "Theodorus Clarence",
        href: "https://theodorusclarence.com",
      },
    ],
  },
];
