/* eslint-disable react-hooks/exhaustive-deps */
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
import { FeatureFromGeojson } from "../FeaturesStore";
import GeoJSON from "ol/format/GeoJSON";

export interface SelectedFeatureProps {
  featureGeoJson: FeatureFromGeojson;
}

export function SelectedFeature({ featureGeoJson }: SelectedFeatureProps) {
  const map = useMap();
  const markerSourceRef = useRef(new VectorSource({ wrapX: false }));
  const markerLayerRef = useRef<VectorLayer<VectorSource<Geometry>>>(
    new VectorLayer({
      zIndex: 50000,
      source: markerSourceRef.current,
      // Add your desired style for the markers here
    })
  );

  const [coordinates, setCoordinates] = useState<Coordinate[] | null>(null);
  const [feature, setFeature] = useState<
    Feature<Geometry> | Feature<Geometry>[] | null
  >(null);

  useEffect(() => {
    if (featureGeoJson) {
      // GeoJSON을 OpenLayers Feature로 변환
      const format = new GeoJSON({ extractGeometryName: true });
      const olFeature = format.readFeature(featureGeoJson, {
        featureProjection: map.getView().getProjection(),
      });
      setFeature(olFeature);
    } else {
      setFeature(null);
    }
  }, [featureGeoJson]);

  // 선택된 피처가 없을 때 레이어 제거 로직
  useEffect(() => {
    const markerLayer = markerLayerRef.current;

    if (feature) {
      map.addLayer(markerLayer);
    }
    if (!feature) {
      markerSourceRef.current.clear();
      map.removeLayer(markerLayer);
    }
    return () => {
      if (feature) {
        markerSourceRef.current.clear();
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
        coordinates[0].pop();
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

      if (geometryType === "Polygon") {
        const coordinates = (geometry as Polygon).getCoordinates();
        coordinates[0].pop();
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
