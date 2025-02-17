"use client";

import { useCursorImage } from "@/hooks/useCursorImage";

const HomePage = () => {
  const { setCursorImage } = useCursorImage();

  return (
    <main className="flex size-full items-center justify-center gap-4">
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
  );
};

export default HomePage;
