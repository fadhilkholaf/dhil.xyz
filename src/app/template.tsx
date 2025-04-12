import { ReactNode } from "react";

import PageTransitionWrapper from "@/components/wrappers/PageTransitionWrapper";

const RootTemplate = ({ children }: { children: ReactNode }) => {
    return <PageTransitionWrapper>{children}</PageTransitionWrapper>;
};

export default RootTemplate;
