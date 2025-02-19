import { StaticImageData } from "next/image";

export interface ProjectInterface {
  name: string;
  slogan?: string;
  image: StaticImageData;
  tag: string;
  url?: string;
  source?: string;
}
