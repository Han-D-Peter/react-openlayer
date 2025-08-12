import { debounce } from "lodash";
import { Map, MapEvent, View } from "ol";
import { Coordinate } from "ol/coordinate";
import { toLonLat, fromLonLat } from "ol/proj";
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
  ReactNode,
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

  children?: ReactNode;
}

export interface SyncMapContextProps {
  sharedView: View;
  controlledCenter: Location;
  controlledZoomLevel: number;
  controlledRotation: number;
  adjustCenter: (location: Location) => void;
  adjustZoomLevel: (level: number) => void;
  onWheelHandler: (event: WheelEvent<HTMLDivElement>, map: Map) => void;
  onZoomHandler: (event: MapEvent, map: Map) => void;
  adjustRotate: (rotation: number) => void;
  registerMap: (map: Map, isDecoupled: boolean) => void;
  unregisterMap: (map: Map) => void;
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

  // 공유 View 생성
  const sharedView = useRef(
    new View({
      center: fromLonLat(center),
      zoom: zoomLevel,
      rotation: (rotate * Math.PI) / 180,
    })
  );

  // 동기화된 맵들을 추적
  const syncedMaps = useRef<Set<Map>>(new Set());
  const decoupledMaps = useRef<Set<Map>>(new Set());

  // 외부에서 설정된 값들을 추적 (props 변경 시에만 업데이트)
  const externalCenter = useRef(center);
  const externalZoomLevel = useRef(zoomLevel);
  const externalRotation = useRef(rotate);

  const handleWheel = useRef(
    debounce((event, map: Map) => {
      // decoupled 맵이 아닌 경우에만 동기화
      if (!decoupledMaps.current.has(map)) {
        const newZoom = map.getView().getZoom() as number;
        const newCenter = toLonLat(
          map.getView().getCenter() as Coordinate
        ) as Location;

        // 상태 업데이트 (UI 동기화용)
        setControlledZoomLevel(newZoom);
        setControlledCenter(newCenter);

        // 다른 동기화된 맵들에 변경사항 적용
        syncedMaps.current.forEach((syncedMap) => {
          if (syncedMap !== map) {
            syncedMap.getView().setZoom(newZoom);
            syncedMap.getView().setCenter(fromLonLat(newCenter));
          }
        });
      }
    }, 300)
  );

  const onWheelHandler = useCallback(
    (event: WheelEvent<HTMLDivElement>, map: Map) => {
      event.persist();
      handleWheel.current(event, map);
    },
    []
  );

  const onZoomHandler = useCallback((event: MapEvent, map: Map) => {
    handleWheel.current(event, map);
  }, []);

  const adjustCenter = useCallback(
    (location: Location) => {
      // 외부에서 호출된 경우에만 상태 업데이트
      if (JSON.stringify(location) !== JSON.stringify(controlledCenter)) {
        setControlledCenter(location);
        const centerCoord = fromLonLat(location);

        // 공유 View 업데이트
        sharedView.current.setCenter(centerCoord);

        // 동기화된 맵들 업데이트
        syncedMaps.current.forEach((map) => {
          map.getView().setCenter(centerCoord);
        });
      }
    },
    [controlledCenter]
  );

  const adjustZoomLevel = useCallback(
    (level: number) => {
      // 외부에서 호출된 경우에만 상태 업데이트
      if (level !== controlledZoomLevel) {
        setControlledZoomLevel(level);

        // 공유 View 업데이트
        sharedView.current.setZoom(level);

        // 동기화된 맵들 업데이트
        syncedMaps.current.forEach((map) => {
          map.getView().setZoom(level);
        });
      }
    },
    [controlledZoomLevel]
  );

  const adjustRotate = useCallback(
    (rotation: number) => {
      // 외부에서 호출된 경우에만 상태 업데이트
      if (rotation !== controlledRotation) {
        setControlledRotation(rotation);
        const rotationRad = (rotation * Math.PI) / 180;

        // 공유 View 업데이트
        sharedView.current.setRotation(rotationRad);

        // 동기화된 맵들 업데이트
        syncedMaps.current.forEach((map) => {
          map.getView().setRotation(rotationRad);
        });
      }
    },
    [controlledRotation]
  );

  const registerMap = useCallback((map: Map, isDecoupled: boolean) => {
    if (isDecoupled) {
      decoupledMaps.current.add(map);
    } else {
      syncedMaps.current.add(map);
      // 동기화된 맵의 View를 공유 View로 설정
      map.setView(sharedView.current);
    }
  }, []);

  const unregisterMap = useCallback((map: Map) => {
    syncedMaps.current.delete(map);
    decoupledMaps.current.delete(map);
  }, []);

  // props 변경 시에만 업데이트 (외부에서 설정된 값)
  useEffect(() => {
    if (JSON.stringify(rotate) !== JSON.stringify(externalRotation.current)) {
      externalRotation.current = rotate;
      setControlledRotation(rotate);
      const rotationRad = (rotate * Math.PI) / 180;
      sharedView.current.setRotation(rotationRad);

      syncedMaps.current.forEach((map) => {
        map.getView().setRotation(rotationRad);
      });
    }
  }, [rotate]);

  useEffect(() => {
    if (JSON.stringify(center) !== JSON.stringify(externalCenter.current)) {
      externalCenter.current = center;
      setControlledCenter(center);
      const centerCoord = fromLonLat(center);
      sharedView.current.setCenter(centerCoord);

      syncedMaps.current.forEach((map) => {
        map.getView().setCenter(centerCoord);
      });
    }
  }, [center]);

  useEffect(() => {
    if (zoomLevel !== externalZoomLevel.current) {
      externalZoomLevel.current = zoomLevel;
      setControlledZoomLevel(zoomLevel);
      sharedView.current.setZoom(zoomLevel);

      syncedMaps.current.forEach((map) => {
        map.getView().setZoom(zoomLevel);
      });
    }
  }, [zoomLevel]);

  const value = useMemo(
    () => ({
      sharedView: sharedView.current,
      controlledCenter,
      controlledZoomLevel,
      controlledRotation,
      adjustCenter,
      adjustZoomLevel,
      onWheelHandler,
      onZoomHandler,
      adjustRotate,
      registerMap,
      unregisterMap,
    }),
    [
      controlledRotation,
      controlledCenter,
      controlledZoomLevel,
      adjustCenter,
      adjustZoomLevel,
      onWheelHandler,
      onZoomHandler,
      adjustRotate,
      registerMap,
      unregisterMap,
    ]
  );

  return (
    <SyncMapContext.Provider value={value}>{children}</SyncMapContext.Provider>
  );
};
