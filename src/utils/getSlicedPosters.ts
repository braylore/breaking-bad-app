import { IPosterParams } from '../types/IPosters';

export const getSlicedPosters = (currentSlice: number, posters: IPosterParams[]): IPosterParams[] => {
  return posters.slice(18 * currentSlice - 18, 18 * currentSlice);
};
