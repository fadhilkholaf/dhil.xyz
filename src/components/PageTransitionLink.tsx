"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { JSX, MouseEvent, ReactNode, Ref } from "react";

import { usePageTransition } from "@/hooks/usePageTransition";
import { cn, sleep } from "@/utils/utils";

const PageTransitionLink = ({
  href,
  children,
  ref,
  ...props
}: {
  href: string;
  children: ReactNode;
  ref?: Ref<HTMLAnchorElement>;
} & JSX.IntrinsicElements["a"]) => {
  const pathname = usePathname();
  const router = useRouter();

  const { setPageTransition } = usePageTransition();

  const handlePageTransition = async (
    e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();

    if (href === pathname) {
      router.refresh();
    } else {
      setPageTransition("exit");

      await sleep(900);

      router.push(href);
    }
  };

  return (
    <Link
      ref={ref}
      href={href}
      onClick={(e) => handlePageTransition(e)}
      className={cn("no-underline", props.className)}
      {...props}
    >
      {children}
    </Link>
  );
};

export default PageTransitionLink;
