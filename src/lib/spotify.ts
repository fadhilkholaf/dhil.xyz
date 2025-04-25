"use server";

import {
    SpotifyArtistInterface,
    SpotifyCurrentlyPlayingInterface,
} from "@/types/spotify";

export const getAccessToken = async (): Promise<{
    access_token: string;
} | null> => {
    try {
        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                Authorization:
                    "Basic " +
                    Buffer.from(
                        `${process.env.SPOTIFY_CLIENT_ID!}:${process.env.SPOTIFY_CLIENT_SECRET!}`,
                    ).toString("base64"),
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                grant_type: "refresh_token",
                refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
            }),
        });

        return await response.json();
    } catch (error) {
        console.log(error);

        return null;
    }
};

export const getCurrentlyPlaying =
    async (): Promise<SpotifyCurrentlyPlayingInterface | null> => {
        try {
            const auth = await getAccessToken();

            if (!auth) {
                return null;
            }

            const response = await fetch(
                "https://api.spotify.com/v1/me/player/currently-playing",
                {
                    headers: {
                        Authorization: `Bearer ${auth.access_token}`,
                    },
                },
            );

            if (response.status !== 200) {
                return null;
            }

            const currentlyPlaying = await response.json();

            if (
                currentlyPlaying.currently_playing_type !== "track" ||
                !currentlyPlaying.item.id
            ) {
                return null;
            }

            const firstArtist = await getArtist(
                currentlyPlaying.item.artists[0].id,
                auth.access_token,
            );

            if (!firstArtist) {
                return null;
            }

            const data: SpotifyCurrentlyPlayingInterface = {
                image: currentlyPlaying.item.album.images[1].url,
                title: currentlyPlaying.item.name,
                artists: currentlyPlaying.item.artists.map(
                    (artist: SpotifyArtistInterface, i: number) => {
                        if (i === 0) {
                            return {
                                id: artist.id,
                                name: artist.name,
                                image: firstArtist.images[1].url,
                                genres: firstArtist.genres,
                            };
                        }
                        return { id: artist.id, name: artist.name };
                    },
                ),
                album: currentlyPlaying.item.album.name,
                url: currentlyPlaying.item.external_urls.spotify,
                progress: currentlyPlaying.progress_ms,
                duration: currentlyPlaying.item.duration_ms,
            };

            return data;
        } catch (error) {
            console.log(error);

            return null;
        }
    };

export const getArtist = async (
    id: string,
    access_token: string,
): Promise<{ images: { url: string }[]; genres: string[] } | null> => {
    try {
        const response = await fetch(
            `https://api.spotify.com/v1/artists/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            },
        );

        if (response.status !== 200) {
            return null;
        }

        const artist = await response.json();

        return artist;
    } catch (error) {
        console.log(error);

        return null;
    }
};
