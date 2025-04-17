import { StaticImageData } from "next/image";

export type ProjectInterface = {
    name: string;
    type?: string;
    tag?: string;
    image?: StaticImageData;
    url?: string;
    source?: string;
    detail?: true;
};
