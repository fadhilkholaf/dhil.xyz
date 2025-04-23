import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getAllBlogMetadata } from "@/actions/blog";
import PageTransitionLink from "@/components/PageTransitionLink";
import { BASE_URL } from "@/constants/constants";
import { formatDate } from "@/utils/utils";

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> => {
    const { id } = await params;

    const allBlog = await getAllBlogMetadata();

    const blog = allBlog.find((p) => p.fileName === id);

    if (!blog) {
        return { title: "Home" };
    }

    return {
        title: blog.title,
        description: blog.description,
        openGraph: {
            siteName: "Fadhilkholaf",
            url: BASE_URL,
            images: [
                {
                    url: `${BASE_URL}/api/og?title=${decodeURIComponent("Blog:")}&name=${encodeURIComponent(blog.title)}`,
                    width: 800,
                    height: 418,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            creator: "@fadhilkholaf",
            images: `${BASE_URL}/api/og?title=${decodeURIComponent("Blog:")}&name=${encodeURIComponent(blog.title)}`,
        },
    };
};

const ProjectDetailsPage = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;

    const allBlog = await getAllBlogMetadata();

    const blog = allBlog.find((p) => p.fileName === id);

    if (!blog) {
        notFound();
    }

    const { default: Blog } = await import(
        `@/contents/blog/${blog.fileName}.mdx`
    );

    return (
        <>
            <main className="flex flex-col gap-y-4">
                <div className="flex w-full justify-end">
                    <PageTransitionLink href="/blog">
                        <span className="animated-underline before:bg-primary">
                            ← Back to blog
                        </span>
                    </PageTransitionLink>
                </div>
                <div>
                    <h1>{blog.title}</h1>
                    <p>{formatDate(new Date(blog.date))}</p>
                </div>
                <div className="flex flex-col gap-y-2">
                    <Image
                        src={blog.imageURL}
                        alt={blog.title}
                        width={1280}
                        height={720}
                        priority
                        className="w-full rounded-lg"
                    />
                    <ul className="flex flex-wrap gap-2">
                        {blog.tags.map((t, i) => (
                            <li
                                key={i}
                                className="bg-secondary text-primary rounded-lg px-2 py-1 text-xs"
                            >
                                {t}
                            </li>
                        ))}
                    </ul>
                </div>
                <Blog />
            </main>
        </>
    );
};

export default ProjectDetailsPage;
