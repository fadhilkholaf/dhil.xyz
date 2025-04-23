import { Suspense } from "react";

import Hero from "./_components/parts/Hero";
import Projects from "./_components/parts/Projects";

const HomePage = () => {
    return (
        <>
            <Hero />
            <Suspense>
                <Projects />
            </Suspense>
        </>
    );
};

export default HomePage;
