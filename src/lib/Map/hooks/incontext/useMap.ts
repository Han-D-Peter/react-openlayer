import { useContext } from "react";
import MapContext from "../../MapContext";
import { Map } from "ol";

export default function useMap() {
  return useContext(MapContext) as Map;
}
