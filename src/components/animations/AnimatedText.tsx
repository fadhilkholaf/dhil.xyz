"use client";

import { Fragment } from "react";

import { motion, Variants } from "motion/react";

const textWrapperVariant: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.015,
        },
    },
};

const textVariant: Variants = {
    initial: (i) => ({
        opacity: 0,
        scale: 2,
        x: 8,
        y: Math.round(Math.sin(i * 8) * 8),
    }),
    animate: {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        transition: { type: "tween", duration: 0.2, ease: [0.65, 0, 0.35, 1] },
    },
};

const AnimatedText = ({
    text,
    className,
}: {
    text: string;
    className?: string;
}) => {
    return (
        <motion.p
            initial="initial"
            viewport={{ once: true }}
            whileInView="animate"
            variants={textWrapperVariant}
            className={className}
        >
            {text.split(" ").map((w, i) => (
                <Fragment key={i}>
                    {" "}
                    <span className="inline-block">
                        {w.split("").map((c, j) => (
                            <motion.span
                                key={j}
                                custom={j + 1}
                                variants={textVariant}
                                className="inline-block"
                            >
                                {c}
                            </motion.span>
                        ))}
                    </span>
                </Fragment>
            ))}
        </motion.p>
    );
};

export default AnimatedText;
