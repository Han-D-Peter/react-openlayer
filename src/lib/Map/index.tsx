import { useState, useEffect, ReactNode, useLayoutEffect } from "react";
import MapContext from "./MapContext";
import "ol/ol.css";
import { Map as OlMap, View } from "ol";
import { defaults as defaultControls } from "ol/control";
import { fromLonLat } from "ol/proj";
import { Tile as TileLayer } from "ol/layer";
import { OSM } from "ol/source";
import concat from "lodash/concat";

type Lng = number;
type Lat = number;

type Location = [Lat, Lng];

export interface MapProps {
  scrollWheelZoom?: boolean;

  /**
   * default is 24
   */
  maxZoom?: number;

  /**
   * default is 3
   */
  minZoom?: number;
  fullscreenControl?: boolean;

  /**
   * default is true.
   */
  isZoomAbled?: boolean;

  /**
   * default is true.
   */
  isRotateAbled?: boolean;

  /**
   * default is [127.9745613, 37.3236563]
   */
  center?: Location;

  /**
   * default is 15
   */
  defaultZoomLevel: number;

  /**
   * default is null
   */
  bounds?: [Location, Location];

  height: string;
  width: string;
  children?: ReactNode;
}

function Map({
  children,
  isZoomAbled = true,
  isRotateAbled = true,
  center = [127.9745613, 37.3236563],
  defaultZoomLevel = 15,
  bounds,
  maxZoom = 24,
  minZoom = 3,
  height = "1000px",
  width = "1000px",
}: MapProps) {
  const [mapObj, setMapObj] = useState<OlMap | null>(null);

  useLayoutEffect(() => {
    // Map 객체 생성 및 OSM 배경지도 추가
    const map = new OlMap({
      controls: defaultControls({
        zoom: isZoomAbled,
        rotate: isRotateAbled,
      }).extend([]),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: "map", // 하위 요소 중 id 가 map 인 element가 있어야함.
      view: new View({
        extent: bounds
          ? fromLonLat(concat<number>([...[...bounds[0], ...bounds[1]]]))
          : undefined,
        center: fromLonLat(center),
        zoom: defaultZoomLevel,
        maxZoom: !isZoomAbled ? defaultZoomLevel : maxZoom,
        minZoom: !isZoomAbled ? defaultZoomLevel : minZoom,
      }),
    });

    setMapObj(map);
    return () => {
      map.setTarget(undefined);
    };
  }, []);

  // MapContext.Provider 에 객체 저장
  return (
    <MapContext.Provider value={mapObj}>
      <div id="map" style={{ width, height }}></div>
      {children}
    </MapContext.Provider>
  );
}

export default Map;
