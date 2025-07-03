import React, { forwardRef, useCallback, useImperativeHandle } from "react";
import { useEffect, useRef } from "react";
import { useMap } from "../hooks";
import ImageLayer from "ol/layer/Image";
import { ImageStatic } from "ol/source";
import { Location } from "../MapContainer";

export interface ImageOverlayProps {
  imageUrl: string;
  altText?: string;
  zIndex?: number;
  /**
   * @description Set [[minX, minY], [maxX, maxY]]
   */
  bounds: Location[];
}

export interface ImageOverlayRef {
  removeFrom: () => void;
  addTo: () => void;
}

export const ImageOverlay = forwardRef<ImageOverlayRef, ImageOverlayProps>(
  ({ imageUrl, altText = "unknown", zIndex = 0, bounds }, ref) => {
    const map = useMap();
    const imageRef = useRef(
      new ImageLayer({
        source: new ImageStatic({
          url: imageUrl,
          imageExtent: bounds.flat(),
          projection: "EPSG:4326",
        }),
      })
    );

    const removeFrom = useCallback(() => {
      map.removeLayer(imageRef.current);
    }, [map]);

    const addTo = useCallback(() => {
      map.addLayer(imageRef.current);
    }, [map]);

    useImperativeHandle(
      ref,
      () => {
        return {
          removeFrom,
          addTo,
        };
      },
      [removeFrom, addTo]
    );

    useEffect(() => {
      if (imageRef.current) {
        imageRef.current.setSource(
          new ImageStatic({
            url: imageUrl,
            imageExtent: bounds.flat(),
            projection: "EPSG:4326",
          })
        );
      }
    }, [bounds, imageUrl]);

    useEffect(() => {
      if (imageRef.current) {
        imageRef.current.setZIndex(zIndex);
      }
    }, [zIndex]);

    useEffect(() => {
      const imageLayer = imageRef.current;
      map.addLayer(imageLayer);

      return () => {
        map.removeLayer(imageLayer);
      };
    }, []);
    return <></>;
  }
);
