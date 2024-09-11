import React from "react";
import { useEffect, useRef } from "react";
import proj4 from "proj4";
import GeoJSON from "ol/format/GeoJSON";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { useMap } from "../../hooks";
import { register } from "ol/proj/proj4";
import { Fill, Stroke, Style, Text } from "ol/style";
import { Feature } from "ol";
import { Snap } from "ol/interaction";
import useDrawSource from "../../hooks/incontext/useDrawSource";

proj4.defs(
  "EPSG:5185",
  "+proj=tmerc +lat_0=38 +lon_0=125 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +units=m +no_defs"
);

proj4.defs(
  "EPSG:5186",
  "+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +units=m +no_defs"
);

proj4.defs(
  "EPSG:5187",
  "+proj=tmerc +lat_0=38 +lon_0=129 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +units=m +no_defs"
);

proj4.defs(
  "EPSG:5188",
  "+proj=tmerc +lat_0=38 +lon_0=131 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +units=m +no_defs"
);

proj4.defs(
  "EPSG:3857",
  "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"
);

proj4.defs("EPSG:32648", "+proj=utm +zone=48 +datum=WGS84 +units=m +no_defs");

proj4.defs("EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs");

proj4.defs("WGS:84", "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs");

register(proj4);

export type Coordinate =
  | "EPSG:5185"
  | "EPSG:4326"
  | "EPSG:5186"
  | "EPSG:5187"
  | "EPSG:5188"
  | "EPSG:3857"
  | "EPSG:32648"
  | "WGS:84";

export interface GeoJsonLayerProps {
  geoJson: Record<string, any>;

  /**
   * @default "EPSG:5186"
   * @description You can set coordinate option of geJson.
   */
  projectionCode?: Coordinate;

  color: string;
  zIndex?: number;
}

export function GeoJsonLayer({
  geoJson,
  zIndex = 1,
  color = "blue",
  projectionCode = "EPSG:5186",
}: GeoJsonLayerProps) {
  const map = useMap();
  const { drawVectorSource } = useDrawSource();
  const geoJsonLayer = useRef<VectorLayer<VectorSource> | null>(null);

  const fromProjection = projectionCode;
  const toProjection = "EPSG:3857";

  useEffect(() => {
    if (geoJsonLayer.current) {
      geoJsonLayer.current.setZIndex(zIndex);
    }
  }, [zIndex]);

  useEffect(() => {
    const geoJsonFormat = new GeoJSON({ extractGeometryName: true });
    const features = geoJsonFormat.readFeatures(geoJson);

    features.forEach((feature) => {
      const geoMetry = feature.getGeometry();

      feature.setProperties({ color });

      if (geoMetry) {
        geoMetry.transform(fromProjection, toProjection);
      }
    });

    drawVectorSource.addFeatures(features);

    const vectorLayer = new VectorLayer({
      zIndex,
      source: drawVectorSource,
      style: function (feature) {
        const properties = feature.getProperties();

        const title = properties["Text"];

        if (title) {
          return new Style({
            text: new Text({
              text: title,
              font: "12px Calibri,sans-serif",
              fill: new Fill({
                color: "#000",
              }),
              stroke: new Stroke({
                color: "#fff",
                width: 3,
              }),
            }),
          });
        } else {
          return new Style({
            stroke: new Stroke({
              color: feature.getProperties()["color"],
            }),
          });
        }
      },
    });

    geoJsonLayer.current = vectorLayer;

    const snap = new Snap({
      source: drawVectorSource,
    });

    map.addInteraction(snap);

    map.addLayer(vectorLayer);

    return () => {
      map.removeLayer(vectorLayer);
      features.forEach((feat) => drawVectorSource.removeFeature(feat));
      map.removeInteraction(snap);
    };
  }, [map, geoJson, color, projectionCode]);
  return <></>;
}
