"use client";

import { motion, Variants } from "motion/react";

import { usePageTransitionType } from "@/hooks/usePageTransitionType";
import { PageTransitionContextInterface } from "@/types/page-transition";
import { cn } from "@/utils/utils";

const transitionVariants: Variants = {
    initial: {
        scaleX: 1,
        originX: 1,
        transition: { duration: 0 },
    },
    animate: (i: number) => ({
        scaleX: 0,
        originX: 1,
        transition: {
            type: "tween",
            duration: 0.25,
            ease: [0.65, 0, 0.35, 1],
            delay: i * 0.01,
        },
        transitionEnd: { originX: 0 },
    }),
    idle: {
        scaleX: 0,
        originX: 0,
        transition: { duration: 0 },
    },
    exit: (i: number) => ({
        scaleX: 1,
        originX: 0,
        transition: {
            type: "tween",
            duration: 0.25,
            ease: [0.65, 0, 0.35, 1],
            delay: i * 0.01,
        },
        transitionEnd: { originX: 1 },
    }),
};

const verticalTransitionVariants: Variants = {
    initial: {
        scaleY: 1,
        originY: 1,
        transition: { duration: 0 },
    },
    animate: (i: number) => ({
        scaleY: 0,
        originY: 1,
        transition: {
            type: "tween",
            duration: 0.25,
            ease: [0.65, 0, 0.35, 1],
            delay: i * 0.01,
        },
        transitionEnd: { originY: 0 },
    }),
    idle: {
        scaleY: 0,
        originY: 0,
        transition: { duration: 0 },
    },
    exit: (i: number) => ({
        scaleY: 1,
        originY: 0,
        transition: {
            type: "tween",
            duration: 0.25,
            ease: [0.65, 0, 0.35, 1],
            delay: i * 0.01,
        },
        transitionEnd: { originY: 1 },
    }),
};

const PageTransition = ({
    pageTransition,
}: {
    pageTransition: PageTransitionContextInterface["pageTransition"];
}) => {
    const { type } = usePageTransitionType();

    switch (type) {
        case "vertical":
            return (
                <motion.section
                    animate={pageTransition}
                    className={cn("fixed z-50 h-screen w-screen", {
                        hidden: pageTransition === "idle",
                    })}
                >
                    <motion.main className="flex size-full flex-row">
                        {Array.from({ length: 23 }).map((_, i) => (
                            <motion.div
                                key={i}
                                custom={Math.abs(i - 11)}
                                variants={verticalTransitionVariants}
                                className={cn(
                                    "animate-background-position-vertical z-0 block h-full scale-x-105 md:w-full",
                                    "from-primary bg-gradient-to-r from-30% to-pink-300 to-70%",
                                    { "w-full": Math.abs(i - 11) < 6 },
                                )}
                                style={{
                                    backgroundSize: "200% 100%",
                                    animationDelay: `${Math.abs(i - 11) * 50}ms`,
                                }}
                            ></motion.div>
                        ))}
                    </motion.main>
                </motion.section>
            );

        default:
            return (
                <motion.section
                    animate={pageTransition}
                    className={cn("fixed z-50 h-screen w-screen", {
                        hidden: pageTransition === "idle",
                    })}
                >
                    <motion.main className="flex size-full flex-col">
                        {Array.from({ length: 15 }).map((_, i) => (
                            <motion.div
                                key={i}
                                custom={Math.abs(i - 7)}
                                variants={transitionVariants}
                                className="animate-background-position from-primary h-full w-full scale-y-105 bg-gradient-to-b from-30% to-pink-300 to-70%"
                                style={{
                                    backgroundSize: "100% 200%",
                                    animationDelay: `${Math.abs(i - 7) * 50}ms`,
                                }}
                            ></motion.div>
                        ))}
                    </motion.main>
                </motion.section>
            );
    }
};

export default PageTransition;
