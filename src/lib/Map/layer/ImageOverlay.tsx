import React from "react";
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

export const ImageOverlay = ({
  imageUrl,
  altText = "unknown",
  zIndex = 0,
  bounds,
}: ImageOverlayProps) => {
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
  }, [bounds]);

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
};
