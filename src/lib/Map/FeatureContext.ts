import { createContext } from "react";
import { FeatureFromGeojson } from "./FeaturesStore";

export interface FeatureContextItems {
  selectedFeature: FeatureFromGeojson | null;
  selectFeature: (feature: FeatureFromGeojson | null) => void;
  unSelectFeature: () => void;
}

export const FeatureContext = createContext<FeatureContextItems | null>(null);
