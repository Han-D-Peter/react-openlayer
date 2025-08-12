import React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useMap } from "../hooks/incontext/useMap";
import { Control } from "ol/control";
import { useMapRotation } from "../hooks";
import { CompassIcon } from "../constants/icons/CompassIcon";

export type Size = "sm" | "md" | "lg";

export interface CompassWheelProps {
  size?: Size;
  onWheel?: (degree: number) => void;
  resetable?: boolean;
  controller?: boolean;
}

export const CompassWheel = ({
  size = "sm",
  onWheel,
  resetable = false,
  controller = false,
}: CompassWheelProps) => {
  const [rotationDegree, setRotate, resetRotation] = useMapRotation();
  const [mouseDown, setMouseDown] = useState(false);
  const [rotation, setRotation] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const map = useMap();

  const compassSize = (size: Size) => {
    if (size === "sm") {
      return 50;
    }
    if (size === "md") {
      return 125;
    }

    if (size === "lg") {
      return 200;
    }
    return 100;
  };

  const handleMouseDown = () => {
    setMouseDown(true);
  };

  const handleMouseUp = () => {
    setMouseDown(false);
  };

  const handleMouseMove = useCallback(
    (e: { movementY: any }) => {
      if (mouseDown) {
        const { movementY } = e;
        const abjustedMovementY = movementY * 0.7;
        setRotation((prevRotation) => {
          let newRotation = (prevRotation + abjustedMovementY) % 360;
          if (newRotation < 0) {
            newRotation += 360;
          }
          if (onWheel) {
            onWheel(newRotation);
          }
          setRotate(newRotation);
          return newRotation;
        });
      }
    },
    [mouseDown]
  );

  const resetValue = () => {
    setRotation(0);
    resetRotation();
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, mouseDown]);

  useEffect(() => {
    const customControl = new Control({
      element: ref.current ? ref.current : undefined,
    });

    map.addControl(customControl);
  }, [map]);

  return (
    <div ref={ref} style={{ position: "absolute", top: "10px", right: "10px" }}>
      <div
        onDoubleClick={resetValue}
        onMouseDown={handleMouseDown}
        style={{
          zIndex: 1,
          transform: `rotate(${rotationDegree}deg)`,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CompassIcon
            draggable={false}
            height={compassSize(size)}
            width={compassSize(size)}
          />
        </div>
      </div>
      {resetable && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <button
            style={{
              width: "60px",
              height: "20px",
              background: "white",
              border: "1px solid #858484",
              borderRadius: "3px",
              paddingBottom: "3px",
              color: "black",
            }}
            onClick={resetValue}
          >
            reset
          </button>
        </div>
      )}
      {controller && (
        <div
          style={{
            marginTop: "px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setRotate(rotation);
            }}
          >
            <input
              value={rotation.toFixed(0)}
              onChange={(e) => {
                setRotation(Number(e.target.value));
                setRotate(Number(e.target.value));
              }}
              type="number"
              name="degree"
              style={{ width: "53px", color: "black" }}
            />
          </form>
        </div>
      )}
    </div>
  );
};
