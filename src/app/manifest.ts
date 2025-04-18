import { MetadataRoute } from "next";

import { baseUrl } from "@/constants/data/urls";

const manifest = (): MetadataRoute.Manifest => {
    return {
        name: "Fadhilkholaf",
        short_name: "Fadhil",
        start_url: "/",
        lang: "en-US",
        icons: [
            {
                src: `${baseUrl}/images/icons/web-app-manifest-192x192.png`,
                sizes: "192x192",
                type: "image/png",
                purpose: "maskable",
            },
            {
                src: `${baseUrl}/images/icons/web-app-manifest-512x512.png`,
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable",
            },
        ],
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
    };
};

export default manifest;
