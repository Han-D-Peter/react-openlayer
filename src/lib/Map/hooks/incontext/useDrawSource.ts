import VectorSource from "ol/source/Vector";
import { useContext } from "react";
import { ControlContext } from "../../MapContainer";

export default function useDrawSource() {
  return useContext(ControlContext) as {
    drawVectorSource: VectorSource;
  };
}
