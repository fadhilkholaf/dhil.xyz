"use client";

import PageTransitionLink from "./PageTransitionLink";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-40 flex gap-4 bg-white">
      <PageTransitionLink href="/">Home</PageTransitionLink>
      <PageTransitionLink href="/work">Work</PageTransitionLink>
      <PageTransitionLink href="/work/detail">Work Detail</PageTransitionLink>
      <PageTransitionLink href="/work/detail/amba">
        Work Detail
      </PageTransitionLink>
      <PageTransitionLink href="/work/detail/tukam">
        Work Detail
      </PageTransitionLink>
    </nav>
  );
};

export default Navbar;
