import { Dispatch, SetStateAction } from "react";

export type PageTransitionEvent = "initial" | "animate" | "idle" | "exit";

export type PageTransitionType = "horizontal" | "vertical";

export interface PageTransitionContextInterface {
  pageTransition: PageTransitionEvent;
  setPageTransition: Dispatch<SetStateAction<PageTransitionEvent>>;
}

export interface PageTransitionTypeContextInterface {
  type: PageTransitionType;
  setType: Dispatch<SetStateAction<PageTransitionType>>;
}
