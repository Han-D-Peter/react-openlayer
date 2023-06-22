import { useCallback, useEffect } from "react";
import { useMap } from "./useMap";
import { toLonLat } from "ol/proj";
import { MapBrowserEvent } from "ol";
import { Coordinate } from "ol/coordinate";
import RenderEvent from "ol/render/Event";
import BaseEvent from "ol/events/Event";

export interface useMapEventHandlerArgs {
  onClick?: ({
    event,
    lonlat,
  }: {
    event: MapBrowserEvent<any>;
    lonlat: Coordinate;
  }) => void;
  onHover?: ({
    event,
    lonlat,
  }: {
    event: MapBrowserEvent<any>;
    lonlat: Coordinate;
  }) => void;
  onLoaded?: (event: RenderEvent) => void;
  onLoadStart?: (event: BaseEvent) => void;
}

export const useMapEventHandler = ({
  onClick,
  onHover,
  onLoaded,
  onLoadStart,
}: useMapEventHandlerArgs) => {
  const map = useMap();

  const clickEventHandler = useCallback(
    (event: MapBrowserEvent<any>) => {
      if (onClick) {
        onClick({ event, lonlat: toLonLat(event.coordinate) });
      }
    },
    [onClick]
  );

  const hoverEventHandler = useCallback(
    (event: MapBrowserEvent<any>) => {
      if (onHover) {
        onHover({ event, lonlat: toLonLat(event.coordinate) });
      }
    },
    [onHover]
  );

  const renderCompletedEventHandler = useCallback(
    (event: RenderEvent) => {
      if (onLoaded) {
        onLoaded(event);
      }
    },
    [onLoaded]
  );

  const loadStartedEventHandler = useCallback(
    (event: BaseEvent) => {
      if (onLoadStart) {
        onLoadStart(event);
      }
    },
    [onLoadStart]
  );

  const loadEndedEventHandler = useCallback(
    (event: BaseEvent) => {
      if (onLoadStart) {
        onLoadStart(event);
      }
    },
    [onLoadStart]
  );

  useEffect(() => {
    map.on("click", clickEventHandler);

    return () => {
      map.un("click", clickEventHandler);
    };
  }, [clickEventHandler, map]);

  useEffect(() => {
    map.on("pointermove", hoverEventHandler);
    return () => {
      map.un("pointermove", hoverEventHandler);
    };
  }, [hoverEventHandler, map]);

  useEffect(() => {
    map.on("rendercomplete", renderCompletedEventHandler);
    return () => {
      map.un("rendercomplete", renderCompletedEventHandler);
    };
  }, [map, renderCompletedEventHandler]);

  useEffect(() => {
    map.on("loadstart", loadStartedEventHandler);
    return () => {
      map.un("loadstart", loadStartedEventHandler);
    };
  }, [loadStartedEventHandler, map]);

  useEffect(() => {
    map.on("loadend", loadEndedEventHandler);
    return () => {
      map.un("loadend", loadEndedEventHandler);
    };
  }, [loadEndedEventHandler, map]);
};
