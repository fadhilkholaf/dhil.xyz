export interface SpotifyArtistInterface {
    id: string;
    name: string;
    image?: string;
    genres?: string[];
}

export interface SpotifyCurrentlyPlayingInterface {
    image: string;
    title: string;
    artists: SpotifyArtistInterface[];
    album: string;
    url: string;
}
