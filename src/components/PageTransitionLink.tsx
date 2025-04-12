"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { JSX, MouseEvent, ReactNode, Ref } from "react";

import { usePageTransition } from "@/hooks/usePageTransition";
import { usePageTransitionType } from "@/hooks/usePageTransitionType";
import { PageTransitionType } from "@/types/page-transition";
import { cn, sleep } from "@/utils/utils";

const PageTransitionLink = ({
    href,
    transitionType,
    children,
    ref,
    ...props
}: {
    href: string;
    transitionType?: PageTransitionType;
    children?: ReactNode;
    ref?: Ref<HTMLAnchorElement>;
} & JSX.IntrinsicElements["a"]) => {
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
                "size-fit rounded-lg bg-gray-800 px-4 py-2 text-pink-200 no-underline",
                props.className,
            )}
            scroll={false}
            {...props}
        >
            {children}
        </Link>
    );
};

export default PageTransitionLink;
