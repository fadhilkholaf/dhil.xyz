import { NavbarMenu } from "@/types/types";

export const BASE_URL = `${process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://fadhilkholaf.my.id"}`;
export const OG_BASE_URL = `${BASE_URL}/images/og/`;
export const OG_BASE_API_URL = `${BASE_URL}/api/og`;
export const OG_DEFAULT_IMAGE_URL = `${BASE_URL}/images/og/main.png`;

export const NAVBAR_MENUS: NavbarMenu[] = [
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

export const NAVBAR_MORE_MENUS: NavbarMenu[] = [
    {
        label: "Blog",
        href: "/blog",
    },
    // {
    //     label: "Friends",
    //     href: "/friends",
    // },
    {
        label: "Snippets",
        href: "/snippets",
    },
    {
        label: "Attribution",
        href: "/attribution",
    },
];

export const FEATURED_PROJECTS = ["Kantin Negro", "Lily"];
