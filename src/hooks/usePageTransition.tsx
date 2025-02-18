"use client";

import { createContext, ReactNode, useContext, useState } from "react";

import PageTransition from "@/components/animations/PageTransition";
import { PageTransitionContextInterface } from "@/types/page-transition";

const PageTransitionContext = createContext<
  PageTransitionContextInterface | undefined
>(undefined);

export const PageTransitionProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [pageTransition, setPageTransition] =
    useState<PageTransitionContextInterface["pageTransition"]>(null);

  return (
    <PageTransitionContext.Provider
      value={{ pageTransition, setPageTransition }}
    >
      <PageTransition pageTransition={pageTransition} />
      {children}
    </PageTransitionContext.Provider>
  );
};

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext);
  if (context === undefined) {
    throw new Error(
      "usePageTransition must be used within a PageTransitionProvider",
    );
  }
  return context;
};
