import { Metadata } from "next";

import { getAllSnippetsMetadata } from "@/actions/snippets";
import Snippet from "@/components/Snippet";
import { BASE_URL, OG_BASE_API_URL } from "@/constants/constants";

export const metadata: Metadata = {
    title: "Snippets",
    openGraph: {
        siteName: "Fadhilkholaf",
        url: BASE_URL,
        images: [
            {
                url: `${OG_BASE_API_URL}?name=Snippets`,
                width: 800,
                height: 418,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        creator: "@fadhilkholaf",
        images: `${OG_BASE_API_URL}?name=Snippets`,
    },
};

const SnippetsPage = async () => {
    const snippetsMetadata = await getAllSnippetsMetadata();

    return (
        <section className="flex h-fit w-full flex-col gap-16">
            <header>
                <h1>Snippets</h1>
            </header>
            <main>
                <ul className="grid grid-cols-1 gap-16 md:grid-cols-2">
                    {snippetsMetadata.map((s, i) => (
                        <Snippet key={i} snippet={s} />
                    ))}
                </ul>
            </main>
        </section>
    );
};

export default SnippetsPage;
