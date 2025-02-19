export interface SpotifyArtistInterface {
  id: string;
  name: string;
  image?: string;
  genres?: string[];
}

export interface SpotifyCurrentlyPlayingInterface {
  title: string;
  artists: SpotifyArtistInterface[];
  image: string;
  url: string;
}
