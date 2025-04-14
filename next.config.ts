import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    images: {
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
        ],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
