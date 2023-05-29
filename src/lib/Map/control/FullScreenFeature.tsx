import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { useMap } from "../hooks";
import { FullScreen } from "ol/control";
import { BsFullscreenExit, BsArrowsFullscreen } from "react-icons/bs";
import ControlGroup from "./layout/ControlGroup";
import Button from "./element/Button";
import useEffectIfMounted from "../hooks/useEffectIfMounted";

const InnerButton = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FullScreenFeature = () => {
  const map = useMap();
  const ref = useRef<HTMLButtonElement>(null);
  const onBtnRef = useRef<HTMLButtonElement | null>(null);
  const offBtnRef = useRef<HTMLButtonElement | null>(null);
  const [isFull, setIsFull] = useState(false);

  useEffectIfMounted(() => {
    onBtnRef.current = document.querySelector<HTMLButtonElement>(
      ".ol-full-screen-false"
    );

    offBtnRef.current = document.querySelector<HTMLButtonElement>(
      ".ol-full-screen-true"
    );
  }, [isFull]);

  const toggleFullScreen = () => {
    if (isFull) {
      offBtnRef.current?.click();
    } else {
      onBtnRef.current?.click();
    }
  };

  const onFull = () => {
    setIsFull(true);
  };

  const offFull = () => {
    setIsFull(false);
  };

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

  return (
    <ControlGroup>
      <Button ref={ref} onClick={toggleFullScreen}>
        <InnerButton>
          {isFull ? <BsFullscreenExit /> : <BsArrowsFullscreen />}
        </InnerButton>
      </Button>
    </ControlGroup>
  );
};

export default FullScreenFeature;
