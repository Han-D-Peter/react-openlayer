import { useCallback, useEffect, useState } from "react";
import { useMap } from "./useMap";
import { MapBrowserEvent } from "ol";
import Feature, { FeatureLike } from "ol/Feature";
import { Geometry } from "ol/geom";

export function useSelectAnnotation() {
  const [selectedAnnotation, setSelectedAnnotation] =
    useState<FeatureLike | null>(null);

  const map = useMap();

  const getAnnotationByClick = useCallback(
    (event: MapBrowserEvent<any>) => {
      const clickedFeatures = map.getFeaturesAtPixel(event.pixel, {
        hitTolerance: 10,
      });

      if (clickedFeatures.length > 0) {
        // 클릭한 어노테이션 선택
        const selectedFeature = clickedFeatures[0] as Feature<Geometry>;
        if (selectedAnnotation !== selectedFeature) {
          setSelectedAnnotation(selectedFeature);
        }
      }
    },
    [map, selectedAnnotation]
  );

  useEffect(() => {
    map.on("singleclick", getAnnotationByClick);
    return () => {
      map.un("singleclick", getAnnotationByClick);
    };
  }, []);

  return selectedAnnotation as Feature<Geometry>;
}
