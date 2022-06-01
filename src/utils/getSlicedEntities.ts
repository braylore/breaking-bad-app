// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getSlicedEntities = (range: number, currentPage: number, entities: any[]): any[] => {
  return entities.slice(range * currentPage - range, range * currentPage);
};
