"use client";

import { motion, Variants } from "motion/react";

import { PageTransitionContextInterface } from "@/types/page-transition";
import { cn } from "@/utils/utils";

const pageTransitionVariants: Variants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.03 },
  },
  idle: {},
  exit: {
    transition: { staggerChildren: 0.03 },
  },
};

const transitionVariants: Variants = {
  initial: {
    scaleX: 1,
    originX: 1,
    transition: { duration: 0 },
  },
  animate: {
    scaleX: 0,
    originX: 1,
    transition: { type: "tween", duration: 0.4, ease: [0.65, 0, 0.35, 1] },
    transitionEnd: { originX: 0 },
  },
  idle: {
    scaleX: 0,
    originX: 0,
    transition: { duration: 0 },
  },
  exit: {
    scaleX: 1,
    originX: 0,
    transition: { type: "tween", duration: 0.4, ease: [0.65, 0, 0.35, 1] },
    transitionEnd: { originX: 1 },
  },
};

const textVariants: Variants = {
  initial: {},
  animate: {
    transition: { staggerDirection: -1, staggerChildren: 0.015 },
  },
  idle: {},
  exit: {
    transition: { staggerDirection: -1, staggerChildren: 0.015 },
  },
};

const charVariants: Variants = {
  initial: {
    opacity: 1,
    x: 0,
    y: 0,
  },
  animate: (i) => ({
    opacity: 0,
    x: 128,
    y: Math.sin(i * 8) * 64,
    transition: { type: "tween", duration: 0.4, ease: [0.65, 0, 0.35, 1] },
  }),
  idle: (i) => ({
    opacity: 0,
    x: -128,
    y: Math.sin(i * 8) * 64,
  }),
  exit: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type: "tween", duration: 0.4, ease: [0.65, 0, 0.35, 1] },
  },
};

const PageTransition = ({
  pageTransition,
}: {
  pageTransition: PageTransitionContextInterface["pageTransition"];
}) => {
  return (
    <motion.section
      initial="initial"
      animate={pageTransition}
      className={cn("fixed z-50 size-full", {
        hidden: pageTransition === "idle",
      })}
    >
      <motion.main
        variants={pageTransitionVariants}
        className="flex size-full flex-col"
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            variants={transitionVariants}
            className="animate-brightness h-full w-full scale-y-105 bg-pink-200"
            style={{ animationDelay: `${i * 50}ms` }}
          ></motion.div>
        ))}
      </motion.main>
      <motion.h1
        variants={textVariants}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {"Loading...".split("").map((c, i) => (
          <motion.span
            key={i}
            custom={i + 1}
            variants={charVariants}
            className="inline-block"
          >
            {c}
          </motion.span>
        ))}
      </motion.h1>
    </motion.section>
  );
};

export default PageTransition;
