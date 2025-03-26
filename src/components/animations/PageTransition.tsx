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
      duration: 0.5,
      ease: [0.65, 0, 0.35, 1],
      delay: i * 0.04,
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
      duration: 0.5,
      ease: [0.65, 0, 0.35, 1],
      delay: i * 0.04,
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
      duration: 0.5,
      ease: [0.65, 0, 0.35, 1],
      delay: i * 0.05,
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
      duration: 0.5,
      ease: [0.65, 0, 0.35, 1],
      delay: i * 0.05,
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
    case "horizontal":
      return (
        <motion.section
          animate={pageTransition}
          className={cn("fixed z-50 h-screen w-screen", {
            hidden: pageTransition === "idle",
          })}
        >
          <motion.main className="flex size-full flex-col">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={transitionVariants}
                className="animate-background-position h-full w-full scale-y-105 bg-gradient-to-b from-pink-200 from-20% to-pink-300 to-80%"
                style={{
                  backgroundSize: "100% 200%",
                  animationDelay: `${i * 100}ms`,
                }}
              ></motion.div>
            ))}
          </motion.main>
        </motion.section>
      );

    case "vertical":
      return (
        <motion.section
          animate={pageTransition}
          className={cn("fixed z-50 h-screen w-screen", {
            hidden: pageTransition === "idle",
          })}
        >
          <motion.main className="flex size-full flex-row">
            {Array.from({ length: 19 }).map((_, i) => (
              <motion.div
                key={i}
                custom={Math.abs(i - 9)}
                variants={verticalTransitionVariants}
                className={cn(
                  "animate-background-position hidden h-full w-full md:z-0 md:block md:scale-x-105",
                  "bg-linear-150 from-pink-200 from-20% via-pink-300 via-50% to-pink-200 to-80%",
                  { "z-10 block scale-x-125": i % 2 === 0 },
                )}
                style={{
                  backgroundSize: "100% 200%",
                  animationDelay: `${Math.abs(i - 9) * 100}ms`,
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
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                variants={transitionVariants}
                className="animate-background-position h-full w-full scale-y-105 bg-gradient-to-b from-pink-200 from-20% to-pink-300 to-80%"
                style={{
                  backgroundSize: "100% 200%",
                  animationDelay: `${i * 100}ms`,
                }}
              ></motion.div>
            ))}
          </motion.main>
        </motion.section>
      );
  }
};

export default PageTransition;
