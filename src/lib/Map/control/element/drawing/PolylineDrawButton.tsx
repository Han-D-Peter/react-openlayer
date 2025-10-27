import React, { useCallback, useEffect, useId, useRef } from "react";
import { Button, ButtonProps } from "../Button";
import { Draw } from "ol/interaction";
import Snap from "ol/interaction/Snap";
import Style from "ol/style/Style";
import { DrawEvent } from "ol/interaction/Draw";
import Stroke from "ol/style/Stroke";
import Fill from "ol/style/Fill";
import { Coordinate } from "ol/coordinate";
import { LineSegment } from "@phosphor-icons/react";

import { useMap } from "../../../hooks";
import { useControlSection } from "../../layout";
import { InnerButton } from "../InnerButton";
import { ANNOTATION_COLOR } from "src/lib/Map/constants";
import {
  FeatureFromGeojson,
  useFeaturesStore,
} from "src/lib/Map/FeaturesStore";
import { positionsFromFeature } from "src/lib/utils";
import { makeGeojsonShape } from "src/lib/utils/makeGeojsonShape";
import { useVectorSourceContext } from "../../../hooks/incontext/useVectorSourceContext";

export interface PolylineDrawButtonProps extends ButtonProps {
  /**
   * @description You can get Multipoint feature what was made by callback function.
   */
  onEnd?: (features: FeatureFromGeojson) => void;

  /**
   * @description You can set callback Fn on 'start' event.
   */
  onStart?: () => void;

  /**
   * @default false
   * @description Well... Sometimes you need this drawing tool with using server waht containes DB. if 'onCanvas' set false, react-openlayer will not draw feature on canvas.
   */
  onCanvas?: boolean;
  color?: keyof typeof ANNOTATION_COLOR;
}

export function PolylineDrawButton({
  onEnd,
  onClick,
  onCanvas = false,
  onStart,
  color = "BLUE",
  disabled,
  ...props
}: PolylineDrawButtonProps) {
  const map = useMap();
  const id = useId();
  const buttonId = `controlbutton-${id}`;
  const { selectButton, selectedButtonId } = useControlSection();
  const isActive = buttonId === selectedButtonId;
  const { getVectorSources, vectorSourcesCount } = useVectorSourceContext();

  const { addGeoJson } = useFeaturesStore();
  const drawRef = useRef<Draw | null>(null);
  const snapRef = useRef<Snap | null>(null);

  // 그리기 종료 함수
  const finishDrawing = useCallback(() => {
    if (drawRef.current) {
      map.removeInteraction(drawRef.current);
    }
    if (snapRef.current) {
      map.removeInteraction(snapRef.current);
    }
    selectButton("");
    map.setProperties({ isDrawing: false });
    map.getViewport().style.cursor = "pointer";
  }, [map, selectButton]);

  const startDrawing = () => {
    if (onClick) {
      onClick();
    }

    if (onStart) {
      onStart();
    }
    map.getViewport().style.cursor = "crosshair";
    map.setProperties({ isDrawing: true });
    if (drawRef.current) {
      map.addInteraction(drawRef.current);
    }
  };

  // 이벤트 핸들러들
  const handleRightClick = useCallback(
    (e: MouseEvent) => {
      if (isActive && drawRef.current) {
        e.preventDefault();
        drawRef.current.abortDrawing();
        finishDrawing();
      }
    },
    [isActive, finishDrawing]
  );

  const handleDoubleClick = useCallback(
    (e: MouseEvent) => {
      if (e.detail === 2 && isActive && drawRef.current) {
        e.preventDefault();
        drawRef.current.finishDrawing();
        finishDrawing();
      }
    },
    [isActive, finishDrawing]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" && isActive) {
        finishDrawing();
      }
    },
    [isActive, finishDrawing]
  );

  const drawing = useCallback(
    (event: DrawEvent) => {
      const feature = event.feature;
      const newPosition = positionsFromFeature(feature, true) as Coordinate[];

      const newGeoJson = makeGeojsonShape(
        {
          type: "LineString",
          coordinates: newPosition,
        },
        {
          title: "unknown",
          comment: "",
          issueDegree: "심각도",
          issue: "이슈 사항",
          issueGrade: 1,
          type: "line",
          color: "blue",
          opacity: 1,
          fontSize: 12,
          original_type: "line",
          isSelected: true,
        }
      );

      if (onEnd) {
        onEnd(newGeoJson);
      }
      if (onCanvas) {
        addGeoJson(newGeoJson);
      }

      // 그리기 완료 시 자동으로 종료
      finishDrawing();
    },
    [onEnd, onCanvas, addGeoJson, finishDrawing]
  );

  useEffect(() => {
    if (selectedButtonId !== buttonId) {
      if (drawRef.current) {
        map.removeInteraction(drawRef.current);
      }
    }
  }, [map, selectedButtonId, buttonId]);

  // 이벤트 리스너 등록
  useEffect(() => {
    const viewport = map.getViewport();

    viewport.addEventListener("contextmenu", handleRightClick);
    viewport.addEventListener("dblclick", handleDoubleClick);

    return () => {
      viewport.removeEventListener("contextmenu", handleRightClick);
      viewport.removeEventListener("dblclick", handleDoubleClick);
    };
  }, [handleRightClick, handleDoubleClick, map]);

  // Draw 이벤트 등록
  useEffect(() => {
    const drawingInstance = drawRef.current;
    if (!drawingInstance) return;

    drawingInstance.on("drawend", drawing);

    return () => {
      drawingInstance.un("drawend", drawing);
    };
  }, [drawing]);

  // ESC 키 이벤트 처리
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  // 인터랙션 관리
  useEffect(() => {
    if (isActive) {
      const vectorSources = getVectorSources();

      if (vectorSources.length > 0) {
        const traceSource = vectorSources[0];

        // 기존 인터랙션 제거
        if (drawRef.current) {
          map.removeInteraction(drawRef.current);
        }
        if (snapRef.current) {
          map.removeInteraction(snapRef.current);
        }

        // Draw 인터랙션 생성
        drawRef.current = new Draw({
          type: "LineString",
          source: undefined,
          trace: true,
          traceSource: traceSource,
          style: new Style({
            stroke: new Stroke({
              color: ANNOTATION_COLOR[color].stroke(1),
              width: 2,
            }),
            fill: new Fill({
              color: ANNOTATION_COLOR[color].fill(1),
            }),
          }),
        });

        // Snap 인터랙션 생성
        snapRef.current = new Snap({
          source: traceSource,
        });

        // 인터랙션 추가
        map.addInteraction(drawRef.current);
        map.addInteraction(snapRef.current);
      }
    }
  }, [isActive, vectorSourcesCount, map, color, getVectorSources]);

  return (
    <Button
      id={buttonId}
      isDisabled={disabled}
      disabled={disabled}
      hasPopup
      popupText="Polyline"
      onClick={() => {
        if (isActive) {
          finishDrawing();
        } else {
          selectButton(buttonId);
          startDrawing();
        }
      }}
      isActive={isActive}
      {...props}
    >
      <InnerButton isActive={isActive}>
        <LineSegment size={26} color={isActive ? "white" : "black"} />
      </InnerButton>
    </Button>
  );
}
