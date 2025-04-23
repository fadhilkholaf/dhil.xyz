import Image, { ImageProps } from "next/image";
import { ComponentPropsWithoutRef } from "react";

import type { MDXComponents } from "mdx/types";
import { highlight } from "sugar-high";

import PageTransitionLink from "@/components/PageTransitionLink";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: (props: ComponentPropsWithoutRef<"h1">) => (
            <h1 className="pt-16" {...props} />
        ),
        h2: (props: ComponentPropsWithoutRef<"h1">) => (
            <h2 className="pt-8" {...props} />
        ),
        h3: (props: ComponentPropsWithoutRef<"h1">) => (
            <h3 className="pt-4" {...props} />
        ),
        a: ({ href, ...props }: ComponentPropsWithoutRef<"a">) => {
            if (href?.startsWith("/")) {
                return <PageTransitionLink href={href} {...props} />;
            }
            return (
                <a
                    href={href}
                    target="_blank"
                    className="animated-underline"
                    {...props}
                />
            );
        },
        blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
            <blockquote
                className="rounded-lg border-l-2 bg-pink-300/50 px-2 py-1"
                {...props}
            />
        ),
        code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
            const codeHTML = highlight(children as string);
            return (
                <code
                    dangerouslySetInnerHTML={{ __html: codeHTML }}
                    {...props}
                />
            );
        },
        hr: (props: ComponentPropsWithoutRef<"hr">) => (
            <hr className="my-4" {...props} />
        ),
        ul: (props: ComponentPropsWithoutRef<"ul">) => (
            <ul className="list-disc pl-5" {...props} />
        ),
        ol: (props: ComponentPropsWithoutRef<"ol">) => (
            <ul className="list-decimal pl-8" {...props} />
        ),
        li: (props: ComponentPropsWithoutRef<"li">) => (
            <li className="mt-2" {...props} />
        ),
        img: (props: ImageProps) => {
            const { alt, ...rest } = props;
            return (
                <Image
                    alt={alt}
                    width={1280}
                    height={720}
                    priority
                    className="mt-2 w-full rounded-lg"
                    {...rest}
                />
            );
        },
        ...components,
    };
}
