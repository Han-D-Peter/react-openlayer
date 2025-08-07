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
  onLoad?: (isLoading: boolean) => void;
}

export interface ImageOverlayRef {
  removeFrom: () => void;
  addTo: () => void;
}

export const ImageOverlay = forwardRef<ImageOverlayRef, ImageOverlayProps>(
  ({ imageUrl, altText = "unknown", zIndex = 0, bounds, onLoad }, ref) => {
    const map = useMap();
    const imageRef = useRef<ImageLayer<ImageStatic>>(new ImageLayer());

    const removeFrom = useCallback(() => {
      if (imageRef.current) {
        map.removeLayer(imageRef.current);
      }
    }, [map]);

    const addTo = useCallback(() => {
      if (imageRef.current) {
        map.addLayer(imageRef.current);
      }
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
      function handleLoadStart() {
        onLoad?.(true);
      }
      function handleLoadEnd() {
        onLoad?.(false);
      }
      const imageStatic = new ImageStatic({
        url: imageUrl,
        imageExtent: bounds.flat(),
        projection: "EPSG:4326",
      });

      imageStatic.on("imageloadstart", handleLoadStart);
      imageStatic.on("imageloadend", handleLoadEnd);

      if (imageRef.current) {
        imageRef.current.setSource(imageStatic);
      }

      return () => {
        if (imageRef.current) {
          imageRef.current.setSource(null);
        }
        imageStatic.un("imageloadstart", handleLoadStart);
        imageStatic.un("imageloadend", handleLoadEnd);
      };
    }, [bounds, imageUrl, onLoad]);

    useEffect(() => {
      if (imageRef.current) {
        imageRef.current.setZIndex(zIndex);
      }
    }, [zIndex]);

    useEffect(() => {
      const imageLayer = imageRef.current;
      if (imageLayer) {
        map.addLayer(imageLayer);
      }

      return () => {
        if (imageLayer) {
          map.removeLayer(imageLayer);
        }
      };
    }, []);
    return <></>;
  }
);
