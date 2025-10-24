import {
  ReactNode,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
} from "react";
import { defaults as defaultControls } from "ol/control";
import { Location } from "../MapContainer";
import { Map, MapBrowserEvent, MapEvent, View } from "ol";
import { fromLonLat, toLonLat } from "ol/proj";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { Coordinate } from "ol/coordinate";

import { useSyncMapContext } from "../hooks/incontext/useSyncContext";
import VectorSource from "ol/source/Vector";
import { MapContext } from "../MapContext";
import { DragRotateAndZoom } from "ol/interaction";
import { defaults as defaultInteractions } from "ol/interaction/defaults.js";

export interface SyncMapProps {
  /**
   * @default false
   * @description When you want to control map out
   */
  isDecoupled?: boolean;

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

  onClick?: ({
    event,
    lonlat,
  }: {
    event: MapBrowserEvent<any>;
    lonlat: Coordinate;
  }) => void;
}

export const SyncMap = ({
  isDecoupled = false,
  children,
  height = "500px",
  width = "500px",
  onClick,
}: SyncMapProps) => {
  const {
    sharedView,
    adjustCenter,
    onWheelHandler,
    onZoomHandler,
    adjustRotate,
    controlledCenter,
    controlledZoomLevel,
    controlledRotation,
    registerMap,
    unregisterMap,
  } = useSyncMapContext();

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
      interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
      view: isDecoupled
        ? new View({
            center: fromLonLat(controlledCenter),
            zoom: controlledZoomLevel,
            rotation: (controlledRotation * Math.PI) / 180,
          })
        : sharedView,
    })
  );

  const clickEventHandler = useCallback(
    (event: MapBrowserEvent<any>) => {
      if (onClick) {
        onClick({ event, lonlat: toLonLat(event.coordinate) });
      }
    },
    [onClick]
  );

  // 맵 등록/해제
  useEffect(() => {
    registerMap(mapObj.current, isDecoupled);

    return () => {
      unregisterMap(mapObj.current);
    };
  }, [registerMap, unregisterMap, isDecoupled]);

  // isDecoupled가 true인 경우에만 개별 상태 업데이트
  useEffect(() => {
    if (isDecoupled) {
      mapObj.current.getView().setCenter(fromLonLat(controlledCenter));
    }
  }, [controlledCenter, isDecoupled]);

  useEffect(() => {
    if (isDecoupled) {
      mapObj.current?.getView().setZoom(controlledZoomLevel);
    }
  }, [controlledZoomLevel, isDecoupled]);

  useEffect(() => {
    if (isDecoupled) {
      mapObj.current
        ?.getView()
        .setRotation((controlledRotation * Math.PI) / 180);
    }
  }, [controlledRotation, isDecoupled]);

  useEffect(() => {
    const map = mapObj.current;

    function zoomHandler(e: MapBrowserEvent<any>) {
      onZoomHandler(e, map);
    }

    map.on("pointerdrag", zoomHandler);

    return () => {
      map.un("pointerdrag", zoomHandler);
    };
  }, [onZoomHandler]);

  useEffect(() => {
    const map = mapObj.current;
    map.on("singleclick", clickEventHandler);
    return () => {
      map.un("singleclick", clickEventHandler);
    };
  }, [clickEventHandler]);

  useLayoutEffect(() => {
    mapObj.current.addLayer(osmRef.current);
    const mapRef = mapObj.current;

    mapRef.setTarget(mapId);

    return () => {
      mapRef.setTarget(undefined);
      mapRef.setLayers([]);
    };
  }, [mapId]);

  return (
    <MapContext.Provider value={mapObj.current}>
      <div
        id={mapId}
        onWheel={(e) => onWheelHandler(e, mapObj.current)}
        className="react-openlayers-map-container"
        style={{ width, height }}
      >
        {children}
      </div>
    </MapContext.Provider>
  );
};
