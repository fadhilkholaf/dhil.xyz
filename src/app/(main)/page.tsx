"use client";

import PageTransitionWrapper from "@/components/wrappers/PageTransitionWrapper";
import { useCursorImage } from "@/hooks/useCursorImage";
import Hero from "./_components/parts/Hero";

const HomePage = () => {
  const { setCursorImage } = useCursorImage();

  return (
    <PageTransitionWrapper>
      <main className="flex flex-col items-center justify-center gap-4">
        <Hero />
        <div
          onPointerEnter={() => setCursorImage("/images/lily0.jpeg")}
          onPointerLeave={() => setCursorImage(null)}
          className="h-[100px] w-[100px] bg-red-500"
        ></div>
        <div
          onPointerEnter={() => setCursorImage("/images/lily1.jpg")}
          onPointerLeave={() => setCursorImage(null)}
          className="h-[100px] w-[100px] bg-red-500"
        ></div>
      </main>
    </PageTransitionWrapper>
  );
};

export default HomePage;
