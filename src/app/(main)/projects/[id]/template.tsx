import { ReactNode } from "react";

import PageTransitionWrapper from "@/components/wrappers/PageTransitionWrapper";

const ProjectDetailsTemplate = ({ children }: { children: ReactNode }) => {
    return <PageTransitionWrapper>{children}</PageTransitionWrapper>;
};

export default ProjectDetailsTemplate;
