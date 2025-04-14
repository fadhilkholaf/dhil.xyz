// "use client";

import Image from "next/image";

import Logo from "@/../public/images/main/fadhilkholaf.svg";
import { cn } from "@/utils/utils";

import PageTransitionLink from "./PageTransitionLink";

const menus: { label: string; href: string }[] = [
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

// const extraMenus: { label: string; href: string }[] = [
//     {
//         label: "Blog",
//         href: "/blog",
//     },
//     {
//         label: "Notes",
//         href: "/notes",
//     },
//     {
//         label: "Friends",
//         href: "/friends",
//     },
// ];

const Navbar = () => {
    return (
        <nav
            className={cn(
                "layout fixed top-0 left-1/2 z-40 flex h-fit -translate-x-1/2 justify-between md:gap-4",
                "before:mask-b-from-black before:mask-b-from-5% before:mask-b-to-transparent before:mask-alpha",
                "before: before:bg-primary before:pointer-events-none before:absolute before:top-0 before:left-0 before:-z-10 before:size-full",
            )}
        >
            <PageTransitionLink
                href="/"
                className="bg-secondary text-primary hidden size-fit rounded-lg px-4 py-2 no-underline md:inline"
            >
                <Image
                    src={Logo}
                    alt="logo"
                    priority
                    className="bg-secondary h-[44px] w-fit overflow-hidden rounded-lg"
                />
            </PageTransitionLink>
            <ul className="bg-secondary text-primary flex h-fit w-full justify-evenly rounded-lg md:w-1/2">
                {menus.map((menu, i) => (
                    <PageTransitionLink
                        key={i}
                        href={menu.href}
                        className="bg-transparent"
                    >
                        <p>{menu.label}</p>
                    </PageTransitionLink>
                ))}
                {/* <li className="py-2">
                    <span className="bg-primary block h-full w-px"></span>
                </li>
                <li>
                    <button
                        type="button"
                        className="flex gap-x-2 rounded-lg px-4 py-2 no-underline"
                    >
                        <span>More</span>
                        <span className="block rotate-90 text-sm">{`>`}</span>
                    </button>
                </li> */}
            </ul>
        </nav>
    );
};

export default Navbar;
