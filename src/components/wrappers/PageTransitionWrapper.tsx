"use client";

import { ReactNode, useEffect } from "react";

import { usePageTransition } from "@/hooks/usePageTransition";
import { sleep } from "@/utils/utils";

const PageTransitionWrapper = ({ children }: { children: ReactNode }) => {
  const { pageTransition, setPageTransition } = usePageTransition();

  useEffect(() => {
    const initialTransition = async () => {
      if (pageTransition === null) {
        setPageTransition("initial");
      } else {
        setPageTransition("animate");
        setPageTransition("exit");
        await sleep(750);
        setPageTransition("initial");
      }
    };

    initialTransition();
  }, []);

  return <>{children}</>;
};

export default PageTransitionWrapper;
