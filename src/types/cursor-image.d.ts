import { Dispatch, SetStateAction } from "react";

export interface CursorImageContextInterface {
  cursorImage: string | null;
  setCursorImage: Dispatch<SetStateAction<string | null>>;
}
