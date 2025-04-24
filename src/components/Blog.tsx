import Image from "next/image";

import { BlogMDXMetadata } from "@/types/mdx";
import { formatDate } from "@/utils/utils";

import PageTransitionLink from "./PageTransitionLink";

const Blog = ({ blog }: { blog: BlogMDXMetadata }) => {
    return (
        <li>
            <PageTransitionLink
                href={`/blog/${blog.fileName}`}
                transitionType="vertical"
                className="p-0"
            >
                <article className="group relative overflow-hidden rounded-lg">
                    <header>
                        <Image
                            src={blog.imageURL}
                            alt={blog.title}
                            width={1280}
                            height={720}
                            priority
                            className="aspect-video h-fit w-full object-cover brightness-75 transition-[filter,scale] duration-[1000ms] ease-in-out group-hover:scale-[102.5%] group-hover:brightness-50 md:aspect-[3/1]"
                        />
                    </header>
                    <main className="absolute top-0 left-0 flex size-full flex-col justify-between px-4 py-2">
                        <header>
                            <h1 className="font-italiana text-3xl font-normal tracking-wide italic md:text-5xl">
                                {blog.title}
                            </h1>
                            <p>{blog.tags.slice(0, 3).join(" • ")}</p>
                        </header>
                        <main className="flex justify-center">
                            <p className="transition-[opacity] duration-[250ms] ease-in-out group-hover:opacity-100 md:opacity-0">
                                Details →
                            </p>
                        </main>
                        <main className="flex justify-end">
                            <div className="flex flex-col items-end">
                                <h1 className="font-italiana text-3xl font-normal tracking-wide italic md:text-5xl">
                                    {formatDate(new Date(blog.date))}
                                </h1>
                                <p>{blog.description}</p>
                            </div>
                        </main>
                    </main>
                </article>
            </PageTransitionLink>
        </li>
    );
};

export default Blog;
