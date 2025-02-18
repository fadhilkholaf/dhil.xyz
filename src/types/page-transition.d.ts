import { Dispatch, SetStateAction } from "react";

export interface PageTransitionContextInterface {
  pageTransition: "initial" | "animate" | "exit" | null;
  setPageTransition: Dispatch<
    SetStateAction<"initial" | "animate" | "exit" | null>
  >;
}
