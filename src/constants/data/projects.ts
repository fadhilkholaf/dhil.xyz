import { ProjectInterface } from "@/types/project";

import KantinNegro from "@/../public/images/projects/kantin-negro.png";
import KeretaApi from "@/../public/images/projects/kereta-api.png";
import Chat from "@/../public/images/mini-projects/chat.png";
import Lily from "@/../public/images/mini-projects/lily.png";

export const projects: ProjectInterface[] = [
    {
        name: "Kantin Negro",
        type: "Full-stack - Web - Animation",
        tag: "UKK 2024/2025 Project",
        image: KantinNegro,
        url: "https://kantin.fadhilkholaf.my.id",
        source: "https://github.com/fadhilkholaf/web-kantin-negro-ukk-2025",
        detail: true,
    },
    {
        name: "Ticketing Kereta API",
        type: "Backend - Node.js - Express",
        tag: "UKK 2024/2025 Project",
        image: KeretaApi,
        url: "https://kereta.apidog.fadhilkholaf.my.id",
        source: "https://github.com/fadhilkholaf/ukk-kereta-api-2025",
    },
];

export const miniProjects: ProjectInterface[] = [
    {
        name: "Chat",
        type: "AI - Chat - Bot",
        tag: "Mini Project #2",
        image: Chat,
        url: "https://chat.fadhilkholaf.my.id",
    },
    {
        name: "Lily",
        type: "Front-end - Web - Animation",
        tag: "Mini Project #1",
        image: Lily,
        url: "https://lily.fadhilkholaf.my.id",
    },
];

export const allProjects: ProjectInterface[] = projects.concat(miniProjects);

export const featuredProjectName: string[] = ["Kantin Negro", "Lily"];
