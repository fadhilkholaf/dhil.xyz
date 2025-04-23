"use server";

import { SnippetMDXMetadata } from "@/types/mdx";

import { getAllMDXMetadata } from "./mdx";

export const getAllSnippetsMetadata = async () => {
    const snippetsMetadata = (await getAllMDXMetadata([
        "snippets",
    ])) as SnippetMDXMetadata[];

    return snippetsMetadata;
};
