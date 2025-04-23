import { readdirSync } from "fs";
import { join } from "path";

export const getMDXMetadata = async (dirName: string[], fileName: string) => {
    const { metadata } = await import(
        `@/public/contents/${dirName.join("/")}/${fileName}`
    );

    return metadata;
};

export const getAllMDXMetadata = async (dirName: string[]) => {
    return await Promise.all(
        readdirSync(join(process.cwd(), "public", "contents", ...dirName), {
            withFileTypes: true,
        })
            .filter(
                (d) =>
                    !d.isDirectory() &&
                    d.name.split(".").slice(-1)[0] === "mdx",
            )
            .map(async (d) => {
                return {
                    ...(await getMDXMetadata(dirName, d.name)),
                    fileName: d.name.split(".").slice(0, -1).join(""),
                };
            }),
    );
};
