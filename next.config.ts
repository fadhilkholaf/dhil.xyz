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
    async redirects() {
        return [
            {
                source: "/github",
                destination: "https://github.com/fadhilkholaf",
                permanent: true,
            },
            {
                source: "/instagram",
                destination: "https://instagram.com/muhammadfadhilkholaf",
                permanent: true,
            },
            {
                source: "/linkedin",
                destination: "https://linkedin.com/fadhilkholaf",
                permanent: true,
            },
            {
                source: "/x",
                destination: "https://x.com/fadhilkholaf",
                permanent: true,
            },
        ];
    },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
