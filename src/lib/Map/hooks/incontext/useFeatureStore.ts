import { useContext } from "react";
import { FeatureContext, FeatureContextItems } from "../../FeatureContext";

export function useFeatureStore() {
  return useContext(FeatureContext) as FeatureContextItems;
}
