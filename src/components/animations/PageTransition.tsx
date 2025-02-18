"use client";

import { motion, Variants } from "motion/react";

import { PageTransitionContextInterface } from "@/types/page-transition";
import { cn } from "@/utils/utils";

const pageTransitionVariants: Variants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.025 },
  },
  exit: {
    transition: { staggerChildren: 0.025 },
  },
};

const transitionVariants: Variants = {
  initial: {
    scaleX: 0,
    originX: 0,
    transition: { duration: 0 },
  },
  animate: {
    scaleX: 1,
    originX: 0,
    transition: { type: "tween", duration: 0.5, ease: [0.65, 0, 0.35, 1] },
    transitionEnd: { originX: 1 },
  },
  exit: {
    scaleX: 0,
    originX: 1,
    transition: { type: "tween", duration: 0.5, ease: [0.65, 0, 0.35, 1] },
    transitionEnd: { originX: 0 },
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
      animate={
        pageTransition === "animate"
          ? "animate"
          : pageTransition === "exit"
            ? "exit"
            : "initial"
      }
      variants={pageTransitionVariants}
      className={cn("fixed z-50 flex size-full flex-col", {
        hidden: pageTransition === "initial" || pageTransition === null,
      })}
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          variants={transitionVariants}
          className="animate-brightness h-full w-full scale-y-105 bg-pink-200"
          style={{ animationDelay: `${i * 100}ms` }}
        ></motion.div>
      ))}
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">
        Loading
      </p>
    </motion.main>
  );
};

export default PageTransition;
