import { StaticImageData } from "next/image";

export interface ProjectInterface {
  name: string;
  type?: string;
  tag?: string;
  description?: string;
  image?: StaticImageData;
  url?: string;
  source?: string;
}
