import PageTransitionLink from "@/components/PageTransitionLink";
import PageTransitionWrapper from "@/components/wrappers/PageTransitionWrapper";

const NotFoundPage = () => {
    return (
        <PageTransitionWrapper>
            <article className="flex h-[50vh] flex-col justify-center gap-2">
                <h1>Page Not Found</h1>
                <PageTransitionLink href="/">
                    Back to home page →
                </PageTransitionLink>
            </article>
        </PageTransitionWrapper>
    );
};

export default NotFoundPage;
