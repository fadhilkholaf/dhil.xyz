import { ReactNode } from "react";

import PageTransitionWrapper from "@/components/wrappers/PageTransitionWrapper";

const HomeTemplate = ({ children }: { children: ReactNode }) => {
  return <PageTransitionWrapper>{children}</PageTransitionWrapper>;
};

export default HomeTemplate;
