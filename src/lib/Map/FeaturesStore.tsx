import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
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
  properties: Object;
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
  projectionCode: Coordinate;
  children?: ReactNode;
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
}: FeaturesStoreProps) {
  const [geoJsonState, setGeoJson] = useState<FeatureCollection>({
    type: "FeatureCollection",
    features: [],
  });

  useLayoutEffect(() => {
    setGeoJson(geoJson);
  }, [geoJson]);

  const changeGeoJson = useCallback((geoJsonForReplace: FeatureCollection) => {
    setGeoJson(geoJsonForReplace);
  }, []);

  const addGeoJson = useCallback(
    (newGeoJson: FeatureFromGeojson) => {
      setGeoJson({
        type: "FeatureCollection",
        features: [...geoJsonState.features, newGeoJson],
      });
    },
    [geoJsonState]
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

      setGeoJson({
        type: "FeatureCollection",
        features: [...filtered, updated],
      });
    },
    [geoJsonState]
  );

  const removeGeoJson = useCallback(
    (geoJsonId: string) => {
      const filtered = geoJsonState.features.filter((feature) => {
        return feature.id !== geoJsonId;
      });

      setGeoJson({ ...geoJsonState, features: filtered });
    },
    [geoJsonState]
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

  return (
    <FeaturesStoreContext.Provider value={provideValues}>
      <IssueGeoJsonLayer
        geoJson={geoJsonState}
        projectionCode={projectionCode}
      />
      {children}
    </FeaturesStoreContext.Provider>
  );
}
