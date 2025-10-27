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
  const [, setRotate, resetRotation] = useMapRotation();
  const [mouseDown, setMouseDown] = useState(false);
  const [rotation, setRotation] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const map = useMap();

  // 화면 회전 상태를 실시간으로 감지하고 CompassWheel에 반영
  useEffect(() => {
    if (!map) return;

    const updateCompassRotation = () => {
      const view = map.getView();
      const currentRotation = view.getRotation();
      const rotationInDegrees = (currentRotation * 180) / Math.PI;

      // CompassWheel의 회전을 화면 회전과 같은 방향으로 설정
      const compassRotation = rotationInDegrees;
      setRotation(compassRotation);
    };

    // 초기 회전 값 설정
    updateCompassRotation();

    // 맵 회전 이벤트 리스너 등록
    map.getView().on("change:rotation", updateCompassRotation);

    return () => {
      map.getView().un("change:rotation", updateCompassRotation);
    };
  }, [map]);

  const compassSize = (size: Size) => {
    if (size === "sm") {
      return 72;
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
      if (mouseDown && map) {
        const { movementY } = e;
        const abjustedMovementY = movementY * 0.7;

        setRotation((prevRotation) => {
          let newRotation = (prevRotation + abjustedMovementY) % 360;
          if (newRotation < 0) {
            newRotation += 360;
          }

          // 화면 회전을 CompassWheel 회전과 같은 방향으로 적용
          const screenRotation = newRotation;
          const rotationInRadians = (screenRotation * Math.PI) / 180;

          // 맵 뷰의 회전을 직접 업데이트
          map.getView().setRotation(rotationInRadians);

          if (onWheel) {
            onWheel(newRotation);
          }
          setRotate(newRotation);
          return newRotation;
        });
      }
    },
    [mouseDown, onWheel, setRotate, map]
  );

  const resetValue = () => {
    setRotation(0);
    resetRotation();

    // 맵 뷰의 회전도 함께 리셋
    if (map) {
      map.getView().setRotation(0);
    }
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
          transform: `rotate(${rotation}deg)`,
          transformOrigin: "center center",
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

              // 맵 뷰의 회전도 함께 업데이트
              if (map) {
                const screenRotation = rotation;
                const rotationInRadians = (screenRotation * Math.PI) / 180;
                map.getView().setRotation(rotationInRadians);
              }
            }}
          >
            <input
              value={rotation.toFixed(0)}
              onChange={(e) => {
                const newRotation = Number(e.target.value);
                setRotation(newRotation);
                setRotate(newRotation);

                // 맵 뷰의 회전도 함께 업데이트
                if (map) {
                  const screenRotation = newRotation;
                  const rotationInRadians = (screenRotation * Math.PI) / 180;
                  map.getView().setRotation(rotationInRadians);
                }
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
