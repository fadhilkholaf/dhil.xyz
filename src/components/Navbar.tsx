import Image from "next/image";

import Logo from "@/../public/images/main/fadhilkholaf.svg";
import { menus } from "@/utils/data";

import PageTransitionLink from "./PageTransitionLink";

const Navbar = () => {
  return (
    <nav className="layout fixed top-0 left-1/2 z-40 flex h-fit -translate-x-1/2 justify-between sm:gap-4">
      <PageTransitionLink href="/">
        <Image
          src={Logo}
          alt="logo"
          priority
          className="hidden h-[72px] w-fit overflow-hidden rounded-full bg-gray-800 px-8 py-4 sm:inline-block"
        />
      </PageTransitionLink>
      <ul className="flex h-fit w-full justify-between rounded-full bg-gray-800 px-4 text-pink-200 sm:w-1/2">
        {menus.map((menu, i) => (
          <PageTransitionLink
            key={i}
            href={menu.href}
            className="p-4 no-underline"
          >
            <h4>{menu.label}</h4>
          </PageTransitionLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
