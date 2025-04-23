import { Metadata } from "next";

import { getAllBlogMetadata } from "@/actions/blog";
import { BASE_URL, OG_BASE_API_URL } from "@/constants/constants";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
    title: "Blog",
    openGraph: {
        siteName: "Fadhilkholaf",
        url: BASE_URL,
        images: [
            {
                url: `${OG_BASE_API_URL}?name=Blog`,
                width: 800,
                height: 418,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        creator: "@fadhilkholaf",
        images: `${OG_BASE_API_URL}?name=Blog`,
    },
};

const BlogPage = async () => {
    const allBlog = await getAllBlogMetadata();

    return (
        <section className="flex h-fit w-full flex-col gap-y-8">
            <header>
                <h1>Blog</h1>
                <p>One of the way expressing myself. Sometimes writing shit.</p>
            </header>
            <main>
                <ul className="flex flex-col gap-y-8">
                    {allBlog.map((b, i) => (
                        <Blog key={i} blog={b} />
                    ))}
                </ul>
            </main>
        </section>
    );
};

export default BlogPage;
