import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
    return [
        {
            url: "https://fadhilkholaf.my.id",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
    ];
};

export default sitemap;
