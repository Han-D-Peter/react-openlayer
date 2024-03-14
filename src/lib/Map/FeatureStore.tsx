/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { ReactNode, useEffect, useRef } from "react";
import { useMemo } from "react";
import MapBrowserEvent from "ol/MapBrowserEvent";
import { FeatureContext } from "./FeatureContext";
import { useMap } from "./hooks";
import { useResetabledState } from "./hooks/useResetableState";
import { SelectedFeature } from "./layer/SelectedFeature";
import { Geometry } from "ol/geom";
import { Feature } from "ol";
import { FeatureLike } from "ol/Feature";
import VectorSource from "ol/source/Vector";
import { SelectStyle } from "../utils/style";
import { isArray } from "lodash";

export interface FeatureStoreProps {
  /**
   * @default false
   * @description If you set this property to 'true', you can see selection of annotations.
   */
  isAbledSelection?: boolean;

  children?: ReactNode;
}

export function FeatureStore({
  isAbledSelection = false,
  children,
}: FeatureStoreProps) {
  const map = useMap();

  const [selectedFeature, selectFeature, unSelectFeature] = useResetabledState<
    Feature<Geometry> | Feature<Geometry>[] | null
  >();

  const providerValue = useMemo(
    () => ({ selectedFeature, selectFeature, unSelectFeature }),
    [selectedFeature, selectFeature, unSelectFeature]
  );

  const selectedFeatureStyleRef = useRef<SelectStyle>(new SelectStyle());

  const onClick = (e: MapBrowserEvent<any>) => {
    const mapProperties = map.getProperties();

    if (mapProperties["isDrawing"] === true) {
      return;
    }

    const pixel = e.pixel;

    // 겹쳐있는 마커 위에서부터 선택되도록 리버스
    const reversedFeture: FeatureLike[] = map
      .getFeaturesAtPixel(pixel)
      .reverse();

    reversedFeture.forEach((feature) => {
      if (!feature.getProperties().shape) return;
      // 이미 선택한 마커 또 선택하면 해제

      if (selectedFeature === feature) {
        unSelectFeature();
      } else {
        selectFeature(feature as Feature<Geometry>);
      }
    });
  };
  useEffect(() => {
    map.on("click", onClick);
    return () => {
      map.un("click", onClick);
    };
  }, [map, selectedFeature]);

  useEffect(() => {
    const feature = selectedFeature as Feature<Geometry>;
    // 선택 해제
    if (!feature) {
      if (isArray(selectedFeatureStyleRef.current.currentFeature)) {
        selectedFeatureStyleRef.current.makeUnSelectingsStyle();
      } else {
        selectedFeatureStyleRef.current.makeUnSelectingStyle();
      }
      return;
    }

    if (feature.getProperties()["shape"] !== "MultiPoint") {
      selectedFeatureStyleRef.current.makeSelectingStyle(
        feature as Feature<Geometry>
      );
    } else {
      const multiPointSource = feature.getProperties()
        .source as VectorSource<Geometry>;
      const multiPointFeatures = multiPointSource.getFeatures();
      selectedFeatureStyleRef.current.makeSelectingsStyle(multiPointFeatures);
    }
  }, [selectedFeature]);

  return (
    <FeatureContext.Provider value={providerValue}>
      {isAbledSelection && <SelectedFeature feature={selectedFeature} />}
      {children}
    </FeatureContext.Provider>
  );
}
