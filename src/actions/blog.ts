import { BlogMDXMetadata } from "@/types/mdx";

import { getAllMDXMetadata } from "./mdx";

export const getAllBlogMetadata = async () => {
    const blogMetadata = (await getAllMDXMetadata([
        "blog",
    ])) as BlogMDXMetadata[];

    return blogMetadata.sort((a, b) => {
        if (!a.date || !b.date) {
            return 0;
        }
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
};
