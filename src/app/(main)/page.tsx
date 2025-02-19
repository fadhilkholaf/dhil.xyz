export const revalidate = 0;

import { getCurrentlyPlaying } from "@/lib/spotify";

import Hero from "./_components/parts/Hero";
import Mood from "./_components/parts/Mood";

const HomePage = async () => {
  const response = await getCurrentlyPlaying();

  return (
    <main className="layout flex h-fit flex-col">
      <Hero />
      <Mood data={response} />
    </main>
  );
};

export default HomePage;
