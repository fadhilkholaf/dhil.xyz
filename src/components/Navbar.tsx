"use client";

import PageTransitionLink from "./PageTransitionLink";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-40 flex gap-8 bg-white">
      <PageTransitionLink href="/">Home</PageTransitionLink>
      <PageTransitionLink href="/work">Work</PageTransitionLink>
      <PageTransitionLink href="/work/detail">Work Detail</PageTransitionLink>
      <PageTransitionLink href="/work/detail/amba">
        Delayed 3s server components
      </PageTransitionLink>
      <PageTransitionLink href="/work/detail/tukam">
        Delayed 3s server components
      </PageTransitionLink>
    </nav>
  );
};

export default Navbar;
