import { Map } from "ol";
import { createContext } from "react";

const MapContext = createContext<Map | null>(null);

export default MapContext;
