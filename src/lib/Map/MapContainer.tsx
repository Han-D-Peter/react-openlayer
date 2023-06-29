import React, { memo, useEffect, useId } from "react";
import {
  ReactNode,
  useLayoutEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { Map, View } from "ol";
import { Control, Zoom, defaults as defaultControls } from "ol/control";
import { fromLonLat } from "ol/proj";
import { Tile as TileLayer } from "ol/layer";
import { OSM } from "ol/source";
import concat from "lodash/concat";
import { MapContext } from "./MapContext";
import { useHoverCursor } from "./hooks/incontext/useHoverCursor";
import { FeatureStore } from "./FeatureStore";
import { boundingExtent } from "ol/extent";
import "ol/ol.css";

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
  zoomLevel?: number;

  /**
   * @default null
   * @description [minX, minY, maxX, maxY]
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

  /**
   * @default true
   */
  isShownOsm?: boolean;

  /**
   * @default false
   * @description If you set this property to 'true', you can see selection of annotations.
   */
  isAbledSelection?: boolean;

  children?: ReactNode;
}

export const MapContainer = memo(
  forwardRef<Map, MapProps>(
    (
      {
        children,
        isZoomAbled = true,
        isRotateAbled = false,
        center = [126.841, 35.1896563],
        zoomLevel = 18,
        bounds,
        maxZoom = 24,
        minZoom = 3,
        height = "1000px",
        width = "1000px",
        isShownOsm = true,
        isAbledSelection = false,
      },
      ref
    ) => {
      const id = useId();
      const mapId = `react-openlayers-map-${id}`;
      const mapObj = useRef<Map>(
        new Map({
          controls: defaultControls({
            zoom: isZoomAbled,
            rotate: isRotateAbled,
          }).extend([]),
          layers: isShownOsm
            ? [
                new TileLayer({
                  source: new OSM({
                    crossOrigin: "anonymous",
                  }),
                }),
              ]
            : undefined,
          // 하위 요소 중 id 가 map 인 element가 있어야함.
          view: new View({
            extent: bounds
              ? concat<number>([
                  ...[...fromLonLat(bounds[0]), ...fromLonLat(bounds[1])],
                ])
              : undefined,
            center: fromLonLat(center),
            zoom: zoomLevel,
            maxZoom: !isZoomAbled ? zoomLevel : maxZoom,
            minZoom: !isZoomAbled ? zoomLevel : minZoom,
            constrainResolution: true,
          }),
        })
      );

      useEffect(() => {
        if (mapObj.current) {
          const view = mapObj.current.getView();
          view.setZoom(zoomLevel);
        }
      }, [zoomLevel]);

      useEffect(() => {
        if (mapObj.current) {
          const view = mapObj.current.getView();
          view.setCenter(fromLonLat(center));
        }
      }, [center]);

      useEffect(() => {
        if (mapObj.current && bounds) {
          const view = mapObj.current.getView();
          view.fit(
            boundingExtent([fromLonLat(bounds[0]), fromLonLat(bounds[1])])
          );
        }
      }, [bounds]);

      useHoverCursor(mapObj.current);

      useImperativeHandle(ref, () => mapObj.current);

      useLayoutEffect(() => {
        const mapRef = mapObj.current;
        const defaultZoomControl = mapRef
          .getControls()
          .getArray()
          .find((control: Control) => control instanceof Zoom);

        if (defaultZoomControl) {
          mapRef.removeControl(defaultZoomControl);
        }
        mapRef.setTarget(mapId);
        return () => {
          mapRef.setTarget(undefined);
          mapRef.setLayers([]);
        };
      }, [mapId]);

      // MapContext.Provider 에 객체 저장
      return (
        <MapContext.Provider value={mapObj.current}>
          <FeatureStore isAbledSelection={isAbledSelection}>
            <div
              id={mapId}
              className="react-openlayers-map-container"
              style={{ width, height }}
            >
              {children}
            </div>
          </FeatureStore>
        </MapContext.Provider>
      );
    }
  )
);
