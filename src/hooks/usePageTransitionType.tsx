"use client";

import { createContext, ReactNode, useContext, useState } from "react";

import {
  PageTransitionType,
  PageTransitionTypeContextInterface,
} from "@/types/page-transition";

const PageTransitionTypeContext = createContext<
  PageTransitionTypeContextInterface | undefined
>(undefined);

export const PageTransitionTypeProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [type, setType] = useState<PageTransitionType>("vertical");

  return (
    <PageTransitionTypeContext.Provider value={{ type, setType }}>
      {children}
    </PageTransitionTypeContext.Provider>
  );
};

export const usePageTransitionType = () => {
  const context = useContext(PageTransitionTypeContext);
  if (context === undefined) {
    throw new Error(
      "usePageTransitionType must be used within a PageTransitionTypeProvider",
    );
  }
  return context;
};
