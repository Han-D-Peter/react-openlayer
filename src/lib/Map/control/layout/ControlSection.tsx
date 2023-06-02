import { ReactNode, useEffect, useRef } from "react";
import { useMap } from "../../hooks";
import { Control } from "ol/control";

interface ControlSectionProps {
  children?: ReactNode;
}

const ControlSection = ({ children }: ControlSectionProps) => {
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
    <div ref={ref} style={{ position: "absolute", left: "10px" }}>
      {children}
    </div>
  );
};

export default ControlSection;
