import { ReactNode } from "react";

import PageTransitionWrapper from "@/components/wrappers/PageTransitionWrapper";

const AttributionTemplate = ({ children }: { children: ReactNode }) => {
    return (
        <PageTransitionWrapper>
            <article className="flex flex-col gap-y-4">{children}</article>
        </PageTransitionWrapper>
    );
};

export default AttributionTemplate;
