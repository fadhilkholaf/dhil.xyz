"use client";

import { ReactNode, useEffect } from "react";

import { usePageTransition } from "@/hooks/usePageTransition";
import { sleep } from "@/utils/utils";

const PageTransitionWrapper = ({ children }: { children: ReactNode }) => {
  const { pageTransition, setPageTransition } = usePageTransition();

  useEffect(() => {
    const initialTransition = async () => {
      await sleep(1);
      if (pageTransition !== "idle") {
        setPageTransition("animate");
        await sleep(750);
        setPageTransition("idle");
      }
    };

    initialTransition();
  }, []);

  return <>{children}</>;
};

export default PageTransitionWrapper;
