import fs from "fs";
import path from "path";

export const getMDXMetadata = async (dirName: string[], fileName: string) => {
    const { metadata } = await import(
        `@/contents/${dirName.join("/")}/${fileName}`
    );

    return metadata;
};

export const getAllMDXMetadata = async (dirName: string[]) => {
    if (
        !fs.existsSync(path.join(process.cwd(), "src", "contents", ...dirName))
    ) {
        return [];
    }

    return await Promise.all(
        fs
            .readdirSync(
                path.join(process.cwd(), "src", "contents", ...dirName),
                {
                    withFileTypes: true,
                },
            )
            .filter((d) => !d.isDirectory() && path.extname(d.name) === ".mdx")
            .map(async (d) => {
                return {
                    ...(await getMDXMetadata(dirName, d.name)),
                    fileName: d.name.replace(path.extname(d.name), ""),
                };
            }),
    );
};
