"use server";

import PageTransitionWrapper from "@/components/wrappers/PageTransitionWrapper";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <PageTransitionWrapper>
      <main className="flex size-full items-center justify-center">{id}</main>
    </PageTransitionWrapper>
  );
};

export default page;
