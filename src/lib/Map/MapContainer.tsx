import React, { memo, useEffect, useId } from "react";
import {
  ReactNode,
  useLayoutEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import Map from "ol/Map";
import View from "ol/View";
import { Control, Zoom, defaults as defaultControls } from "ol/control";
import { fromLonLat } from "ol/proj";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { MapContext } from "./MapContext";
import { useHoverCursor } from "./hooks/incontext/useHoverCursor";
import { boundingExtent } from "ol/extent";
// CSS import는 사용자가 직접 해야 합니다: import "ol/ol.css";
import DoubleClickZoom from "ol/interaction/DoubleClickZoom";

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
   * @description [[minX, minY], [maxX, maxY]]
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
      },
      ref
    ) => {
      const id = useId();
      const mapId = `react-openlayers-map-${id}`;

      const osmRef = useRef<TileLayer<OSM>>(
        new TileLayer({
          zIndex: -1,
          source: new OSM({
            crossOrigin: "anonymous",
            attributions: [],
          }),
        })
      );

      const mapObj = useRef<Map>(
        new Map({
          view: new View({
            zoom: zoomLevel,
          }),
          controls: defaultControls({
            zoom: isZoomAbled,
            rotate: isRotateAbled,
          }).extend([]),
        })
      );

      useEffect(() => {
        if (isShownOsm) {
          mapObj.current.addLayer(osmRef.current);
        } else {
          mapObj.current.removeLayer(osmRef.current);
        }
      }, [isShownOsm]);

      useEffect(() => {
        if (mapObj.current) {
          const view = mapObj.current.getView();
          view.setMinZoom(!isZoomAbled ? zoomLevel : minZoom);
        }
      }, [isZoomAbled, minZoom, zoomLevel]);

      useEffect(() => {
        if (mapObj.current) {
          const view = mapObj.current.getView();
          view.setMaxZoom(!isZoomAbled ? zoomLevel : maxZoom);
        }
      }, [maxZoom, isZoomAbled, zoomLevel]);

      useEffect(() => {
        if (mapObj.current) {
          const view = mapObj.current.getView();
          view.setZoom(zoomLevel);
        }
      }, [zoomLevel]);

      useEffect(() => {
        if (mapObj.current && center) {
          const view = mapObj.current.getView();
          view.setCenter(fromLonLat(center));
        }
      }, [center?.[0], center?.[1]]);

      useEffect(() => {
        if (mapObj.current && bounds) {
          const view = mapObj.current.getView();

          view.fit(
            boundingExtent([fromLonLat(bounds[0]), fromLonLat(bounds[1])]),
            {
              padding: [20, 20, 20, 20],
            }
          );
        }
      }, [
        bounds?.[0]?.[0],
        bounds?.[0]?.[1],
        bounds?.[1]?.[0],
        bounds?.[1]?.[1],
      ]);

      useHoverCursor(mapObj.current);

      useImperativeHandle(ref, () => mapObj.current);

      useLayoutEffect(() => {
        const mapRef = mapObj.current;
        mapRef.getInteractions().forEach((interaction) => {
          if (interaction instanceof DoubleClickZoom) {
            interaction.setActive(false);
          }
        });
        const defaultZoomControl = mapRef
          .getControls()
          .getArray()
          .find((control: Control) => control instanceof Zoom);

        if (defaultZoomControl) {
          mapRef.removeControl(defaultZoomControl);
        }
        mapRef.setTarget(mapId);
        return () => {
          mapRef.dispose();
          mapRef.setTarget(undefined);
          mapRef.setLayers([]);
        };
      }, [mapId]);

      // MapContext.Provider 에 객체 저장
      return (
        <MapContext.Provider value={mapObj.current}>
          <div
            id={mapId}
            className="react-openlayers-map-container"
            style={{ width, height }}
          >
            {children}
          </div>
        </MapContext.Provider>
      );
    }
  )
);
