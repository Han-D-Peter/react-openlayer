import { MapBrowserEvent } from "ol";

import Feature, { FeatureLike } from "ol/Feature";
import { Geometry } from "ol/geom";

import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { useCallback, useEffect } from "react";
import { useMap } from "./useMap";

interface useInteractionEventArgs {
  annotation: VectorLayer<VectorSource<Geometry>>;
  onClick?: (feature: Feature) => void;
  onHover?: (feature: Feature) => void;
  onLeave?: () => void;
  isDisabledSelection?: boolean;
}

export function useInteractionEvent({
  annotation,
  onClick,
  onHover,
  onLeave,
  isDisabledSelection = false,
}: useInteractionEventArgs) {
  const map = useMap();

  const clickMap = useCallback(
    (e: MapBrowserEvent<any>) => {
      const pixel = e.pixel;

      // 겹쳐있는 마커 위에서부터 선택되도록 리버스
      const reversedFeture: FeatureLike[] = map
        .getFeaturesAtPixel(pixel)
        .reverse();

      reversedFeture.forEach((feature) => {
        if (!feature.getProperties().shape) return;
        // 이미 선택한 마커 또 선택하면 해제

        if (annotation?.getSource()?.getFeatures()[0] === feature) {
          onClick && onClick(feature);
        }
      });
    },
    [annotation, map, onClick]
  );

  const hoverMap = useCallback(
    (e: MapBrowserEvent<any>) => {
      const pixel = e.pixel;

      // 겹쳐있는 마커 위에서부터 선택되도록 리버스
      const reversedFeture: FeatureLike[] = map
        .getFeaturesAtPixel(pixel)
        .reverse();
      if (reversedFeture.length === 0) {
        onLeave && onLeave();
      }
      reversedFeture.forEach((feature) => {
        if (!feature.getProperties().shape) return;
        // 이미 선택한 마커 또 선택하면 해제

        if (annotation?.getSource()?.getFeatures()[0] === feature) {
          onHover && onHover(feature as Feature<Geometry>);
        }
      });
    },
    [annotation, map, onHover, onLeave]
  );

  useEffect(() => {
    map.on("click", clickMap);
    map.on("pointermove", hoverMap);
    return () => {
      map.un("click", clickMap);
      map.un("pointermove", hoverMap);
    };
  }, [map, clickMap, hoverMap]);

  // useEffect(() => {
  //   const clickSelect = new Select({
  //     condition: click,
  //     style: null,
  //     layers: [annotation],
  //   });

  //   const hoverSelect = new Select({
  //     condition: pointerMove,
  //     style: null,
  //     layers: [annotation],
  //   });
  //   if (onHover) {
  //     hoverSelect.on("select", onHover);
  //   }
  //   if (onClick) {
  //     clickSelect.on("select", onClick);
  //   }
  //   if (!isDisabledSelection) {
  //     map.addInteraction(clickSelect);
  //     map.addInteraction(hoverSelect);
  //   }

  //   return () => {
  //     if (onHover) {
  //       hoverSelect.un("select", onHover);
  //     }
  //     if (onClick) {
  //       clickSelect.un("select", onClick);
  //     }
  //     if (!isDisabledSelection) {
  //       map.removeInteraction(clickSelect);
  //       map.removeInteraction(hoverSelect);
  //     }
  //   };
  // }, [onClick, onHover, map, isDisabledSelection, annotation]);
}
