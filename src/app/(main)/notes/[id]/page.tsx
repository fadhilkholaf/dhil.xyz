import { Metadata } from "next";
import { notFound } from "next/navigation";

import PageTransitionLink from "@/components/PageTransitionLink";
import { notes } from "@/constants/data/notes";
import { baseUrl } from "@/constants/data/urls";

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> => {
    const { id } = await params;

    const note = notes.find((n) => n.mdx === id);

    if (!note) {
        return { title: "Home" };
    }

    const ogURL = `${baseUrl}/api/og/notes/${id}`;

    return {
        title: note.title,
        description: note.description,
        openGraph: {
            siteName: "Fadhilkholaf",
            url: baseUrl,
            images: [
                {
                    url: ogURL,
                    width: 800,
                    height: 418,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            creator: "@fadhilkholaf",
            images: ogURL,
        },
    };
};

const ProjectDetailsPage = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;

    const note = notes.find((n) => n.mdx === id);

    if (!note) {
        notFound();
    }

    const noteIndex = notes.findIndex((n) => n.mdx === id);

    const { default: NoteDetail } = await import(
        `@/contents/notes/${note.mdx}.mdx`
    );

    const nextNote = notes[noteIndex + 1 < notes.length ? noteIndex + 1 : 0];

    return (
        <>
            <main className="flex flex-col gap-y-8">
                <PageTransitionLink
                    href="/notes"
                    transitionType="vertical"
                    className="text-secondary flex gap-x-2 bg-transparent"
                >
                    ←<span className="animated-underline">Back to notes</span>
                </PageTransitionLink>
                <header className="flex flex-col gap-y-4">
                    <h1>{note.title}</h1>
                </header>
                <main className="flex flex-col gap-y-4">
                    <NoteDetail />
                </main>
            </main>
            <footer className="flex flex-col gap-y-8">
                <PageTransitionLink
                    href={`/notes/${nextNote.mdx}`}
                    transitionType="vertical"
                >
                    Next Note →
                </PageTransitionLink>
            </footer>
        </>
    );
};

export default ProjectDetailsPage;
