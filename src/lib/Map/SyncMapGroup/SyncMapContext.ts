import { Map } from "ol";
import { createContext } from "react";

export const SyncMapContext = createContext<Map | null>(null);
