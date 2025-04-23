export type MDXMetadata = {
    title: string;
    description: string;
};

export type ProjectMDXMetadata = MDXMetadata & {
    tags: string[];
    date: string;
    fileName: string;
    imageURL: string;
    previewURL?: string;
    sourceCodeURL?: string;
};

export type SnippetMDXMetadata = MDXMetadata & {
    tags: string[];
    fileName: string;
};

export type BlogMDXMetadata = MDXMetadata & {
    tags: string[];
    date: string;
    fileName: string;
    imageURL: string;
};
