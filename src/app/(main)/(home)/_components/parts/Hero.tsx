"use client";

import Image from "next/image";

import PageTransitionLink from "@/components/PageTransitionLink";
import { useCursorImage } from "@/hooks/useCursorImage";

import Me from "@/public/images/home/fadhilkholaf.jpg";
import DummyImageLandscape from "@/public/images/home/gif.gif";

const Hero = () => {
    const { setCursorImage } = useCursorImage();

    return (
        <section className="flex h-fit w-full items-center">
            <main className="flex h-fit w-full flex-col-reverse gap-16 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-4 sm:w-1/2">
                    <a
                        href={"https://smktelkom-mlg.sch.id"}
                        target="_blank"
                        className="flex w-fit flex-row gap-2 no-underline"
                    >
                        <span className="animate-pulse">●</span> Studying{" "}
                        <span className="animated-underline">
                            @smktelkommalang
                        </span>
                    </a>
                    <div>
                        <h1>{"I'm Fadhil"}</h1>
                        <p>[fadhilkholaf]</p>
                    </div>
                    <p>
                        Web developer with more than a year of experience.
                        Currently down into UI/UX things and also a passionate
                        lifelong learner.
                    </p>
                    <PageTransitionLink href="/about">
                        <span className="animated-underline before:bg-primary">
                            More about me →
                        </span>
                    </PageTransitionLink>
                </div>
                <Image
                    src={Me}
                    alt="me"
                    priority
                    onPointerEnter={() =>
                        setCursorImage(DummyImageLandscape.src)
                    }
                    onPointerLeave={() => setCursorImage(null)}
                    className="aspect-square h-fit w-2/3 max-w-[300px] -scale-x-100 self-center rounded-lg object-cover sm:self-baseline"
                />
            </main>
        </section>
    );
};

export default Hero;
