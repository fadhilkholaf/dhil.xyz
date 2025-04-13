"use client";

import Image from "next/image";

import Me from "@/../public/images/home/fadhilkholaf.jpg";
import DummyImageLandscape from "@/../public/images/main/gif.gif";
import AnimatedText from "@/components/animations/AnimatedText";
import PageTransitionLink from "@/components/PageTransitionLink";
import { useCursorImage } from "@/hooks/useCursorImage";

const Hero = () => {
    const { setCursorImage } = useCursorImage();

    return (
        <section className="flex h-fit w-full items-center">
            <main className="flex h-fit w-full flex-col-reverse gap-16 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-4 sm:w-1/2">
                    <p>
                        <span className="animate-pulse">●</span> Studying{" "}
                        <a href="https://smktelkom-mlg.sch.id" target="_blank">
                            @smktelkommalang
                        </a>
                    </p>
                    <div>
                        <h1>{"I'm Fadhil"}</h1>
                        <p>[fadhilkholaf]</p>
                    </div>
                    <AnimatedText
                        text={
                            "Junior front-end dev all about Next.js and Tailwind CSS, plus a total tech enthusiast."
                        }
                    />
                    <PageTransitionLink href="/about">
                        More about me →
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
                    className="aspect-square h-fit w-2/3 min-w-[200px] -scale-x-100 self-center rounded-lg object-cover sm:w-1/3 sm:self-baseline"
                />
            </main>
        </section>
    );
};

export default Hero;
