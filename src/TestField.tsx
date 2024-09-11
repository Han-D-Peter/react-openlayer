import React from "react";
import { useMapEventHandler } from "./lib";
import { ImageMapForPixel } from "./lib/Map/ImageMapForPixel";

const TestField = () => {
  // useMapEventHandler({
  //   onDrag: () => console.log("drag"),
  // });

  function getDegreeFromMoviePixel({
    width,
    height,
    targetPixelX,
    targetPixelY,
    focalLength,
    sensorSize,
    px,
    py,
  }: {
    width: number;
    height: number;
    targetPixelX: number;
    targetPixelY: number;
    focalLength: number;
    sensorSize: number;
    px: number;
    py: number;
  }) {
    const centerX = width / 2;
    const centerY = height / 2;

    const targetX = targetPixelX;
    const targetY = targetPixelY;

    const resultX = targetX - centerX;
    const resultY = -(centerY - targetY);

    const distanceX = centerX * sensorSize - px;
    const distanceY = centerY * sensorSize - py;

    const resultXLength = (resultX + 0.5) * sensorSize - distanceX;
    const resultYLength = (resultY + 0.5) * sensorSize - distanceY;

    const radianGapX = Math.atan(resultXLength / focalLength);
    const radianGapY = Math.atan(resultYLength / focalLength);

    const degreeGapX = (radianGapX * 180) / Math.PI;
    const degreeGapY = (radianGapY * 180) / Math.PI;

    return {
      radianGapX,
      radianGapY,
      degreeGapX,
      degreeGapY,
    };
  }

  function cal({
    width,
    height,
    targetPixelX,
    targetPixelY,
    focalLength,
    sensorSize,
    px,
    py,
  }: {
    width: number;
    height: number;
    targetPixelX: number;
    targetPixelY: number;
    focalLength: number;
    sensorSize: number;
    px: number;
    py: number;
  }) {}

  return (
    <ImageMapForPixel
      image={{
        src: "/images/12314.JPG",
        width: 5472,
        height: 3648,
      }}
      height="500px"
      width="500px"
      fullscreenControl
      onClick={(pixel) => {
        // 4096
        // 2730
        console.log("pixel", pixel);
        // const result = getDegreeFromMoviePixel({
        //   width: 5472,
        //   height: 3648,
        //   targetPixelX: 0,
        //   targetPixelY: 0,
        //   focalLength: 8.65925579685115387463,
        //   sensorSize: 0.00234527,
        //   px: 6.30743141004738383515,
        //   py: 4.23323095598362719727,
        // });

        // console.log("result", result);
        // const centerX = 5472 / 2;
        // const centerY = 3648 / 2;

        // const targetX = pixel.x;
        // const targetY = pixel.y;

        // const resultX = targetX - centerX;
        // const resultY = centerY - targetY;

        // const focalLength = 8.6;
        // const sensorSize = 0.00241;

        // const radianGapX = Math.atan((resultX * sensorSize) / focalLength);
        // const radianGapY = Math.atan((resultY * sensorSize) / focalLength);

        // const degreeGapX = (radianGapX * 180) / Math.PI;
        // const degreeGapY = (radianGapY * 180) / Math.PI;

        // console.log("radianGapX radianGapY", radianGapX, radianGapY);
        // console.log("degreeGapX degreeGapY", degreeGapX, degreeGapY);
      }}
    ></ImageMapForPixel>
  );
};

export default TestField;
