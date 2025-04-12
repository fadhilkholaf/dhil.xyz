import { ExperienceInterface } from "@/types/experience";
import { ProjectInterface } from "@/types/project";

import KantinNegro from "@/../public/images/projects/kantin-negro.png";
import KeretaApi from "@/../public/images/projects/kereta-api.png";
import Chat from "@/../public/images/mini-projects/chat.png";
import Lily from "@/../public/images/mini-projects/lily.png";
import Hillaryours from "@/../public/images/mini-projects/hillaryours.png";

export const baseUrl = `${process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://fadhilkholaf.my.id"}`;
export const openGraphBaseURL = `${baseUrl}/images/og/`;
export const openGraphDefaultImageURL = `${baseUrl}/images/og/main.png`;

export const menus: { label: string; href: string }[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Projects",
        href: "/projects",
    },
    {
        label: "About",
        href: "/about",
    },
];

export const projects: ProjectInterface[] = [
    {
        name: "Kantin Negro",
        type: "Full-stack - Web - Animation",
        tag: "UKK 2024/2025 Project",
        image: KantinNegro,
        url: "https://kantin.fadhilkholaf.my.id",
        source: "https://github.com/fadhilkholaf/web-kantin-negro-ukk-2025",
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
        tag: "Mini Project #3",
        image: Chat,
        url: "https://chat.fadhilkholaf.my.id",
    },
    {
        name: "Lily",
        type: "Front-end - Web - Animation",
        tag: "Mini Project #2",
        image: Lily,
        url: "https://lily.fadhilkholaf.my.id",
    },
    {
        name: "Hillaryours",
        type: "Front-end - Web - Animation",
        tag: "Mini Project #1",
        image: Hillaryours,
        url: "https://hillaryours.fadhilkholaf.my.id",
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
        Attributions: [
            {
                title: "Flower",
                href: "https://unsplash.com/photos/selective-focus-photography-of-purple-petaled-flower-ko-Dt_501t4",
            },
            {
                title: "Lily",
                href: "https://tenor.com/view/love-mylofly-jkt48-lily-cantik-lily-lucu-gif-2165950836249670182",
            },
            {
                title: "Tiny.png",
                href: "https://tinypng.com",
            },
        ],
    },
    {
        Inspirations: [
            {
                title: "Ahsan Azizan",
                href: "https://www.ahsanzizan.xyz",
            },
            {
                title: "Fiddle Digital",
                href: "https://fiddle.digital",
            },
            {
                title: "Lee Robinson",
                href: "https://leerob.com",
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
