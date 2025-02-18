"use client";

import { motion, Variants } from "motion/react";

import { PageTransitionContextInterface } from "@/types/page-transition";
import { cn } from "@/utils/utils";

const pageTransitionVariants: Variants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.025 },
  },
  idle: {},
  exit: {
    transition: { staggerChildren: 0.025 },
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
    transition: { type: "tween", duration: 0.5, ease: [0.65, 0, 0.35, 1] },
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
    transition: { type: "tween", duration: 0.5, ease: [0.65, 0, 0.35, 1] },
    transitionEnd: { originX: 1 },
  },
};

const textVariants: Variants = {
  initial: {},
  animate: {
    transition: { staggerChildren: -0.025 },
  },
  idle: {},
  exit: {
    transition: { staggerChildren: -0.025 },
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
    x: i * 16,
    y: Math.sin(i * 8) * 64,
    transition: { duration: 0.25 },
  }),
  idle: (i) => ({
    opacity: 0,
    x: i * -16,
    y: Math.sin(i * 8) * 64,
  }),
  exit: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.25 },
  },
};

const PageTransition = ({
  pageTransition,
}: {
  pageTransition: PageTransitionContextInterface["pageTransition"];
}) => {
  return (
    <motion.main
      initial="initial"
      animate={pageTransition}
      variants={pageTransitionVariants}
      className={cn("fixed z-50 flex size-full flex-col", {
        hidden: pageTransition === "idle",
      })}
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          variants={transitionVariants}
          className="animate-brightness h-full w-full scale-y-105 bg-pink-300"
          style={{ animationDelay: `${i * 50}ms` }}
        ></motion.div>
      ))}
      <motion.p
        variants={textVariants}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-white"
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
      </motion.p>
    </motion.main>
  );
};

export default PageTransition;
