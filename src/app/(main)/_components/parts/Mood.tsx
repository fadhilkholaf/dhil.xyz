"use client";

import Link from "next/link";
import Image from "next/image";

import DummyImage from "@/../public/images/home/lily-squared.jpg";
import { useCursorImage } from "@/hooks/useCursorImage";
import { SpotifyCurrentlyPlayingInterface } from "@/types/spotify";

const Mood = ({ data }: { data: SpotifyCurrentlyPlayingInterface | false }) => {
  const { setCursorImage } = useCursorImage();

  return (
    <section className="flex h-fit w-full items-center">
      <main className="flex h-fit w-full flex-col gap-16 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-4 sm:w-1/2">
          <div>
            <h1>Current Mood</h1>
            {data && data.artists[0].genres && (
              <p>[{data.artists[0].genres.join(", ")}]</p>
            )}
          </div>
          <p>
            {`${
              data
                ? data.artists.map((artist) => artist.name).join(", ")
                : "Unknown"
            } - ${data ? data.title : "Unnamed"}`}
          </p>
          {data && (
            <Link
              href={data.url}
              target="_blank"
              onPointerEnter={() =>
                setCursorImage(data ? data.image : "/images/home/lily.jpg")
              }
              onPointerLeave={() => setCursorImage(null)}
              className="w-fit no-underline"
            >
              <span className="underline">Listen together</span> →
            </Link>
          )}
        </div>
        <Image
          src={data ? data.image : DummyImage}
          alt="mood"
          width={data ? 640 : undefined}
          height={data ? 640 : undefined}
          priority
          onPointerEnter={() =>
            setCursorImage(
              data
                ? (data.artists[0].image ?? "/images/home/lily.jpg")
                : "/images/home/lily.jpg",
            )
          }
          onPointerLeave={() => setCursorImage(null)}
          className="aspect-square h-fit w-2/3 min-w-[300px] self-center object-cover sm:w-1/3"
        />
      </main>
    </section>
  );
};

export default Mood;
