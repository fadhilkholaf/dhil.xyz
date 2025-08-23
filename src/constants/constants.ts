import { NavbarMenu } from "@/types/types";

export const BASE_URL = `${process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://dhil.xyz"}`;
export const OG_BASE_API_URL = `${BASE_URL}/api/og`;

export const NAVBAR_MENUS: NavbarMenu[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About",
        href: "/about",
    },
];

export const NAVBAR_MORE_MENUS: NavbarMenu[] = [
    {
        label: "Attribution",
        href: "/attribution",
    },
    {
        label: "Blog",
        href: "/blog",
    },
    {
        label: "Projects",
        href: "/projects",
    },
    {
        label: "Snippets",
        href: "/snippets",
    },
];

export const FEATURED_PROJECTS = ["Shop.", "Kantin Negro"];
