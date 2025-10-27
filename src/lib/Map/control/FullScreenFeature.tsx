/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import { useMap } from "../hooks";
import { FullScreen } from "ol/control";
import { ControlGroup } from "./layout/ControlGroup";
import { Button } from "./element/Button";
import { useEffectIfMounted } from "../hooks/useEffectIfMounted";
import { FullScreenIcon } from "../constants/icons/FullScreenIcon";
import { FullScreenExitIcon } from "../constants/icons/FullScreenExitIcon";

interface FullScreenFeatureProps {
  onChange?: (isFull: boolean) => void;
}

const innerButtonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: "#eeeeee";
  }
`;

export const FullScreenFeature = ({ onChange }: FullScreenFeatureProps) => {
  const map = useMap();

  const ref = useRef<HTMLButtonElement>(null);
  const onBtnRef = useRef<HTMLButtonElement | null>(null);
  const offBtnRef = useRef<HTMLButtonElement | null>(null);
  const [isFull, setIsFull] = useState(false);

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

  const toggleFullScreen = () => {
    if (isFull) {
      offBtnRef.current?.click();
    } else {
      onBtnRef.current?.click();
    }
  };

  const onFull = () => {
    setIsFull(true);
    onChange && onChange(true);
  };

  const offFull = () => {
    setIsFull(false);
    onChange && onChange(false);
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
        <div css={innerButtonStyle}>
          {isFull ? (
            <FullScreenExitIcon size={24} />
          ) : (
            <FullScreenExitIcon size={24} />
          )}
        </div>
      </Button>
    </ControlGroup>
  );
};
