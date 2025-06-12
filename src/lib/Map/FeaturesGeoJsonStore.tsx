import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import json from "../../sample.json";
import { GeometryType, MakeGeojsonShape } from "../utils/makeGeojsonShape";

type FeatureFromGeojson = {
  type: "Feature";
  id: string;
  geometry: MakeGeojsonShape;
  properties: Object;
};

type FeatureCollection = {
  type: "FeatureCollection";
  features: FeatureFromGeojson[];
};

interface FeaturesGeoJsonStore {
  geoJson: FeatureCollection;
  changeGeoJson: (geoJson: FeatureCollection) => void;
  addGeoJson: (newGeoJson: FeatureFromGeojson) => void;
  removeGeoJson: (geoJsonId: string) => void;
  updateGeoJson: (
    id: string,
    updatedGeoJson: Omit<FeatureFromGeojson, "id">
  ) => void;
}

interface FeaturesStoreProps {
  geoJson: FeatureCollection;
  children?: ReactNode;
}

export const FeaturesStoreContext = createContext<FeaturesGeoJsonStore | null>(
  null
);

export const useFeaturesStore = () =>
  useContext(FeaturesStoreContext) as FeaturesGeoJsonStore;

export function FeaturesStore({ children, geoJson }: FeaturesStoreProps) {
  const [geoJsonState, setGeoJson] = useState<FeatureCollection>({
    type: "FeatureCollection",
    features: [],
  });

  const changeGeoJson = useCallback((geoJson: FeatureCollection) => {
    setGeoJson(geoJson);
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
      const updated: FeatureFromGeojson = { ...updatedGeoJson, id };
      setGeoJson({
        type: "FeatureCollection",
        features: [...filtered, updated],
      });
    },
    [geoJsonState]
  );

  const removeGeoJson = useCallback(
    (geoJsonId: string) => {
      const filtered = geoJsonState.features.filter(
        (feature) => feature.id !== geoJsonId
      );

      setGeoJson({ ...geoJsonState, features: filtered });
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
    }),
    [geoJsonState, changeGeoJson, addGeoJson, removeGeoJson, updateGeoJson]
  );

  useEffect(() => {
    setGeoJson(geoJson);
  }, [geoJson]);

  return (
    <FeaturesStoreContext.Provider value={provideValues}>
      {children}
    </FeaturesStoreContext.Provider>
  );
}
