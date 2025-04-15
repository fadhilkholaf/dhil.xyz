"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { motion, Variants } from "motion/react";

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

const extraMenus: { label: string; href: string }[] = [
    // {
    //     label: "Blog",
    //     href: "/blog",
    // },
    // {
    //     label: "Notes",
    //     href: "/notes",
    // },
    // {
    //     label: "Friends",
    //     href: "/friends",
    // },
    {
        label: "Attribution",
        href: "/attribution",
    },
];

const activeVariants: Variants = {
    initial: {
        opacity: 0,
        y: 50,
        rotate: 6,
        transition: {
            type: "tween",
            duration: 0.25,
            ease: [0.33, 1, 0.68, 1],
        },
    },
    animate: {
        opacity: 1,
        y: 0,
        rotate: 0,
        transition: {
            type: "tween",
            duration: 0.25,
            ease: [0.33, 1, 0.68, 1],
        },
    },
};

const Navbar = () => {
    const extraMenuButtonRef = useRef<HTMLButtonElement>(null);
    const extraMenuListRef = useRef<HTMLUListElement>(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (
                extraMenuButtonRef.current &&
                !extraMenuButtonRef.current.contains(e.target as Node) &&
                extraMenuListRef.current &&
                !extraMenuListRef.current.contains(e.target as Node)
            ) {
                setIsActive(false);
            }
        };

        window.addEventListener("mousedown", handleOutsideClick);

        return () => {
            window.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

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
            <ul className="bg-secondary text-primary flex h-fit w-full justify-between rounded-lg md:w-1/2">
                {menus.map((menu, i) => (
                    <PageTransitionLink
                        key={i}
                        href={menu.href}
                        className="bg-transparent"
                    >
                        <p>{menu.label}</p>
                    </PageTransitionLink>
                ))}
                <li className="py-2">
                    <span className="bg-primary block h-full w-px"></span>
                </li>
                <li>
                    <button
                        ref={extraMenuButtonRef}
                        type="button"
                        onClick={() => setIsActive((prev) => !prev)}
                        className="flex gap-x-2 rounded-lg px-4 py-2 no-underline"
                    >
                        More
                        <span
                            className={cn(
                                "ease-out-cubic pointer-events-none block rotate-90 text-sm transition-transform duration-[250ms]",
                                {
                                    "-rotate-90": isActive,
                                },
                            )}
                        >{`>`}</span>
                    </button>
                </li>
            </ul>
            <motion.div
                initial={"initial"}
                animate={isActive ? "animate" : "initial"}
                variants={activeVariants}
                className={cn(
                    "offset-top pointer-events-auto fixed right-0 w-full origin-left px-4 md:mr-4 md:w-fit md:px-0",
                    { "pointer-events-none": !isActive },
                )}
            >
                <ul
                    ref={extraMenuListRef}
                    className="bg-secondary flex h-fit w-full flex-col justify-evenly gap-y-2 rounded-lg py-2 md:w-[200px]"
                >
                    {extraMenus.map((menu, i) => (
                        <li key={i} onClick={() => setIsActive(false)}>
                            <PageTransitionLink
                                href={menu.href}
                                className="inline-block w-full bg-transparent"
                            >
                                {menu.label}
                            </PageTransitionLink>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </nav>
    );
};

export default Navbar;
