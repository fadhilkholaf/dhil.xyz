import { Dispatch, SetStateAction } from "react";

export interface PageTransitionContextInterface {
  pageTransition: "initial" | "animate" | "idle" | "exit";
  setPageTransition: Dispatch<
    SetStateAction<"initial" | "animate" | "idle" | "exit">
  >;
}
