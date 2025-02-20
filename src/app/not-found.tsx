import PageTransitionLink from "@/components/PageTransitionLink";

const NotFoundPage = () => {
  return (
    <main className="layout flex h-[50vh] flex-col justify-center gap-32 pt-32">
      <div>
        <h1>Page Not Found</h1>
        <PageTransitionLink href="/">
          <span className="underline">Back to home page</span> →
        </PageTransitionLink>
      </div>
    </main>
  );
};

export default NotFoundPage;
