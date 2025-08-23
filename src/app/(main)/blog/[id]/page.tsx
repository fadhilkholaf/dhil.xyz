import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getAllBlogMetadata } from "@/actions/blog";
import PageTransitionLink from "@/components/PageTransitionLink";
import { BASE_URL, OG_BASE_API_URL } from "@/constants/constants";
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
            siteName: "Dhil",
            url: BASE_URL,
            images: [
                {
                    url: `${OG_BASE_API_URL}?t=${decodeURIComponent("Blog:")}&s=${encodeURIComponent(blog.title)}`,
                    width: 600,
                    height: 315,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            creator: "@fadhilkholaf",
            images: `${OG_BASE_API_URL}?t=${decodeURIComponent("Blog:")}&s=${encodeURIComponent(blog.title)}`,
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
