import { useContext } from "react";
import { SyncMapContext, SyncMapContextProps } from "../../SyncMapGroup";

export function useSyncMapContext() {
  return useContext(SyncMapContext) as SyncMapContextProps;
}
