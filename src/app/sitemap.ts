import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
    return [
        {
            url: "https://fadhilkholaf.my.id",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: "https://fadhilkholaf.my.id/projects",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.75,
        },
        {
            url: "https://fadhilkholaf.my.id/about",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            url: "https://fadhilkholaf.my.id/attribution",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
    ];
};

export default sitemap;
