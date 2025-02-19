"use client";

import PageTransitionLink from "./PageTransitionLink";

const menus: { label: string; href: string }[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "About",
    href: "/about",
  },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-40 flex gap-8 bg-white">
      {menus.map((menu, i) => (
        <PageTransitionLink key={i} href={menu.href}>
          {menu.label}
        </PageTransitionLink>
      ))}
    </nav>
  );
};

export default Navbar;
