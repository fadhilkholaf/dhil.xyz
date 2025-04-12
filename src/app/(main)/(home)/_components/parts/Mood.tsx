import Image from "next/image";

import { SpotifyCurrentlyPlayingInterface } from "@/types/spotify";

import DummyImage from "@/public/images/home/lily-squared.jpg";
import Spotify_Primary_Logo_RGB_Black from "@/public/images/spotify/Spotify_Primary_Logo_RGB_Black.png";

const Mood = ({
    data,
}: {
    data: SpotifyCurrentlyPlayingInterface | false | "loading";
}) => {
    return (
        <section className="flex h-fit w-full items-center">
            <main className="flex h-fit w-full flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-y-4 sm:w-1/2">
                    <h1>Current Mood</h1>
                    {data === "loading" ? (
                        <p>Loading</p>
                    ) : data ? (
                        <>
                            {data.artists?.[0].genres && (
                                <p>[{data.artists[0].genres.join(", ")}]</p>
                            )}
                            <div>
                                <h4>{`${data.title} / ${data.album}`}</h4>
                                <p>
                                    {`${data.artists.map((artist) => artist.name).join(", ")}`}
                                </p>
                            </div>
                        </>
                    ) : (
                        <p>Not Playing</p>
                    )}
                    {data !== "loading" && data && (
                        <a
                            href={data.url}
                            target="_blank"
                            className="flex w-fit flex-row gap-2 no-underline"
                        >
                            <Image
                                src={Spotify_Primary_Logo_RGB_Black}
                                alt="Spotify_Primary_Logo_RGB_Black"
                                className="h-[24px] w-fit"
                            />
                            <span className="underline">Listen On Spotify</span>{" "}
                            →
                        </a>
                    )}
                </div>
                <Image
                    src={data !== "loading" && data ? data.image : DummyImage}
                    alt="mood"
                    width={data ? 640 : undefined}
                    height={data ? 640 : undefined}
                    priority
                    unoptimized
                    className="aspect-square h-fit w-2/3 min-w-[200px] self-center object-cover sm:w-1/3 sm:self-baseline"
                />
            </main>
        </section>
    );
};

export default Mood;
