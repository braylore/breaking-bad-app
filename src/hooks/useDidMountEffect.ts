import { useEffect, MutableRefObject, DependencyList } from 'react';

export const useDidMountEffect = (didMount: MutableRefObject<boolean>, callback: () => void, deps: DependencyList) => {
  useEffect(() => {
    if (didMount.current) {
      callback();
    } else {
      didMount.current = true;
    }
  }, deps);
};
