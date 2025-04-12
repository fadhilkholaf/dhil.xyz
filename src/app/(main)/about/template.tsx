import { ReactNode } from "react";

import PageTransitionWrapper from "@/components/wrappers/PageTransitionWrapper";

const AboutTemplate = ({ children }: { children: ReactNode }) => {
    return <PageTransitionWrapper>{children}</PageTransitionWrapper>;
};

export default AboutTemplate;
