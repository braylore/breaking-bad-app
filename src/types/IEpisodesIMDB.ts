export interface IEpisodesIMDBParams {
  episodeNumber: string;
  id: string;
  imDbRating: string;
  imDbRatingCount: string;
  image: string;
  plot: string;
  released: string;
  seasonNumber: string;
  title: string;
  year: string;
}

export interface IEpisodesRespIMDB {
  errorMessage: string;
  episodes: IEpisodesIMDBParams[];
}
