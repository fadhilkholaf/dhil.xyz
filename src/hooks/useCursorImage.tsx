"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import CursorImage from "@/components/animations/CursorImage";
import { CursorImageContextInterface } from "@/types/cursor-image";

const CursorImageContext = createContext<
  CursorImageContextInterface | undefined
>(undefined);

export const CursorImageProvider = ({ children }: { children: ReactNode }) => {
  const [cursorImage, setCursorImage] =
    useState<CursorImageContextInterface["cursorImage"]>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <CursorImageContext.Provider value={{ cursorImage, setCursorImage }}>
      {!isMobile && <CursorImage cursorImage={cursorImage} />}
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
