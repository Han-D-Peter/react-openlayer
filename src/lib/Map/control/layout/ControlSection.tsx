import React, { CSSProperties } from "react";
import { ReactNode, useEffect, useRef } from "react";
import { useMap } from "../../hooks";
import { Control } from "ol/control";

export interface ControlSectionProps {
  children?: ReactNode;
  style?: CSSProperties;
}

export const ControlSection = ({
  children,
  style = { position: "absolute", left: "10px" },
}: ControlSectionProps) => {
  const map = useMap();
  const ref = useRef<HTMLDivElement>(null);

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
    <div ref={ref} style={style}>
      {children}
    </div>
  );
};
