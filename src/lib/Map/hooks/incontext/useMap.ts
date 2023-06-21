import { useContext } from "react";
import { MapContext } from "../../MapContext";
import { Map } from "ol";

export function useMap() {
  return useContext(MapContext) as Map;
}
