import { ReactNode } from "react";

import PageTransitionWrapper from "@/components/wrappers/PageTransitionWrapper";

const NoteDetailsTemplate = ({ children }: { children: ReactNode }) => {
    return <PageTransitionWrapper>{children}</PageTransitionWrapper>;
};

export default NoteDetailsTemplate;
