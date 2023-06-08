import { useEffect } from "react";
import useMap from "./useMap";
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

const useMapEventHandler = ({
  onClick,
  onHover,
  onLoaded,
  onLoadStart,
}: useMapEventHandlerArgs) => {
  const map = useMap();

  function clickEventHandler(event: MapBrowserEvent<any>) {
    if (onClick) {
      onClick({ event, lonlat: toLonLat(event.coordinate) });
    }
  }

  function hoverEventHandler(event: MapBrowserEvent<any>) {
    if (onHover) {
      onHover({ event, lonlat: toLonLat(event.coordinate) });
    }
  }

  function renderCompletedEventHandler(event: RenderEvent) {
    if (onLoaded) {
      onLoaded(event);
    }
  }

  function loadStartedEventHandler(event: BaseEvent) {
    if (onLoadStart) {
      onLoadStart(event);
    }
  }

  function loadEndedEventHandler(event: BaseEvent) {
    if (onLoadStart) {
      onLoadStart(event);
    }
  }

  useEffect(() => {
    map.on("click", clickEventHandler);

    return () => {
      map.un("click", clickEventHandler);
    };
  }, []);

  useEffect(() => {
    map.on("pointermove", hoverEventHandler);
    return () => {
      map.un("pointermove", hoverEventHandler);
    };
  }, []);

  useEffect(() => {
    map.on("rendercomplete", renderCompletedEventHandler);
    return () => {
      map.un("rendercomplete", renderCompletedEventHandler);
    };
  }, []);

  useEffect(() => {
    map.on("loadstart", loadStartedEventHandler);
    return () => {
      map.un("loadstart", loadStartedEventHandler);
    };
  }, []);

  useEffect(() => {
    map.on("loadend", loadEndedEventHandler);
    return () => {
      map.un("loadend", loadEndedEventHandler);
    };
  }, []);
};

export default useMapEventHandler;
