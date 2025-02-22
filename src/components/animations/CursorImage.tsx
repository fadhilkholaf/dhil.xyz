"use client";

import Image from "next/image";
import { useEffect } from "react";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  Variants,
} from "motion/react";

const cursorImageVariants: Variants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
};

const imageVariants: Variants = {
  initial: {
    scale: 2,
    opacity: 0,
    transition: { type: "tween", duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { type: "tween", duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
};

const CursorImage = ({ cursorImage }: { cursorImage: string | null }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mX = useMotionValue(0);
  const mY = useMotionValue(0);

  useEffect(() => {
    let movementTimeout: ReturnType<typeof setTimeout> | null = null;

    const setMotionValue = (e: PointerEvent) => {
      if (movementTimeout) {
        clearTimeout(movementTimeout);
      }

      x.set(e.clientX);
      y.set(e.clientY);
      mX.set(Math.max(-30, Math.min(30, e.movementX)));
      mY.set(Math.max(-30, Math.min(30, e.movementY)));

      movementTimeout = setTimeout(() => {
        mX.set(0);
        mY.set(0);
      }, 10);
    };

    window.addEventListener("pointermove", (e) => {
      setMotionValue(e);
    });

    return () => {
      window.removeEventListener("pointermove", (e) => {
        setMotionValue(e);
      });
    };
  }, []);

  return (
    <motion.div
      initial="initial"
      animate={cursorImage ? "animate" : "initial"}
      variants={cursorImageVariants}
      className="ease-out-cubic pointer-events-none fixed z-30 hidden h-[225px] w-[400px] translate-x-[25px] translate-y-[25px] overflow-hidden transition-all duration-[500ms] md:block"
      style={{ x, y, skewX: mX, skewY: mY }}
    >
      <AnimatePresence mode="popLayout">
        {cursorImage && (
          <motion.div
            key={cursorImage}
            initial="initial"
            animate="animate"
            exit="initial"
            variants={imageVariants}
          >
            <Image
              src={cursorImage}
              alt="Preview"
              width={400}
              height={225}
              priority
              className="aspect-video object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CursorImage;
