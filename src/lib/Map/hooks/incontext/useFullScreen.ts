import { FullScreen } from "ol/control";
import { useEffect, useRef, useState } from "react";
import { useEffectIfMounted } from "../useEffectIfMounted";
import { useMap } from "./useMap";

export const useFullScreen = () => {
  const map = useMap();
  const ref = useRef<HTMLButtonElement>(null);
  const onBtnRef = useRef<HTMLButtonElement | null>(null);
  const offBtnRef = useRef<HTMLButtonElement | null>(null);
  const [isFull, setIsFull] = useState(false);

  const makeFull = () => {
    onBtnRef.current?.click();
  };

  const makeUnFull = () => {
    offBtnRef.current?.click();
  };

  const toggleFullScreen = () => {
    if (isFull) {
      makeUnFull();
    } else {
      makeFull();
    }
  };

  const onFull = () => {
    setIsFull(true);
  };

  const offFull = () => {
    setIsFull(false);
  };

  useEffectIfMounted(() => {
    if (!map) return;
    const targetMapId = map.getTargetElement().getAttribute("id") as string;

    onBtnRef.current = document.querySelector<HTMLButtonElement>(
      `#${CSS.escape(targetMapId)} .ol-full-screen-false`
    );

    offBtnRef.current = document.querySelector<HTMLButtonElement>(
      `#${CSS.escape(targetMapId)} .ol-full-screen-true`
    );
  }, [isFull, map]);

  useEffect(() => {
    if (!map || !ref.current) return;

    const fullScreenSource = new FullScreen({
      target: ref.current,
    });

    fullScreenSource.on("enterfullscreen", onFull);
    fullScreenSource.on("leavefullscreen", offFull);

    map.addControl(fullScreenSource);

    return () => {
      map.removeControl(fullScreenSource);
      fullScreenSource.un("enterfullscreen", onFull);
      fullScreenSource.un("leavefullscreen", offFull);
    };
  }, [map]);

  return { isFull, toggleFullScreen, makeFull, makeUnFull };
};
