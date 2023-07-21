import React, {
  createContext,
  CSSProperties,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { ReactNode, useEffect, useRef } from "react";
import { useMap } from "../../hooks";
import { Control } from "ol/control";

export interface ControlSectionProps {
  children?: ReactNode;
  style?: CSSProperties;
}

type ControlSectionContextProps = {
  selectedButtonId: string;
  selectButton: (id: string) => void;
};

const ControlSectionContext = createContext<ControlSectionContextProps | null>(
  null
);

export const useControlSection = () => {
  return useContext(ControlSectionContext) as ControlSectionContextProps;
};

export const ControlSection = ({
  children,
  style = { position: "absolute", left: "10px" },
}: ControlSectionProps) => {
  const map = useMap();
  const ref = useRef<HTMLDivElement>(null);
  const [selectedButtonId, setSelectedButtonId] = useState("");

  const selectButton = useCallback((id: string) => {
    setSelectedButtonId(id);
  }, []);

  const contextValue = useMemo(
    () => ({
      selectedButtonId,
      selectButton,
    }),
    [selectedButtonId, selectButton]
  );

  useEffect(() => {
    if (!map) return;
    const controlSection = new Control({
      element: ref.current ? ref.current : undefined,
    });
    map.addControl(controlSection);
    return () => {
      map.removeControl(controlSection);
    };
  }, [map]);

  return (
    <ControlSectionContext.Provider value={contextValue}>
      <div ref={ref} style={style}>
        {children}
      </div>
    </ControlSectionContext.Provider>
  );
};
