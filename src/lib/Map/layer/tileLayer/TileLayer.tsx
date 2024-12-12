import React, { useRef } from "react";
import { useEffect } from "react";
import { useMap } from "../../hooks";
import OlTileLayer from "ol/layer/Tile";
import { TileUrl } from "../../utils/utils";
import { XYZ } from "ol/source";

export type TileMatrix = {
  [zoomLevel: number]: {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
  };
};

export interface TileLayerProps {
  url: string;

  /**
   * @default 0
   */
  zIndex?: number;

  /**
   * @default 42
   */
  maxZoom?: number;

  /**
   * @default 0
   */
  minZoom?: number;

  /**
   * @default null
   * @description 	
The crossOrigin attribute for loaded images. Note that you must provide a crossOrigin value if you want to access pixel data with the Canvas renderer. See https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image for more detail.
   */
  crossOrigin?: null | string | undefined;

  errorTileUrl?: string;
  /**
   * @desciprtion this is tile position values to be optimized.
   */
  tileMatrix?: TileMatrix;
}

export const TileLayer = ({
  url,
  zIndex = 0,
  maxZoom = 42,
  minZoom = 0,
  crossOrigin = null,
  errorTileUrl,
  tileMatrix,
}: TileLayerProps) => {
  const map = useMap();

  const tileRef = useRef<OlTileLayer<XYZ> | null>(null);

  useEffect(() => {
    const customTmsSource = new XYZ({
      maxZoom,
      minZoom,
      crossOrigin,
      tileUrlFunction: (tileCoord) => {
        const tileUrl = new TileUrl(url);
        const z = tileCoord[0];
        const x = tileCoord[1];
        const y = Math.pow(2, z) - tileCoord[2] - 1;
        const tileImageUrl = tileUrl.getUrlFromPosition(z, x, y);

        const boundary = tileMatrix?.[z];

        if (
          boundary &&
          x >= boundary.minX &&
          x <= boundary.maxX &&
          tileCoord[2] >= boundary.minY &&
          tileCoord[2] <= boundary.maxY
        ) {
          return tileImageUrl;
        }

        return; // 에러 타일 URL 반환
      },
    });

    tileRef.current = new OlTileLayer({
      source: customTmsSource,
      zIndex,
    });
    map.addLayer(tileRef.current);

    return () => {
      tileRef.current && map.removeLayer(tileRef.current);
      tileRef.current = null;
    };
  }, [
    map,
    errorTileUrl,
    zIndex,
    maxZoom,
    minZoom,
    crossOrigin,
    url,
    tileMatrix,
  ]);
  return <></>;
};
