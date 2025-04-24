import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.scdn.co",
            },
            {
                protocol: "https",
                hostname: "95k1y8fb5v.ufs.sh",
            },
            {
                protocol: "https",
                hostname: "fadhilkholaf.my.id",
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
        ],
    },
    outputFileTracingIncludes: {
        "/": ["./src/contents/projects/**/*"],
        "/projects": ["./src/contents/projects/**/*"],
        "/projects/\\[id\\]": ["./src/contents/projects/**/*"],
        "/blog": ["./src/contents/blog/**/*"],
        "/blog/\\[id\\]": ["./src/contents/blog/**/*"],
        "/snippets": ["./src/contents/snippets/**/*"],
        "/snippets/\\[id\\]": ["./src/contents/snippets/**/*"],
    },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
