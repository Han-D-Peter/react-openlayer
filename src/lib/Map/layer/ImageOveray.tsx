import React from "react";
import { useEffect, useRef } from "react";
import { useMap } from "../hooks";
import ImageLayer from "ol/layer/Image";
import { ImageStatic } from "ol/source";
import { Location } from "../Map";

export interface ImageMarkerProps {
  imageUrl: string;
  altText?: string;
  /**
   * @description Set [[minX, minY], [maxX, maxY]]
   */
  bounds: Location[];
}

const ImageMarker = ({
  imageUrl,
  altText = "unknown",
  bounds,
}: ImageMarkerProps) => {
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
    const imageLayer = imageRef.current;
    map.addLayer(imageLayer);

    return () => {
      map.removeLayer(imageLayer);
    };
  }, []);
  return <></>;
};

export default ImageMarker;
