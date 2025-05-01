export interface PlaylistItemWithMultipleImages {
  id: number;
  title: string;
  image: {
    id: number;
    path: string;
    alt: string;
  }[];
  url: string;
}

export interface PlaylistItemWithSingleImage {
  id: number;
  title: string;
  image: string;
  alt: string;
  url: string;
}

export type PlaylistItem = PlaylistItemWithMultipleImages | PlaylistItemWithSingleImage;