import { SnippetMDXMetadata } from "@/types/mdx";

import PageTransitionLink from "./PageTransitionLink";

const Snippet = ({ snippet }: { snippet: SnippetMDXMetadata }) => {
    return (
        <li className="flex flex-col gap-y-4">
            <main>
                <h2>{snippet.title}</h2>
                <p>{snippet.tags.slice(0, 3).join(" • ")}</p>
            </main>
            <footer>
                <PageTransitionLink
                    href={`/snippets/${snippet.fileName}`}
                    transitionType="vertical"
                    className="inline-block"
                >
                    <span className="animated-underline before:bg-primary">
                        Details →
                    </span>
                </PageTransitionLink>
            </footer>
        </li>
    );
};

export default Snippet;
