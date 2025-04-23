import { getAllSnippetsMetadata } from "@/actions/snippets";
import Snippet from "@/components/Snippet";

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
