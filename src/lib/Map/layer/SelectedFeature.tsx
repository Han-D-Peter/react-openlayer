import React, { useEffect, useRef, useState } from "react";
import { useMap } from "../hooks";
import VectorLayer from "ol/layer/Vector";
import { Geometry, LineString, Polygon } from "ol/geom";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import { isArray } from "lodash";
import { makeSelectedFeature } from "src/lib/utils/feature";
import { Coordinate } from "ol/coordinate";
import BaseEvent from "ol/events/Event";

export interface SelectedFeatureProps {
  feature: Feature<Geometry> | Feature<Geometry>[] | null;
}

export function SelectedFeature({ feature }: SelectedFeatureProps) {
  const map = useMap();
  const markerLayerRef = useRef<VectorLayer<VectorSource<Geometry>>>(
    new VectorLayer({
      zIndex: 1000,
      source: new VectorSource(),
      // Add your desired style for the markers here
    })
  );

  const [coordinates, setCoordinates] = useState<Coordinate[] | null>(null);

  // 선택된 피처가 없을 때 레이어 제거 로직
  useEffect(() => {
    const markerLayer = markerLayerRef.current;

    if (feature) {
      map.addLayer(markerLayer);
    }
    if (!feature) {
      map.removeLayer(markerLayer);
    }
    return () => {
      if (feature) {
        map.removeLayer(markerLayer);
      }
    };
  }, [map, feature]);

  useEffect(() => {
    const onChange = (e: BaseEvent) => {
      const targetFeature = e.target as Feature;
      const targetGeometry = targetFeature.getGeometry() as Geometry;
      let nomalizedCoordinates;

      if (targetFeature?.getProperties().shape === "Polygon") {
        const coordinates = (targetGeometry as Polygon).getCoordinates();
        coordinates[0].pop();
        nomalizedCoordinates = coordinates[0];
        setCoordinates(nomalizedCoordinates);
      }

      if (targetFeature?.getProperties().shape === "Rectangle") {
        const coordinates = (targetGeometry as Polygon).getCoordinates();
        nomalizedCoordinates = coordinates[0];
        setCoordinates(nomalizedCoordinates);
      }

      if (targetFeature.getProperties().shape === "Polyline") {
        const coordinates = (targetGeometry as LineString).getCoordinates();
        setCoordinates(coordinates);
      }
    };
    if (feature && !isArray(feature)) {
      feature.on("change", onChange);

      return () => {
        feature.un("change", onChange);
      };
    }
  }, [feature]);

  useEffect(() => {
    let nomalizedCoordinates;
    // Multipoint 가 아닐 때
    if (feature && !isArray(feature)) {
      const geometryType = feature.getGeometry()?.getType();
      const geometry = feature.getGeometry();

      if (feature?.getProperties().shape === "Polygon") {
        const coordinates = (geometry as Polygon).getCoordinates();
        coordinates[0].pop();
        nomalizedCoordinates = coordinates[0];
        setCoordinates(nomalizedCoordinates);
      }

      if (feature?.getProperties().shape === "Rectangle") {
        const coordinates = (geometry as Polygon).getCoordinates();
        nomalizedCoordinates = coordinates[0];
        setCoordinates(nomalizedCoordinates);
      }

      if (geometryType === "LineString") {
        const coordinates = (geometry as LineString).getCoordinates();
        setCoordinates(coordinates);
      }

      if (
        feature?.getProperties().shape === "Circle" ||
        feature?.getProperties().shape === "Marker" ||
        feature?.getProperties().shape === "TextMarker" ||
        feature?.getProperties().shape === "MultiPoint"
      ) {
        setCoordinates(null);
      }
    }
  }, [feature]);

  useEffect(() => {
    const markerLayer = markerLayerRef.current;
    const source = markerLayer.getSource() as VectorSource<Geometry>;
    source.clear();
    if (coordinates) {
      const features = makeSelectedFeature(coordinates);

      source.addFeatures(features);

      markerLayer.setSource(source);
    }
  }, [coordinates]);

  return <></>;
}
