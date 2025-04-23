import { ReactNode } from "react";

import PageTransitionWrapper from "@/components/wrappers/PageTransitionWrapper";

const BlogDetailTemplate = ({ children }: { children: ReactNode }) => {
    return <PageTransitionWrapper>{children}</PageTransitionWrapper>;
};

export default BlogDetailTemplate;
