import { DependencyList, useEffect, useMemo } from "react";
import useIsMount from "./useIsMounted";

const useEffectIfMounted = (
  callback: () => void | Function,
  deps: DependencyList
) => {
  const isMount = useIsMount();
  const dependency = useMemo(() => [isMount, ...deps], [isMount, deps]);

  useEffect(() => {
    if (isMount) {
      callback();
    }
  }, dependency);
};

export default useEffectIfMounted;
