import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllSnippetsMetadata } from "@/actions/snippets";
import { BASE_URL } from "@/constants/constants";
import PageTransitionLink from "@/components/PageTransitionLink";

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> => {
    const { id } = await params;

    const allSnippets = await getAllSnippetsMetadata();

    const snippet = allSnippets.find((p) => p.fileName === id);

    if (!snippet) {
        return { title: "Home" };
    }

    return {
        title: snippet.title,
        description: snippet.description,
        openGraph: {
            siteName: "Fadhilkholaf",
            url: BASE_URL,
            images: [
                {
                    url: `${BASE_URL}/api/og?title=${decodeURIComponent("Snippet:")}&name=${encodeURIComponent(snippet.title)}`,
                    width: 800,
                    height: 418,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            creator: "@fadhilkholaf",
            images: `${BASE_URL}/api/og?title=${decodeURIComponent("Snippet:")}&name=${encodeURIComponent(snippet.title)}`,
        },
    };
};

const ProjectDetailsPage = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;

    const allSnippets = await getAllSnippetsMetadata();

    const snippet = allSnippets.find((p) => p.fileName === id);

    if (!snippet) {
        notFound();
    }

    const { default: Snippet } = await import(
        `@/public/contents/snippets/${snippet.fileName}.mdx`
    );

    return (
        <>
            <main className="flex flex-col gap-y-4">
                <div className="flex w-full justify-end">
                    <PageTransitionLink href="/snippets">
                        <span className="animated-underline before:bg-primary">
                            ← Back to snippets
                        </span>
                    </PageTransitionLink>
                </div>
                <h1>{snippet.title}</h1>
                <div className="flex flex-col gap-y-2">
                    <ul className="flex flex-wrap gap-2">
                        {snippet.tags.map((t, i) => (
                            <li
                                key={i}
                                className="bg-secondary text-primary rounded-lg px-2 py-1 text-xs"
                            >
                                {t}
                            </li>
                        ))}
                    </ul>
                </div>
                <Snippet />
            </main>
        </>
    );
};

export default ProjectDetailsPage;
