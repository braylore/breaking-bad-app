import { MutableRefObject, RefObject } from 'react';

export const useObserver = (
  observer: MutableRefObject<IntersectionObserver | undefined>,
  ref: RefObject<Element>,
  canLoad: boolean,
  isLoading: boolean,
  callback: () => void
) => {
  if (isLoading) return;
  if (observer.current) observer.current.disconnect();

  const cb = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting && canLoad) {
      callback();
    }
  };
  observer.current = new IntersectionObserver(cb);
  if (ref.current !== null) {
    observer.current.observe(ref.current);
  }
};
