import { Map } from "ol";
import { createContext, useContext } from "react";

export const SyncMapContext = createContext<Map | null>(null);

export const useSyncMapContext = () => {
  return useContext(SyncMapContext) as Map;
};
