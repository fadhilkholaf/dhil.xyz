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
