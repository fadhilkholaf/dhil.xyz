"use server";

import {
    SpotifyArtistInterface,
    SpotifyCurrentlyPlayingInterface,
} from "@/types/spotify";

export const getAccessToken = async () => {
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
};

export const getCurrentlyPlaying =
    async (): Promise<SpotifyCurrentlyPlayingInterface | null> => {
        const { access_token } = await getAccessToken();

        const response = await fetch(
            "https://api.spotify.com/v1/me/player/currently-playing",
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
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
        );

        const data: SpotifyCurrentlyPlayingInterface = {
            image: currentlyPlaying.item.album.images[0].url,
            title: currentlyPlaying.item.name,
            artists: currentlyPlaying.item.artists.map(
                (artist: SpotifyArtistInterface, i: number) => {
                    if (i === 0 && firstArtist !== false) {
                        return {
                            id: artist.id,
                            name: artist.name,
                            image: firstArtist.images[0].url,
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
    };

export const getArtist = async (
    id: string,
): Promise<{ images: { url: string }[]; genres: string[] } | false> => {
    const { access_token } = await getAccessToken();

    const response = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });

    if (response.status !== 200) {
        return false;
    }

    const artist = await response.json();

    return artist;
};
