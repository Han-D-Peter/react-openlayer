import React, { useCallback, useEffect, useState } from "react";
import { useMap } from "../hooks";
import { Size } from "ol/size";

interface CaptureMapProps {
  onCaptured?: (img: string) => void;
}

export const CaptureMap = ({ onCaptured }: CaptureMapProps) => {
  const map = useMap();
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const capture = useCallback(() => {
    if (!map) return;
    const mapCanvas = document.createElement("canvas");
    const size = map.getSize() as Size;
    mapCanvas.width = size[0];
    mapCanvas.height = size[1];
    const mapContext = mapCanvas.getContext("2d") as CanvasRenderingContext2D;
    Array.prototype.forEach.call(
      map.getViewport().querySelectorAll(".ol-layer canvas, canvas.ol-layer"),
      function (canvas) {
        if (canvas.width > 0) {
          const opacity =
            canvas.parentNode.style.opacity || canvas.style.opacity;
          mapContext.globalAlpha = opacity === "" ? 1 : Number(opacity);
          let matrix;
          const transform = canvas.style.transform;
          if (transform) {
            // Get the transform parameters from the style's transform matrix
            matrix = transform
              .match(/^matrix\(([^\(]*)\)$/)[1]
              .split(",")
              .map(Number);
          } else {
            matrix = [
              parseFloat(canvas.style.width) / canvas.width,
              0,
              0,
              parseFloat(canvas.style.height) / canvas.height,
              0,
              0,
            ];
          }
          // Apply the transform to the export map context
          CanvasRenderingContext2D.prototype.setTransform.apply(
            mapContext,
            matrix
          );
          const backgroundColor = canvas.parentNode.style.backgroundColor;
          if (backgroundColor) {
            mapContext.fillStyle = backgroundColor;
            mapContext.fillRect(0, 0, canvas.width, canvas.height);
          }
          mapContext.drawImage(canvas, 0, 0);
        }
      }
    );
    mapContext.globalAlpha = 1;
    mapContext.setTransform(1, 0, 0, 1, 0, 0);

    const url = mapCanvas.toDataURL();

    setImageSrc(url);
  }, [map]);

  useEffect(() => {
    if (onCaptured && imageSrc) {
      onCaptured(imageSrc);
    }
  }, [imageSrc]);

  useEffect(() => {
    map.once("rendercomplete", capture);
    return () => {
      map.un("rendercomplete", capture);
    };
  }, [capture, map]);
  return <></>;
};
