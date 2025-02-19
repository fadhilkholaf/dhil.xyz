"use client";

import Link from "next/link";
import Image from "next/image";

import Me from "@/../public/images/home/fadhilkholaf.jpg";
import PageTransitionLink from "@/components/PageTransitionLink";
import { useCursorImage } from "@/hooks/useCursorImage";

const Hero = () => {
  const { setCursorImage } = useCursorImage();

  return (
    <section className="flex h-screen w-full items-center">
      <main className="flex h-fit w-full flex-col-reverse gap-16 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-4 sm:w-1/2">
          <p>
            <span className="animate-pulse">●</span> Studying{" "}
            <Link href="https://smktelkom-mlg.sch.id" target="_blank">
              @smktelkommalang
            </Link>
          </p>
          <div>
            <h1>{"I'm Fadhil"}</h1>
            <p>[fadhilkholaf]</p>
          </div>
          <p>
            Junior front-end web developer, Vercel fanboy ▲[🤡]. Mostly using
            Next.js and Tailwind CSS. On the way doing Flutter and Laravel.
          </p>
          <PageTransitionLink href="/about" className="w-fit no-underline">
            <span className="underline">More about me</span> →
          </PageTransitionLink>
          <div className="flex flex-wrap gap-4">
            <Link href="https://github.com/fadhilkholaf">GitHub</Link>
            <Link href="https://x.com/fadhilkholaf">X</Link>
            <Link href="https://github.com/in/fadhilkholaf">LinkedIn</Link>
          </div>
        </div>
        <Image
          src={Me}
          alt="me"
          priority
          onPointerEnter={() => setCursorImage("/images/home/lily.jpg")}
          onPointerLeave={() => setCursorImage(null)}
          className="aspect-square h-fit w-2/3 min-w-[300px] -scale-x-100 self-center object-cover sm:w-1/3"
        />
      </main>
    </section>
  );
};

export default Hero;
