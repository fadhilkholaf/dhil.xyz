import { ExperienceInterface } from "@/types/experience";
import { ProjectInterface } from "@/types/project";

import KantinNegro from "@/../public/images/projects/kantin-negro.png";
import KeretaApi from "@/../public/images/projects/kereta-api.png";
import Chat from "@/../public/images/mini-projects/chat.png";
import Lily from "@/../public/images/mini-projects/lily.png";

export const baseUrl = `${process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://fadhilkholaf.my.id"}`;
export const openGraphBaseURL = `${baseUrl}/images/og/`;
export const openGraphDefaultImageURL = `${baseUrl}/images/og/main.png`;

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
                title: "Twitter / X",
                href: "https://x.com/fadhilkholaf",
            },
        ],
    },
    {
        Website: [
            { title: "About", href: "/about" },
            { title: "Attribution", href: "/attribution" },
            { title: "Home", href: "/" },
            { title: "Projects", href: "/projects" },
        ],
    },
    {
        Collections: [
            {
                title: "Awwards",
                href: "https://www.awwwards.com/fadhilkholaf/collections/inspo",
            },
            {
                title: "Unsplash",
                href: "https://unsplash.com/@fadhilkholaf/likes",
            },
        ],
    },
];
