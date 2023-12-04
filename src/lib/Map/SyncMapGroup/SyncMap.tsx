import {
  ReactNode,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
} from "react";
import { defaults as defaultControls } from "ol/control";
import { ControlContext, Location } from "../MapContainer";
import { Map, View } from "ol";
import { fromLonLat, toLonLat } from "ol/proj";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { Coordinate } from "ol/coordinate";
import { MapContext } from "../MapContext";
import { useSyncMapContext } from "../hooks/incontext/useSyncContext";
import VectorSource from "ol/source/Vector";
import { SyncMapContext, SyncMapValueContext } from "./SyncMapContext";

export interface SyncMapProps {
  /**
   * @default false
   * @description When you want to control map out
   */
  isDecoupled?: boolean;
  /**
   * @default [127.9745613, 37.3236563]
   */
  center?: Location;
  /**
   * @default 15
   */
  zoomLevel?: number;

  /**
   * @default "1000px"
   * @description This value set height css value of style. (ex. 100%, 100px, 100vh)
   */
  height?: string;

  /**
   * @default "1000px"
   * @description This value set width css value of style. (ex. 100%, 100px, 100vw)
   */
  width?: string;

  /**
   * @default 0
   */
  rotate?: number;

  children?: ReactNode;
}

export const SyncMap = ({
  isDecoupled = false,
  center = [127.9745613, 37.3236563],
  zoomLevel = 15,
  rotate = 0,
  children,
  height = "500px",
  width = "500px",
}: SyncMapProps) => {
  const id = useId();
  const mapId = `react-openlayers-map-${id}`;
  const osmRef = useRef<TileLayer<OSM>>(
    new TileLayer({
      source: new OSM({
        crossOrigin: "anonymous",
        attributions: [],
      }),
    })
  );

  const mapObj = useRef<Map>(
    new Map({
      controls: defaultControls({
        zoom: false,
        rotate: true,
      }).extend([]),
      view: new View({
        zoom: zoomLevel,
      }),
    })
  );
  const drawVectorSource = useRef<VectorSource>(new VectorSource());

  const { adjustCenter, onWheelHandler } = useSyncMapContext();

  const onMouseUpOnMap = useCallback(() => {
    if (!isDecoupled) {
      const current = mapObj.current.getView().getCenter();
      adjustCenter(toLonLat(current as Coordinate) as Location);
    }
  }, [isDecoupled]);

  useEffect(() => {
    mapObj.current.getView().setCenter(fromLonLat(center));
  }, [center]);

  useEffect(() => {
    mapObj.current?.getView().setZoom(zoomLevel);
  }, [zoomLevel]);

  useEffect(() => {
    mapObj.current?.getView().setRotation((rotate * Math.PI) / 180);
  }, [rotate]);

  useLayoutEffect(() => {
    mapObj.current.addLayer(osmRef.current);
    const mapRef = mapObj.current;
    console.log("map", mapRef);
    console.log("mapId", mapId);
    mapRef.setTarget(mapId);

    return () => {
      mapRef.setTarget(undefined);
      mapRef.setLayers([]);
    };
  }, [mapId]);

  return (
    <SyncMapContext.Provider value={mapObj.current}>
      <ControlContext.Provider
        value={{ drawVectorSource: drawVectorSource.current }}
      >
        <SyncMapValueContext.Provider value={{ zoomLevel, rotate }}>
          <div
            id={mapId}
            onWheel={(e) => onWheelHandler(e, mapObj.current)}
            onMouseUp={onMouseUpOnMap}
            className="react-openlayers-map-container"
            style={{ width, height }}
          >
            {children}
          </div>
        </SyncMapValueContext.Provider>
      </ControlContext.Provider>
    </SyncMapContext.Provider>
  );
};
