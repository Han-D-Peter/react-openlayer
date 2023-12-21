import { debounce } from "lodash";
import { Map, MapEvent } from "ol";
import { Coordinate } from "ol/coordinate";
import { toLonLat } from "ol/proj";
import {
  Children,
  ReactElement,
  createContext,
  createElement,
  useCallback,
  useMemo,
  useState,
  useRef,
  WheelEvent,
  useEffect,
} from "react";
import { Location } from "../MapContainer";
import { SyncMap, SyncMapProps } from "./SyncMap";

export interface SyncMapGroupProps {
  /**
   * @default true
   */
  sync?: boolean;
  /**
   * @default [127.9745613, 37.3236563]
   */
  center?: Location;

  /**
   * @default 15
   */
  zoomLevel?: number;

  /**
   * @default 0
   */
  rotate?: number;

  children: ReactElement<SyncMapProps, typeof SyncMap>[];
}

export interface SyncMapContextProps {
  controlledCenter: Location;
  controlledZoomLevel: number;
  adjustCenter: (location: Location) => void;
  adjustZoomLevel: (level: number) => void;
  onWheelHandler: (event: WheelEvent<HTMLDivElement>, map: Map) => void;
  onZoomHandler: (event: MapEvent, map: Map) => void;
  adjustRotate: (rotation: number) => void;
}

export const SyncMapContext = createContext<SyncMapContextProps | null>(null);

export const SyncMapGroup = ({
  center = [127.9745613, 37.3236563],
  zoomLevel = 15,
  children,
  rotate = 0,
}: SyncMapGroupProps) => {
  const [controlledCenter, setControlledCenter] = useState(center);
  const [controlledZoomLevel, setControlledZoomLevel] = useState(zoomLevel);
  const [controlledRotation, setControlledRotation] = useState(rotate);
  const handleWheel = useRef(
    debounce((event, map: Map) => {
      setControlledZoomLevel(map.getView().getZoom() as number);
      setControlledCenter(
        toLonLat(map.getView().getCenter() as Coordinate) as Location
      );
    }, 300)
  );
  const onWheelHandler = useCallback(
    (event: WheelEvent<HTMLDivElement>, map: Map) => {
      event.persist(); // Ensure the event is not nullified before the debounced function is called
      handleWheel.current(event, map);
    },
    []
  );

  const onZoomHandler = useCallback((event: MapEvent, map: Map) => {
    handleWheel.current(event, map);
  }, []);

  const adjustCenter = useCallback((location: Location) => {
    setControlledCenter(location);
  }, []);

  const adjustZoomLevel = useCallback((level: number) => {
    setControlledZoomLevel(level);
  }, []);

  const adjustRotate = useCallback((rotation: number) => {
    setControlledRotation(rotation);
  }, []);

  useEffect(() => {
    setControlledRotation(rotate);
  }, [rotate]);

  const value = useMemo(
    () => ({
      controlledCenter,
      controlledZoomLevel,
      adjustCenter,
      adjustZoomLevel,
      onWheelHandler,
      onZoomHandler,
      adjustRotate,
    }),
    [
      controlledCenter,
      controlledZoomLevel,
      adjustCenter,
      adjustZoomLevel,
      onWheelHandler,
      onZoomHandler,
      adjustRotate,
    ]
  );

  const syncChildren = useMemo(() => {
    return Children.map(children, (child) => {
      if (child.props.isDecoupled) {
        return child;
      }
      const adjustedChild = createElement(SyncMap, {
        ...child.props,
        center: controlledCenter,
        zoomLevel: controlledZoomLevel,
        rotate: controlledRotation,
      });
      return adjustedChild;
    });
  }, [children, controlledCenter, controlledZoomLevel, controlledRotation]);

  return (
    <SyncMapContext.Provider value={value}>
      {syncChildren}
    </SyncMapContext.Provider>
  );
};
