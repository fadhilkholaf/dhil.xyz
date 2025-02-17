"use client";

import { createContext, ReactNode, useContext, useState } from "react";

import CursorImage from "@/components/CursorImage";
import { CursorImageContextInterface } from "@/types/cursor-image";

const CursorImageContext = createContext<
  CursorImageContextInterface | undefined
>(undefined);

export const CursorImageProvider = ({ children }: { children: ReactNode }) => {
  const [cursorImage, setCursorImage] = useState<string | null>(null);

  return (
    <CursorImageContext.Provider value={{ cursorImage, setCursorImage }}>
      <CursorImage cursorImage={cursorImage} />
      {children}
    </CursorImageContext.Provider>
  );
};

export const useCursorImage = () => {
  const context = useContext(CursorImageContext);
  if (context === undefined) {
    throw new Error("useCursorImage must be used within a CursorImageProvider");
  }
  return context;
};
