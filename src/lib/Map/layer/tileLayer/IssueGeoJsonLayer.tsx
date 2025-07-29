import React from "react";
import { useEffect, useRef } from "react";
import GeoJSON from "ol/format/GeoJSON";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { useMap } from "../../hooks";
import { Fill, Stroke, Style, Text } from "ol/style";
import { Snap } from "ol/interaction";
import { ANNOTATION_COLOR } from "../../constants";
import { Coordinate } from "./GeoJsonLayer";
import { FeatureCollection } from "../..";

export interface IssueGeoJsonLayerProps {
  geoJson: FeatureCollection;

  /**
   * @default "EPSG:5186"
   * @description You can set coordinate option of geJson.
   */
  projectionCode?: Coordinate;

  zIndex?: number;
}

export function IssueGeoJsonLayer({
  geoJson,
  zIndex = 1,
  projectionCode = "EPSG:5186",
}: IssueGeoJsonLayerProps) {
  const map = useMap();

  const geoJsonLayer = useRef<VectorLayer<VectorSource> | null>(null);

  const fromProjection = projectionCode;
  const toProjection = "EPSG:3857";

  useEffect(() => {
    if (geoJsonLayer.current) {
      geoJsonLayer.current.setZIndex(zIndex);
    }
  }, [zIndex]);

  useEffect(() => {
    const showingFiltered: FeatureCollection = {
      type: "FeatureCollection",
      features: geoJson.features.filter(
        (feature) => feature.properties["isShown"] === true
      ),
    };

    console.log("showingFiltered", showingFiltered);
    const geoJsonFormat = new GeoJSON({ extractGeometryName: true });
    const features = geoJsonFormat.readFeatures(showingFiltered);

    features.forEach((feature) => {
      const geoMetry = feature.getGeometry();
      if (geoMetry) {
        geoMetry.transform(fromProjection, toProjection);
      }
    });

    // 내부 관리용 drawVectorSource에 feature 추가

    // 화면 표시용 별도 VectorSource 생성
    const vectorSource = new VectorSource({
      features: features,
    });

    const vectorLayer = new VectorLayer({
      zIndex,
      source: vectorSource, // drawVectorSource가 아님!
      style: function (feature) {
        const properties = feature.getProperties();
        const type = properties["type"] as string;
        const title = properties["title"] as string;
        const isSelected = properties["isSelected"] as boolean;
        const color = properties["color"]
          ? ((
              properties["color"] as string
            ).toUpperCase() as keyof typeof ANNOTATION_COLOR)
          : "BLUE";
        const opacity = (properties["opacity"] as number) ?? 1;
        if (type !== "marker" && type !== "text") {
          return new Style({
            stroke: new Stroke({
              color: isSelected
                ? "rgba(0, 0, 0, 1)"
                : ANNOTATION_COLOR[color].stroke(opacity),
              width: 2,
            }),
            fill: new Fill({
              color: isSelected
                ? "rgba(0, 0, 0, 0.6)"
                : ANNOTATION_COLOR[color].fill(opacity),
            }),
            text: new Text({
              text: title,
              font: "12px Calibri,sans-serif",
              fill: new Fill({ color: "#000" }),
              stroke: new Stroke({ color: "#fff", width: 3 }),
            }),
          });
        } else {
          return new Style({
            stroke: new Stroke({
              color: feature.getProperties()["color"],
            }),
            text: new Text({
              text: title,
              font: "12px Calibri,sans-serif",
              fill: new Fill({ color: "#000" }),
              stroke: new Stroke({ color: "#fff", width: 3 }),
            }),
          });
        }
      },
    });

    geoJsonLayer.current = vectorLayer;

    const snap = new Snap({
      source: vectorSource,
    });

    map.addInteraction(snap);
    map.addLayer(vectorLayer);

    return () => {
      map.removeLayer(vectorLayer);
      map.removeInteraction(snap);
    };
  }, [map, geoJson, projectionCode]);
  return <></>;
}
