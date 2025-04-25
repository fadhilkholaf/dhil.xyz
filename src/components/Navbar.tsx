"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { motion, useMotionValue, Variants } from "motion/react";

import { NAVBAR_MENUS, NAVBAR_MORE_MENUS } from "@/constants/constants";
import { getCurrentlyPlaying } from "@/lib/spotify";
import { SpotifyCurrentlyPlayingInterface } from "@/types/spotify";
import { cn } from "@/utils/utils";

import Logo from "@/public/images/home/fadhilkholaf.svg";
import LilySquaredImage from "@/public/images/home/lily-squared.jpg";
import Spotify_Primary_Logo_RGB_White from "@/public/images/spotify/Spotify_Primary_Logo_RGB_White.png";

import PageTransitionLink from "./PageTransitionLink";

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
    const durationRef = useRef<HTMLParagraphElement>(null);
    const progressRef = useRef<HTMLParagraphElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const [isActive, setIsActive] = useState(false);
    const [spotifyCurrentlyPlaying, setSpotifyCurrentlyPlaying] = useState<
        "loading" | SpotifyCurrentlyPlayingInterface | null
    >(null);
    const progress = useMotionValue(0);
    const duration = useMotionValue(0);

    useEffect(() => {
        const cssRoot = document.documentElement;
        let interval: ReturnType<typeof setInterval>;
        let timeout: ReturnType<typeof setTimeout>;

        if (progressBarRef.current) {
            progressBarRef.current.style.transform = `scale(0,1)`;
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

            if (progressRef.current && titleRef.current) {
                progressRef.current.innerText = "0:00";
                cssRoot.style.setProperty(
                    "--title-width",
                    `${titleRef.current.getBoundingClientRect().width}px`,
                );
                cssRoot.style.setProperty(
                    "--slide-duration",
                    `${
                        (titleRef.current.getBoundingClientRect().width / 100) *
                        1000 *
                        1.5
                    }ms`,
                );
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
            if (durationRef.current) {
                durationRef.current.innerText = `${durationMinutes}:${durationSeconds < 10 ? `0${durationSeconds}` : durationSeconds}`;
            }

            const updateProgress = () => {
                progress.set(progress.get() + 1000);

                const progressDatetime = new Date(
                    Math.min(progress.get(), duration.get()),
                );
                const progressMinutes = progressDatetime.getMinutes();
                const progressSeconds = progressDatetime.getSeconds();

                if (progressRef.current && progressBarRef.current) {
                    progressRef.current.innerText = `${progressMinutes}:${progressSeconds < 10 ? `0${progressSeconds}` : progressSeconds}`;
                    progressBarRef.current.style.transform = `scale(${progress.get() / duration.get()},1)`;
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

        const handleResize = () => {
            if (titleRef.current) {
                cssRoot.style.setProperty(
                    "--title-width",
                    `${titleRef.current.getBoundingClientRect().width}px`,
                );
                cssRoot.style.setProperty(
                    "--slide-duration",
                    `${
                        (titleRef.current.getBoundingClientRect().width / 100) *
                        1000 *
                        1.5
                    }ms`,
                );
            }
        };

        window.addEventListener("mousedown", handleOutsideClick);
        window.addEventListener("resize", handleResize);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
            window.removeEventListener("mousedown", handleOutsideClick);
            window.removeEventListener("resize", handleResize);
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
                {NAVBAR_MENUS.map((menu, i) => (
                    <li key={i}>
                        <PageTransitionLink
                            href={menu.href}
                            className="inline-block bg-transparent"
                        >
                            <p className="animated-underline before:bg-primary after:bg-transparent">
                                {menu.label}
                            </p>
                        </PageTransitionLink>
                    </li>
                ))}
                <li className="py-2">
                    <span className="bg-primary block h-full w-px"></span>
                </li>
                <li>
                    <button
                        ref={extraMenuButtonRef}
                        type="button"
                        onClick={() => setIsActive((prev) => !prev)}
                        className="rounded-lg px-4 py-2 no-underline"
                    >
                        <span className="animated-underline before:bg-primary flex gap-x-2 after:bg-transparent">
                            More
                            <span
                                className={cn(
                                    "ease-out-cubic pointer-events-none block rotate-90 text-sm transition-transform duration-[250ms]",
                                    {
                                        "-rotate-90": isActive,
                                    },
                                )}
                            >{`>`}</span>
                        </span>
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
                    className="bg-secondary flex h-fit w-full origin-left flex-col justify-evenly rounded-lg py-2"
                >
                    {NAVBAR_MORE_MENUS.map((menu, i) => (
                        <li key={i} onClick={() => setIsActive(false)}>
                            <PageTransitionLink
                                href={menu.href}
                                className="inline-block w-full bg-transparent"
                            >
                                <p className="animated-underline before:bg-primary w-full after:bg-transparent">
                                    {menu.label}
                                </p>
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
                    <div className="flex h-[6rem] w-full gap-x-4">
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
                            width={spotifyCurrentlyPlaying ? 300 : undefined}
                            height={spotifyCurrentlyPlaying ? 300 : undefined}
                            priority
                        />
                        <div className="flex h-full w-full flex-col items-center justify-evenly gap-y-2 overflow-hidden">
                            {spotifyCurrentlyPlaying === "loading" ? (
                                <p>Loading</p>
                            ) : spotifyCurrentlyPlaying ? (
                                <>
                                    <a
                                        href={spotifyCurrentlyPlaying.url}
                                        target="_blank"
                                        className="flex w-full flex-row items-center gap-x-2 no-underline"
                                    >
                                        <Image
                                            src={Spotify_Primary_Logo_RGB_White}
                                            alt="Spotify_Primary_Logo_RGB_Black"
                                            className="flex h-[24px] w-fit gap-x-2"
                                            priority
                                        />
                                        <span className="animated-underline before:bg-primary after:bg-primary">
                                            Play on Spotify
                                        </span>
                                        →
                                    </a>
                                    <div className="w-[102%] mask-x-from-90% mask-x-to-[98%]">
                                        <div className="animate-slide flex gap-x-16">
                                            <p
                                                ref={titleRef}
                                                className="min-w-full shrink-0 text-nowrap"
                                            >
                                                {`${spotifyCurrentlyPlaying.title} by ${spotifyCurrentlyPlaying.artists.map((artist) => artist.name).join(", ")}`}
                                            </p>
                                            <p className="min-w-full shrink-0 text-nowrap">
                                                {`${spotifyCurrentlyPlaying.title} by ${spotifyCurrentlyPlaying.artists.map((artist) => artist.name).join(", ")}`}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <p className="flex w-full flex-row items-center gap-x-2">
                                    <Image
                                        src={Spotify_Primary_Logo_RGB_White}
                                        alt="Spotify_Primary_Logo_RGB_Black"
                                        className="flex h-[24px] w-fit gap-x-2"
                                        priority
                                    />
                                    <span>Not Playing</span>
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex h-fit w-full items-center justify-between gap-x-2">
                        <p ref={progressRef} className="shrink-0">
                            -:--
                        </p>
                        <div className="bg-primary/50 h-2 w-full overflow-hidden rounded-lg">
                            <motion.div
                                ref={progressBarRef}
                                className="bg-primary size-full origin-left"
                            ></motion.div>
                        </div>
                        <p ref={durationRef} className="shrink-0">
                            -:--
                        </p>
                    </div>
                </motion.div>
            </div>
        </nav>
    );
};

export default Navbar;
