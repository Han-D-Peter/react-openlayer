import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

import json from "../../sample.json";
import { MakeGeojsonShape } from "../utils/makeGeojsonShape";
import { Coordinate, IssueGeoJsonLayer } from "./layer";

export type FeatureFromGeojson = {
  type: "Feature";
  id: string;
  geometry: MakeGeojsonShape;
  properties: Record<string, any>;
};

export type FeatureCollection = {
  type: "FeatureCollection";
  features: FeatureFromGeojson[];
};

interface FeaturesGeoJsonStore {
  geoJson: FeatureCollection;
  changeGeoJson: (geoJson: FeatureCollection) => void;
  addGeoJson: (newGeoJson: FeatureFromGeojson) => void;
  removeGeoJson: (geoJsonId: string) => void;
  getGeoJsonElement: (getJsonId: string) => FeatureFromGeojson | undefined;
  updateGeoJson: (
    id: string,
    updatedGeoJson: Omit<FeatureFromGeojson, "id">
  ) => void;
}

interface FeaturesStoreProps {
  geoJson: FeatureCollection;
  onChange?: (geoJson: FeatureCollection) => void;
  projectionCode: Coordinate;
  children?: ReactNode;
  zIndex?: number;
}

export const FeaturesStoreContext = createContext<FeaturesGeoJsonStore | null>(
  null
);

export const useFeaturesStore = () =>
  useContext(FeaturesStoreContext) as FeaturesGeoJsonStore;

export function FeaturesStore({
  children,
  geoJson,
  projectionCode,
  onChange,
  zIndex = 1,
}: FeaturesStoreProps) {
  const [geoJsonState, setGeoJson] = useState<FeatureCollection>({
    type: "FeatureCollection",
    features: [],
  });

  useEffect(() => {
    console.log("store render", geoJson);
    setGeoJson(geoJson);
  }, [geoJson]);

  const changeGeoJson = useCallback(
    (geoJsonForReplace: FeatureCollection) => {
      if (onChange) {
        onChange(geoJsonForReplace);
      } else {
        setGeoJson(geoJsonForReplace);
      }
    },
    [onChange]
  );

  const addGeoJson = useCallback(
    (newGeoJson: FeatureFromGeojson) => {
      const unSelectedFeatures = geoJsonState.features.map((feature) => {
        feature.properties["isSelected"] = false;
        return feature;
      });
      const addedGeoJson: FeatureCollection = {
        type: "FeatureCollection",
        features: [...unSelectedFeatures, newGeoJson],
      };

      if (onChange) {
        onChange(addedGeoJson);
      } else {
        setGeoJson(addedGeoJson);
      }
    },
    [geoJsonState.features, onChange]
  );

  const updateGeoJson = useCallback(
    (id: string, updatedGeoJson: Omit<FeatureFromGeojson, "id">) => {
      const filtered = geoJsonState.features.filter(
        (feature) => feature.id !== id
      );
      const target = geoJsonState.features.find(
        (feature) => feature.id === id
      )!;

      const updated: FeatureFromGeojson = {
        ...updatedGeoJson,
        id,
        properties: { ...target.properties, ...updatedGeoJson.properties },
      };

      const updatedMadeGeoJson: FeatureCollection = {
        type: "FeatureCollection",
        features: [...filtered, updated],
      };

      if (onChange) {
        onChange(updatedMadeGeoJson);
      } else {
        setGeoJson(updatedMadeGeoJson);
      }
    },
    [geoJsonState.features, onChange]
  );

  const removeGeoJson = useCallback(
    (geoJsonId: string) => {
      const filtered = geoJsonState.features.filter((feature) => {
        return feature.id !== geoJsonId;
      });

      const removedMadeGeoJson: FeatureCollection = {
        ...geoJsonState,
        features: filtered,
      };

      if (onChange) {
        onChange(removedMadeGeoJson);
      } else {
        setGeoJson(removedMadeGeoJson);
      }
    },
    [geoJsonState, onChange]
  );

  const getGeoJsonElement = useCallback(
    (geoJsonId: string) => {
      const target = geoJsonState.features.find(
        (feature) => feature.id === geoJsonId
      );

      return target;
    },
    [geoJsonState]
  );

  const provideValues = useMemo(
    () => ({
      geoJson: geoJsonState,
      changeGeoJson,
      addGeoJson,
      removeGeoJson,
      updateGeoJson,
      getGeoJsonElement,
    }),
    [
      geoJsonState,
      changeGeoJson,
      addGeoJson,
      removeGeoJson,
      updateGeoJson,
      getGeoJsonElement,
    ]
  );

  console.log("inner store", geoJsonState);

  return (
    <FeaturesStoreContext.Provider value={provideValues}>
      <IssueGeoJsonLayer
        zIndex={zIndex}
        geoJson={geoJsonState}
        projectionCode={projectionCode}
      />
      {children}
    </FeaturesStoreContext.Provider>
  );
}
