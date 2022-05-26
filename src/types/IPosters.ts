export interface IPosterParams {
  id: string;
  link: string;
  aspectRatio: number;
  width: number;
  height: number;
}

export interface IPosters {
  errorMessage: string;
  posters: IPosterParams[];
  backdrops: IPosterParams[];
}
