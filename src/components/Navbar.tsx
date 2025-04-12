import Image from "next/image";

import Logo from "@/../public/images/main/fadhilkholaf.svg";
import { menus } from "@/utils/data";
import { cn } from "@/utils/utils";

import PageTransitionLink from "./PageTransitionLink";

const Navbar = () => {
    return (
        <nav
            className={cn(
                "layout fixed top-0 left-1/2 z-40 flex h-fit -translate-x-1/2 justify-between sm:gap-4",
                "before:mask-b-from-black before:mask-b-from-0% before:mask-b-to-transparent before:mask-alpha",
                "before: before:pointer-events-none before:absolute before:top-0 before:left-0 before:-z-10 before:h-[150%] before:w-full before:bg-pink-200",
            )}
        >
            <PageTransitionLink
                href="/"
                className="hidden size-fit rounded-lg bg-gray-800 px-4 py-2 text-pink-200 no-underline sm:inline"
            >
                <Image
                    src={Logo}
                    alt="logo"
                    priority
                    className="h-[44px] w-fit overflow-hidden rounded-lg bg-gray-800"
                />
            </PageTransitionLink>
            <ul className="flex h-fit w-full justify-between rounded-lg bg-gray-800 text-pink-200 sm:w-1/2">
                {menus.map((menu, i) => (
                    <PageTransitionLink key={i} href={menu.href}>
                        <h4>{menu.label}</h4>
                    </PageTransitionLink>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
