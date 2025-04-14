"use client";

import PageTransitionLink from "@/components/PageTransitionLink";
import PageTransitionWrapper from "@/components/wrappers/PageTransitionWrapper";

const ErrorPage = () => {
    return (
        <PageTransitionWrapper>
            <main className="layout flex h-[50vh] flex-col justify-center gap-32 pt-32">
                <div>
                    <h1>Something Went Wrong</h1>
                    <PageTransitionLink href="/">
                        Back to home page →
                    </PageTransitionLink>
                </div>
            </main>
        </PageTransitionWrapper>
    );
};

export default ErrorPage;
