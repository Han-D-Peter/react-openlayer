import { useCallback, useEffect, useState } from "react";
import { useMap } from "./useMap";
import { MapBrowserEvent } from "ol";
import { mouseActionButton } from "ol/events/condition";
import Feature, { FeatureLike } from "ol/Feature";
import { Geometry } from "ol/geom";

export function useSelectAnnotation() {
  const [selectedAnnotation, setSelectedAnnotation] =
    useState<FeatureLike | null>(null);

  const map = useMap();

  const getAnnotationByClick = useCallback(
    (event: MapBrowserEvent<any>) => {
      // 수정/그리기 중에는 지도 이동 및 다른 클릭 로직을 막아 선택만 처리
      if (map.get("isModifying") || map.get("isDrawing")) {
        event.preventDefault();
        event.stopPropagation();
      }
      // 좌클릭만 허용 (singleclick 기준)
      if (!mouseActionButton(event)) return;

      const clickedFeatures = map.getFeaturesAtPixel(event.pixel, {
        hitTolerance: 12,
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
