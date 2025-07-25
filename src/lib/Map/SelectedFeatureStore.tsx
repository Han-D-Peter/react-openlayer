/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { ReactNode, useEffect } from "react";
import { useMemo } from "react";
import MapBrowserEvent from "ol/MapBrowserEvent";
import { FeatureContext } from "./FeatureContext";
import { useDidUpdate, useMap } from "./hooks";
import { useResetabledState } from "./hooks/useResetableState";
import { SelectedFeature } from "./layer/SelectedFeature";
import Feature, { FeatureLike } from "ol/Feature";
import { FeatureFromGeojson, useFeaturesStore } from "./FeaturesStore";
import { fitFeatureToView } from "../utils";
import { Geometry } from "ol/geom";
import GeoJSON from "ol/format/GeoJSON";

export interface SelectedFeatureStoreProps {
  /**
   * @default false
   * @description If you set this property to 'true', you can see selection of annotations.
   */
  isAbledSelection?: boolean;

  children?: ReactNode;

  onSelect?: (value: FeatureFromGeojson | null) => void;

  /**
   * @default true
   * @description If you set this property to 'true', you can see selection of annotations
   */
  isMovable?: boolean;
}

export function SelectedFeatureStore({
  isAbledSelection = false,
  children,
  onSelect,
  isMovable = true,
}: Readonly<SelectedFeatureStoreProps>) {
  const map = useMap();

  const { geoJson, updateGeoJson, changeGeoJson } = useFeaturesStore();

  const [selectedFeature, selectFeature, unSelectFeature] =
    useResetabledState<FeatureFromGeojson>();

  const select = React.useCallback(
    (value: FeatureFromGeojson | null) => {
      onSelect && onSelect(value);
      !onSelect && selectFeature(value);
    },
    [onSelect, selectFeature]
  );

  const providerValue = useMemo(
    () => ({ selectedFeature, selectFeature: select, unSelectFeature }),
    [selectedFeature, select, unSelectFeature]
  );

  const onClick = React.useCallback(
    (e: MapBrowserEvent<any>) => {
      const mapProperties = map.getProperties();

      if (mapProperties["isDrawing"] === true) {
        return;
      }

      const pixel = e.pixel;

      // 겹쳐있는 마커 위에서부터 선택되도록 리버스
      const reversedFeture: FeatureLike[] = map
        .getFeaturesAtPixel(pixel)
        .reverse();

      for (const feature of reversedFeture) {
        const featureId = feature.getId();
        if (!featureId) continue;

        const target = geoJson.features.find((item) => item.id === featureId);
        if (!target) continue;

        if (onSelect) {
          onSelect(target);
        }
        const isAlreadySelected =
          selectedFeature && selectedFeature.id === target.id;

        const updatedGeoJson = {
          ...geoJson,
          features: geoJson.features.map((item) => ({
            ...item,
            properties: {
              ...item.properties,
              isSelected: item.id === target.id ? !isAlreadySelected : false,
            },
          })),
        };

        changeGeoJson(updatedGeoJson);

        if (isAlreadySelected) {
          unSelectFeature();
        }
        // 한 번만 처리하고 break (겹친 feature 중 최상위만 선택)
        break;
      }
    },
    [map, geoJson, onSelect, selectedFeature, changeGeoJson, unSelectFeature]
  );
  useEffect(() => {
    map.on("click", onClick);
    return () => {
      map.un("click", onClick);
    };
  }, [map, onClick, selectedFeature, updateGeoJson]);

  useDidUpdate(() => {
    const selected = geoJson.features.find((feature) => {
      const isSelected = (
        feature.properties as {
          isSelected: boolean;
        }
      ).isSelected;

      return isSelected;
    });

    if (selected) {
      if (isMovable) {
        // Convert GeoJSON geometry to OL Geometry
        // You may need to import 'ol/format/GeoJSON' at the top if not already imported
        // import GeoJSON from 'ol/format/GeoJSON';

        const olGeometry = new GeoJSON().readGeometry(selected.geometry, {
          dataProjection: "EPSG:4326",
          featureProjection: map.getView().getProjection(),
        });

        const feature = new Feature({
          geometry: olGeometry,
          ...selected.properties,
        });
        fitFeatureToView(map, feature as Feature<Geometry>);
      }
      return selectFeature(selected);
    }
    unSelectFeature();
  }, [geoJson, selectFeature, unSelectFeature, isMovable, map]);

  return (
    <FeatureContext.Provider value={providerValue}>
      {isAbledSelection && selectedFeature && (
        <SelectedFeature featureGeoJson={selectedFeature} />
      )}
      {children}
    </FeatureContext.Provider>
  );
}
