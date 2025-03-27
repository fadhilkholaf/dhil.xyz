"use client";

import Image from "next/image";

import Me from "@/../public/images/home/fadhilkholaf.jpg";
import DummyImageLandscape from "@/../public/images/main/gif.gif";
import { useCursorImage } from "@/hooks/useCursorImage";

const Hero = () => {
  const { setCursorImage } = useCursorImage();

  return (
    <section className="flex h-fit w-full flex-col gap-16">
      <div>
        <h1>About Me</h1>
        <p>And my story</p>
      </div>
      <main className="flex h-fit w-full flex-col-reverse gap-16 sm:flex-row sm:justify-between">
        <div className="flex flex-col gap-4 sm:w-1/2">
          <div>
            <h3>Muhammad Fadhil Kholaf</h3>
            <p>Or you can call me Fadhil.</p>
          </div>
          {/* <p>
            {`I am a software engineering student at SMK Telkom Malang. I was born
            in 2006 in Tulungagung, and I spent the first 16 years of my life in
            Tulungagung and Trenggalek. My journey to becoming a programmer
            started when I was about 14 years old.`}
          </p>
          <p>
            {`Back then, my junior high school teacher asked me, "What is your
            dream job?" I had only one word in mind: "Programmer." Then I began
            learning programming with Python, which was my first programming
            language. By the way, it was the second year of the COVID-19
            pandemic (and COVID really got me).`}
          </p>
          <p>
            {`In my first year of high school, I learned Java and object-oriented
            programming (OOP), and I thought it was fun, to be honest. In the
            second year, I chose Node.js and React.js as my areas of expertise
            and started learning web development.`}
          </p>
          <p>
            {`I started exploring web animations when I randomly watched a Web
            Programming UNPAS stream about project showcases. I was amazed by
            all those websites, so I began researching everything related to web
            animations. My first web animation was a scroll parallax effect
            using Locomotive Scroll by Locomotive®. I dove deep into it and
            discovered many more tools for web animations, like Three.js, WebGL,
            GLSL, GSAP, Motion, Lenis, etc. (It was hard, though.)`}
          </p>
          <p>{`That's it for now (I'm totally cooked).`}</p> */}
          <p>I Don't yapp.</p>
        </div>
        <Image
          src={Me}
          alt="me"
          priority
          onPointerEnter={() => setCursorImage(DummyImageLandscape.src)}
          onPointerLeave={() => setCursorImage(null)}
          className="aspect-square h-fit w-2/3 min-w-[200px] -scale-x-100 self-center object-cover sm:w-1/3 sm:self-baseline"
        />
      </main>
    </section>
  );
};

export default Hero;
