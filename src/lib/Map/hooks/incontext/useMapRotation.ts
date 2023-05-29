import { useCallback, useEffect, useState } from "react";
import useMap from "./useMap";

type useMapRatationOutput = readonly [
  /**
   * @description Current degree of using map.
   */
  rotationDegree: number,
  setRotate: (degree: number) => void,

  /**
   * @description When you execute this function, rotationDegree will be set 0.
   */
  resetRotation: () => void
];

const useMapRotation = (): useMapRatationOutput => {
  const map = useMap();
  const [rotationDegree, setRotationDegree] = useState(
    map.getView().getRotation() / (Math.PI / 180)
  );

  const setRotate = useCallback((degree: number) => {
    setRotationDegree(degree);
  }, []);

  const resetRotation = useCallback(() => {
    setRotationDegree(0);
  }, []);

  useEffect(() => {
    map.getView().setRotation(rotationDegree * (Math.PI / 180));
  }, [rotationDegree, map]);

  return [rotationDegree, setRotate, resetRotation];
};

export default useMapRotation;
