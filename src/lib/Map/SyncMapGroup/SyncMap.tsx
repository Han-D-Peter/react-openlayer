import { ReactNode, useCallback, useEffect, useId, useRef } from "react";
import { defaults as defaultControls } from "ol/control";
import { Location } from "../MapContainer";
import { Map } from "ol";
import BaseEvent from "ol/events/Event";
import { fromLonLat, toLonLat } from "ol/proj";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { Coordinate } from "ol/coordinate";
import { MapContext } from "../MapContext";
import { useSyncMapContext } from "../hooks/incontext/useSyncContext";

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
  children?: ReactNode;
}

export const SyncMap = ({
  isDecoupled = false,
  center = [127.9745613, 37.3236563],
  zoomLevel = 15,
  children,
  height,
  width,
}: SyncMapProps) => {
  const id = useId();
  const mapId = `react-openlayers-map-${id}`;
  const mapObj = useRef<Map>(
    new Map({
      controls: defaultControls({
        zoom: false,
        rotate: true,
      }).extend([]),
      layers: [
        new TileLayer({
          source: new OSM({
            crossOrigin: "anonymous",
          }),
        }),
      ],
    })
  );

  const { adjustCenter, adjustZoomLevel } = useSyncMapContext();

  const onMouseUpOnMap = useCallback(() => {
    if (!isDecoupled) {
      const current = mapObj.current.getView().getCenter();
      adjustCenter(toLonLat(current as Coordinate) as Location);
    }
  }, []);

  useEffect(() => {
    mapObj.current.getView().setCenter(fromLonLat(center));
  }, [center]);

  useEffect(() => {
    mapObj.current?.getView().setZoom(zoomLevel);
  }, [zoomLevel]);

  useEffect(() => {
    const mapRef = mapObj.current;
    const onZoomChange = (event: BaseEvent) => {
      if (!isDecoupled) {
        const zoomLevelFromEvent = event.target.getView().getZoom();
        adjustZoomLevel(zoomLevelFromEvent as number);
      }
    };

    mapRef.setTarget(mapId);
    mapRef.on("moveend", onZoomChange);

    return () => {
      mapRef.un("moveend", onZoomChange);
      mapRef.setTarget(undefined);
      mapRef.setLayers([]);
    };
  }, [mapId, isDecoupled]);

  return (
    <MapContext.Provider value={mapObj.current}>
      <div
        id={mapId}
        onMouseUp={onMouseUpOnMap}
        className="react-openlayers-map-container"
        style={{ width, height }}
      >
        {children}
      </div>
    </MapContext.Provider>
  );
};
