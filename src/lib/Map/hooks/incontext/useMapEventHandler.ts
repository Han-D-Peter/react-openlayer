import { useCallback, useEffect } from "react";
import { useMap } from "./useMap";
import { toLonLat } from "ol/proj";
import { MapBrowserEvent } from "ol";
import { Coordinate } from "ol/coordinate";
import RenderEvent from "ol/render/Event";
import BaseEvent from "ol/events/Event";
import debounce from "lodash";

export interface useMapEventHandlerArgs {
  onDrag?: ({
    event,
    lonlat,
  }?: {
    event: MapBrowserEvent<any>;
    lonlat: Coordinate;
  }) => void;
  onClick?: ({
    event,
    lonlat,
  }?: {
    event: MapBrowserEvent<any>;
    lonlat: Coordinate;
  }) => void;
  onHover?: ({
    event,
    lonlat,
  }?: {
    event: MapBrowserEvent<any>;
    lonlat: Coordinate;
  }) => void;

  /**
   * @description 이 이벤트는 맵이 `모든 레이어`와 `요소의 렌더링`이 `완료`되었을 때 발생합니다. 즉, 맵의 초기 로딩 및 재렌더링이 완료된 후에 발생하는 이벤트입니다. 주로 맵이 준비되었거나 화면이 업데이트되었을 때 추가적인 작업을 수행하고자 할 때 사용됩니다. 예를 들어, 특정 기능을 활성화하거나 추가적인 요소를 표시하는 등의 작업을 수행할 수 있습니다.
   */
  onMapLoaded?: (event?: RenderEvent) => void;
  onLoadStarted?: (event?: BaseEvent) => void;

  /**
   * @description  이 이벤트는 레이어의 모든 타일이 로드되었을 때 발생합니다. 특히, 타일 기반의 레이어 (예: XYZ, TileWMS)에서 유용한 이벤트입니다. 모든 타일이 성공적으로 로드되면 이벤트가 발생하며, 로딩 중에 오류가 발생한 타일은 이벤트에 포함되지 않습니다. 이 이벤트는 특정 레이어의 타일 로딩이 완료되었을 때 추가 작업을 수행하고자 할 때 유용합니다.
   */
  onTileLoadEnded?: (event?: BaseEvent) => void;
}

export const useMapEventHandler = ({
  onDrag,
  onClick,
  onHover,
  onMapLoaded,
  onLoadStarted,
  onTileLoadEnded,
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

  const dragEventHandler = useCallback(
    (event: MapBrowserEvent<any>) => {
      if (onDrag) {
        onDrag({ event, lonlat: toLonLat(event.coordinate) });
      }
    },
    [onDrag]
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
      if (onMapLoaded) {
        onMapLoaded(event);
      }
    },
    [onMapLoaded]
  );

  const loadStartedEventHandler = useCallback(
    (event: BaseEvent) => {
      if (onLoadStarted) {
        onLoadStarted(event);
      }
    },
    [onLoadStarted]
  );

  const loadEndedEventHandler = useCallback(
    (event: BaseEvent) => {
      if (onTileLoadEnded) {
        onTileLoadEnded(event);
      }
    },
    [onTileLoadEnded]
  );

  useEffect(() => {
    map.on("pointerdrag", dragEventHandler);
    return () => {
      map.un("pointerdrag", dragEventHandler);
    };
  }, [dragEventHandler, map]);

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
