"use client";

import PageTransitionLink from "@/components/PageTransitionLink";

const ErrorPage = () => {
  return (
    <main className="layout flex h-[50vh] flex-col justify-center gap-32 pt-32">
      <div>
        <h1>Something Went Wrong</h1>
        <PageTransitionLink href="/">
          <span className="underline">Back to home page</span> →
        </PageTransitionLink>
      </div>
    </main>
  );
};

export default ErrorPage;
