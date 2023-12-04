import { Map } from "ol";
import { createContext, useContext } from "react";

interface SyncMapValueContextProps {
  zoomLevel: number;
  rotate: number;
}

export const SyncMapContext = createContext<Map | null>(null);

export const SyncMapValueContext =
  createContext<SyncMapValueContextProps | null>(null);

export const useSyncMapContext = () => {
  return useContext(SyncMapContext) as Map;
};

export const useSyncMapValueContext = () => {
  return useContext(SyncMapValueContext) as SyncMapValueContextProps;
};
