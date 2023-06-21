import { useEffect } from "react";
import { Map } from "ol";
import MapBrowserEvent from "ol/MapBrowserEvent";
import { Circle, LineString, MultiPoint, Point, Polygon } from "ol/geom";

export function useHoverCursor(mapRefObj: Map) {
  const onPointerMove = (event: MapBrowserEvent<any>) => {
    const map = event.map;
    const pixel = event.pixel;

    // features에 대해 forEachFeatureAtPixel을 사용하여 해당 feature 위에 마우스를 올렸을 때 커서 스타일 변경
    map.getTargetElement().style.cursor = "default";
    map.forEachFeatureAtPixel(pixel, (feature) => {
      const geometry = feature.getGeometry();
      if (geometry instanceof Point) {
        map.getTargetElement().style.cursor = "pointer"; // 커서 스타일 변경
        return;
      } else if (geometry instanceof MultiPoint) {
        map.getTargetElement().style.cursor = "pointer";
      } else if (geometry instanceof Polygon) {
        map.getTargetElement().style.cursor = "pointer";
      } else if (geometry instanceof LineString) {
        map.getTargetElement().style.cursor = "pointer";
      } else if (geometry instanceof Circle) {
        map.getTargetElement().style.cursor = "pointer";
      }
    });
  };

  useEffect(() => {
    mapRefObj.on("pointermove", onPointerMove);

    return () => {
      mapRefObj.un("pointermove", onPointerMove);
    };
  }, []);
}
