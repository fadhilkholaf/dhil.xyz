"use client";

import { motion, Variants } from "motion/react";

import { PageTransitionContextInterface } from "@/types/page-transition";
import { cn } from "@/utils/utils";

const pageTransitionVariants: Variants = {
  animate: {
    transition: { staggerChildren: 0.03 },
  },
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
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            variants={transitionVariants}
            className="animate-background-position h-full w-full scale-y-105 bg-gradient-to-b from-pink-50 from-25% to-pink-200"
            style={{
              backgroundSize: "100% 200%",
              animationDelay: `${i * 100}ms`,
            }}
          ></motion.div>
        ))}
      </motion.main>
    </motion.section>
  );
};

export default PageTransition;
