import {
  Children,
  ReactElement,
  createContext,
  createElement,
  useCallback,
  useMemo,
  useState,
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

  children: ReactElement<SyncMapProps, typeof SyncMap>[];
}

export interface SyncMapContextProps {
  controlledCenter: Location;
  controlledZoomLevel: number;
  adjustCenter: (location: Location) => void;
  adjustZoomLevel: (level: number) => void;
}

export const SyncMapContext = createContext<SyncMapContextProps | null>(null);

export const SyncMapGroup = ({
  center = [127.9745613, 37.3236563],
  zoomLevel = 15,
  children,
}: SyncMapGroupProps) => {
  const [controlledCenter, setControlledCenter] = useState(center);
  const [controlledZoomLevel, setControlledZoomLevel] = useState(zoomLevel);

  const adjustCenter = useCallback((location: Location) => {
    setControlledCenter(location);
  }, []);

  const adjustZoomLevel = useCallback((level: number) => {
    setControlledZoomLevel(level);
  }, []);

  const value = useMemo(
    () => ({
      controlledCenter,
      controlledZoomLevel,
      adjustCenter,
      adjustZoomLevel,
    }),
    [controlledCenter, controlledZoomLevel, adjustCenter, adjustZoomLevel]
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
      });
      return adjustedChild;
    });
  }, [children, controlledCenter, controlledZoomLevel]);

  return (
    <SyncMapContext.Provider value={value}>
      {syncChildren}
    </SyncMapContext.Provider>
  );
};
