import {
  ReactNode,
  useLayoutEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import MapContext from "./MapContext";
import "ol/ol.css";
import { Map as OlMap, View } from "ol";
import { Control, Zoom, defaults as defaultControls } from "ol/control";
import { fromLonLat } from "ol/proj";
import { Tile as TileLayer } from "ol/layer";
import { OSM } from "ol/source";
import concat from "lodash/concat";

export type Lng = number;
export type Lat = number;

export type Location = [Lng, Lat];

export interface MapProps {
  scrollWheelZoom?: boolean;

  /**
   * @default 24
   */
  maxZoom?: number;

  /**
   * @default 3
   */
  minZoom?: number;
  fullscreenControl?: boolean;

  /**
   * @default true.
   */
  isZoomAbled?: boolean;

  /**
   * @default true.
   */
  isRotateAbled?: boolean;

  /**
   * @default [127.9745613, 37.3236563]
   */
  center?: Location;

  /**
   * @default 15
   */
  defaultZoomLevel?: number;

  /**
   * @default null
   */
  bounds?: [Location, Location];

  /**
   * @default "1000px"
   */
  height?: string;

  /**
   * @default "1000px"
   */
  width?: string;
  children?: ReactNode;
}

const Map = forwardRef(
  (
    {
      children,
      isZoomAbled = true,
      isRotateAbled = false,
      center = [126.841, 35.1896563],
      defaultZoomLevel = 18,
      bounds,
      maxZoom = 24,
      minZoom = 3,
      height = "1000px",
      width = "1000px",
    }: MapProps,
    ref
  ) => {
    const mapObj = useRef<OlMap>(
      new OlMap({
        controls: defaultControls({
          zoom: isZoomAbled,
          rotate: isRotateAbled,
        }).extend([]),
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        // 하위 요소 중 id 가 map 인 element가 있어야함.
        view: new View({
          extent: bounds
            ? fromLonLat(concat<number>([...[...bounds[0], ...bounds[1]]]))
            : undefined,
          center: fromLonLat(center),
          zoom: defaultZoomLevel,
          maxZoom: !isZoomAbled ? defaultZoomLevel : maxZoom,
          minZoom: !isZoomAbled ? defaultZoomLevel : minZoom,
          constrainResolution: true,
        }),
      })
    );

    useImperativeHandle(ref, () => mapObj);

    useLayoutEffect(() => {
      const mapRef = mapObj.current;
      const defaultZoomControl = mapRef
        .getControls()
        .getArray()
        .find((control: Control) => control instanceof Zoom);

      if (defaultZoomControl) {
        mapRef.removeControl(defaultZoomControl);
      }
      mapRef.setTarget("map");
      return () => {
        mapRef.setTarget(undefined);
      };
    }, []);

    // MapContext.Provider 에 객체 저장
    return (
      <MapContext.Provider value={mapObj.current}>
        <div id="map" style={{ width, height }}></div>
        {children}
      </MapContext.Provider>
    );
  }
);

export default Map;
