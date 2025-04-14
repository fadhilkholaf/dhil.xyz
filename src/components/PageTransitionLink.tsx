"use client";

import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { MouseEvent, ReactNode, Ref } from "react";

import { usePageTransition } from "@/hooks/usePageTransition";
import { usePageTransitionType } from "@/hooks/usePageTransitionType";
import { PageTransitionType } from "@/types/page-transition";
import { cn, sleep } from "@/utils/utils";

const PageTransitionLink = ({
    href,
    transitionType,
    className,
    children,
    ref,
    ...props
}: {
    href: string;
    transitionType?: PageTransitionType;
    className?: string;
    children?: ReactNode;
    ref?: Ref<HTMLAnchorElement>;
} & LinkProps) => {
    const pathname = usePathname();
    const router = useRouter();

    const { setPageTransition } = usePageTransition();
    const { setType } = usePageTransitionType();

    const handlePageTransition = async (
        e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
    ) => {
        e.preventDefault();

        setType(transitionType || "horizontal");

        if (href !== pathname) {
            await sleep(1);

            setPageTransition("exit");

            await sleep(500);

            router.push(href);
        }
    };

    return (
        <Link
            ref={ref}
            href={href}
            onClick={(e) => handlePageTransition(e)}
            className={cn(
                "bg-secondary text-primary size-fit rounded-lg px-4 py-2 no-underline",
                className,
            )}
            scroll={false}
            {...props}
        >
            {children}
        </Link>
    );
};

export default PageTransitionLink;
