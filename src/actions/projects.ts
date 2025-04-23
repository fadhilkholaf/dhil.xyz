import { FEATURED_PROJECTS } from "@/constants/constants";
import { ProjectMDXMetadata } from "@/types/mdx";

import { getAllMDXMetadata } from "./mdx";

export const getAllMainProjectsMetadata = async () => {
    const mainProjectsMetadata = (await getAllMDXMetadata([
        "projects",
        "main",
    ])) as ProjectMDXMetadata[];

    return mainProjectsMetadata.sort((a, b) => {
        if (!a.date || !b.date) {
            return 0;
        }
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
};

export const getAllMiniProjectsMetadata = async () => {
    const mainProjectsMetadata = (await getAllMDXMetadata([
        "projects",
        "mini",
    ])) as ProjectMDXMetadata[];

    return mainProjectsMetadata.sort((a, b) => {
        if (!a.date || !b.date) {
            return 0;
        }
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
};

export const getAllProjectsMetadata = async () => {
    const mainProjectsMetadata = await getAllMainProjectsMetadata();
    const miniProjectsMetadata = await getAllMiniProjectsMetadata();

    return [...mainProjectsMetadata, ...miniProjectsMetadata];
};

export const getAllFeaturedProjectsMetadata = async () => {
    const featuredProjectsMetadata = (await getAllProjectsMetadata()).filter(
        (p) => FEATURED_PROJECTS.includes(p.title),
    );

    return featuredProjectsMetadata;
};
