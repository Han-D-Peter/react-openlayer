import { DependencyList, useEffect, useRef } from "react";

export function useDidUpdate(func: () => void, dependencies: DependencyList) {
  const ref = useRef(false);

  useEffect(() => {
    if (ref.current) {
      func();
    } else {
      ref.current = true;
    }
  }, dependencies);
}
