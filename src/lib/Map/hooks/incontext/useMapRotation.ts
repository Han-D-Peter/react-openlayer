import { useCallback, useEffect, useState } from "react";
import useMap from "./useMap";

const useMapRotation = () => {
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

  return [rotationDegree, setRotate, resetRotation] as const;
};

export default useMapRotation;
