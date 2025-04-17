"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { motion, useMotionValue, Variants } from "motion/react";

import { getCurrentlyPlaying } from "@/lib/spotify";
import { SpotifyCurrentlyPlayingInterface } from "@/types/spotify";
import { cn } from "@/utils/utils";

import Logo from "@/public/images/main/fadhilkholaf.svg";
import LilySquaredImage from "@/public/images/home/lily-squared.jpg";
import Spotify_Primary_Logo_RGB_White from "@/public/images/spotify/Spotify_Primary_Logo_RGB_White.png";

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
    initial: (i: number) => ({
        opacity: 0,
        y: 25,
        rotate: i % 2 ? 3 : -3,
        transition: {
            type: "tween",
            duration: 0.25,
            ease: [0.65, 0, 0.35, 1],
            delay: Math.abs(i - 3) * 0.05,
        },
    }),
    animate: (i: number) => ({
        opacity: 1,
        y: 0,
        rotate: 0,
        transition: {
            type: "tween",
            duration: 0.25,
            ease: [0.33, 1, 0.68, 1],
            delay: i * 0.05,
        },
    }),
};

const Navbar = () => {
    const extraMenuButtonRef = useRef<HTMLButtonElement>(null);
    const extraMenuContainerRef = useRef<HTMLDivElement>(null);
    const [isActive, setIsActive] = useState(false);
    const [spotifyCurrentlyPlaying, setSpotifyCurrentlyPlaying] = useState<
        "loading" | SpotifyCurrentlyPlayingInterface | null
    >(null);
    const progress = useMotionValue(0);
    const duration = useMotionValue(0);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        let timeout: ReturnType<typeof setTimeout>;

        const progressElement = document.getElementById("progress");
        const durationElement = document.getElementById("duration");
        const progressBarElement = document.getElementById("progressBar");

        if (progressBarElement) {
            progressBarElement.style.transform = `scale(0,1)`;
        }

        const getSpotifyCurrentlyPlaying = async () => {
            const spotifyCurrentlyPlayingData = await getCurrentlyPlaying();

            if (
                spotifyCurrentlyPlaying &&
                spotifyCurrentlyPlaying !== "loading" &&
                spotifyCurrentlyPlayingData &&
                spotifyCurrentlyPlaying.progress ===
                    spotifyCurrentlyPlayingData.progress
            ) {
                setSpotifyCurrentlyPlaying((prev) => {
                    let currentlyPlaying = prev;
                    if (prev && prev !== "loading") {
                        return (currentlyPlaying = { ...prev, progress: 0 });
                    } else {
                    }
                    return currentlyPlaying;
                });
            } else {
                setSpotifyCurrentlyPlaying(spotifyCurrentlyPlayingData);
            }
        };

        if (!spotifyCurrentlyPlaying) {
            getSpotifyCurrentlyPlaying();
        }

        if (spotifyCurrentlyPlaying && spotifyCurrentlyPlaying !== "loading") {
            progress.set(spotifyCurrentlyPlaying.progress);
            duration.set(spotifyCurrentlyPlaying.duration);

            if (progressElement) {
                progressElement.innerText = "0:00";
            }

            const updateSpotifyCurrentlyPlaying = () => {
                progress.set(0);
                duration.set(0);
                getSpotifyCurrentlyPlaying();
            };

            const delay =
                spotifyCurrentlyPlaying.duration -
                spotifyCurrentlyPlaying.progress +
                1000;

            timeout = setTimeout(() => updateSpotifyCurrentlyPlaying(), delay);
        }

        const durationDatetime = new Date(duration.get());
        const durationMinutes = durationDatetime.getMinutes();
        const durationSeconds = durationDatetime.getSeconds();

        if (spotifyCurrentlyPlaying && spotifyCurrentlyPlaying !== "loading") {
            if (durationElement) {
                durationElement.innerText = `${durationMinutes}:${durationSeconds < 10 ? `0${durationSeconds}` : durationSeconds}`;
            }

            const updateProgress = () => {
                progress.set(progress.get() + 1000);

                const progressDatetime = new Date(
                    Math.min(progress.get(), duration.get()),
                );
                const progressMinutes = progressDatetime.getMinutes();
                const progressSeconds = progressDatetime.getSeconds();

                if (progressElement && progressBarElement) {
                    progressElement.innerText = `${progressMinutes}:${progressSeconds < 10 ? `0${progressSeconds}` : progressSeconds}`;
                    progressBarElement.style.transform = `scale(${progress.get() / duration.get()},1)`;
                }
            };

            updateProgress();

            interval = setInterval(() => updateProgress(), 1000);
        }

        const handleOutsideClick = (e: MouseEvent) => {
            if (
                extraMenuButtonRef.current &&
                !extraMenuButtonRef.current.contains(e.target as Node) &&
                extraMenuContainerRef.current &&
                !extraMenuContainerRef.current.contains(e.target as Node)
            ) {
                setIsActive(false);
            }
        };

        window.addEventListener("mousedown", handleOutsideClick);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
            window.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [spotifyCurrentlyPlaying]);

    return (
        <nav className="layout fixed top-0 left-1/2 z-40 flex h-fit -translate-x-1/2 justify-between md:gap-4">
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
            <div
                ref={extraMenuContainerRef}
                className={cn(
                    "offset-top pointer-events-auto fixed right-0 flex h-fit w-full flex-col gap-y-4 px-4 md:w-1/2 md:px-0 md:pr-4",
                    { "pointer-events-none": !isActive },
                )}
            >
                <motion.ul
                    initial={"initial"}
                    animate={isActive ? "animate" : "initial"}
                    custom={1}
                    variants={activeVariants}
                    className="bg-secondary flex h-fit w-full origin-left flex-col justify-evenly gap-y-2 rounded-lg py-2"
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
                </motion.ul>
                <motion.div
                    initial={"initial"}
                    animate={isActive ? "animate" : "initial"}
                    custom={2}
                    variants={activeVariants}
                    className="bg-secondary text-primary flex h-fit w-full origin-right flex-col gap-y-4 rounded-lg p-4"
                >
                    <div className="flex h-[8rem] w-full gap-x-4">
                        <Image
                            src={
                                spotifyCurrentlyPlaying !== "loading" &&
                                spotifyCurrentlyPlaying
                                    ? spotifyCurrentlyPlaying.image
                                    : LilySquaredImage
                            }
                            alt={
                                spotifyCurrentlyPlaying !== "loading" &&
                                spotifyCurrentlyPlaying
                                    ? spotifyCurrentlyPlaying.album
                                    : "Lily squared"
                            }
                            className="h-full w-fit"
                            width={spotifyCurrentlyPlaying ? 640 : undefined}
                            height={spotifyCurrentlyPlaying ? 640 : undefined}
                            priority
                            unoptimized
                        />
                        <div className="flex h-full flex-col justify-evenly gap-y-2 overflow-y-auto">
                            {spotifyCurrentlyPlaying === "loading" ? (
                                <p>Loading</p>
                            ) : spotifyCurrentlyPlaying ? (
                                <>
                                    <a
                                        href={spotifyCurrentlyPlaying.url}
                                        target="_blank"
                                        className="flex w-fit flex-row items-center gap-2 no-underline"
                                    >
                                        <Image
                                            src={Spotify_Primary_Logo_RGB_White}
                                            alt="Spotify_Primary_Logo_RGB_Black"
                                            className="flex h-[24px] w-fit gap-x-2"
                                            priority
                                        />
                                        <span className="animated-underline before:bg-primary after:bg-primary">
                                            Listen On Spotify
                                        </span>
                                        →
                                    </a>
                                    <div>
                                        <h4>{spotifyCurrentlyPlaying.title}</h4>
                                        <p>
                                            {`${spotifyCurrentlyPlaying.artists.map((artist) => artist.name).join(", ")}`}
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <p>Not Playing</p>
                            )}
                        </div>
                    </div>
                    <div className="flex h-fit w-full items-center justify-between gap-x-2">
                        <p id="progress" className="shrink-0">
                            -:--
                        </p>
                        <div className="bg-primary/50 h-2 w-full overflow-hidden rounded-lg">
                            <motion.div
                                id="progressBar"
                                className="bg-primary size-full origin-left"
                            ></motion.div>
                        </div>
                        <p id="duration" className="shrink-0">
                            -:--
                        </p>
                    </div>
                </motion.div>
            </div>
        </nav>
    );
};

export default Navbar;
