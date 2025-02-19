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

export const getCurrentlyPlaying = async (): Promise<
  SpotifyCurrentlyPlayingInterface | false
> => {
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
    return false;
  }

  const currentlyPlaying = await response.json();

  if (currentlyPlaying.currently_playing_type !== "track") {
    return false;
  }

  const firstArtist = await getArtist(currentlyPlaying.item.artists[0].id);

  const data: SpotifyCurrentlyPlayingInterface = {
    title: currentlyPlaying.item.name,
    image: currentlyPlaying.item.album.images[0].url,
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
    url: currentlyPlaying.item.external_urls.spotify,
  };

  return data;
};

export const getArtist = async (id: string): Promise<any | false> => {
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
