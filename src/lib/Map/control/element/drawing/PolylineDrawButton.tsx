import React, { useCallback, useEffect, useId, useRef } from "react";
import { Button, ButtonProps } from "../Button";
import { Draw } from "ol/interaction";
import Snap from "ol/interaction/Snap";
import Style from "ol/style/Style";
import { DrawEvent } from "ol/interaction/Draw";
import Stroke from "ol/style/Stroke";
import Fill from "ol/style/Fill";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import DoubleClickZoom from "ol/interaction/DoubleClickZoom";
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
  const sketchSourceRef = useRef<VectorSource | null>(null);
  const sketchLayerRef = useRef<VectorLayer<VectorSource> | null>(null);
  const firstPointCoordRef = useRef<Coordinate | null>(null);

  // 그리기 종료 함수
  const finishDrawing = useCallback(() => {
    if (drawRef.current) {
      map.removeInteraction(drawRef.current);
    }
    if (snapRef.current) {
      map.removeInteraction(snapRef.current);
    }
    // 스케치 레이어 정리
    if (sketchLayerRef.current) {
      map.removeLayer(sketchLayerRef.current);
      sketchLayerRef.current = null;
    }
    if (sketchSourceRef.current) {
      sketchSourceRef.current.clear();
      sketchSourceRef.current = null;
    }
    // 더블클릭 줌 복구
    map.getInteractions().forEach((i) => {
      if (i instanceof DoubleClickZoom) i.setActive(true);
    });
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
    // 더블클릭 줌 비활성화 (드로잉 종료 제스처와 충돌 방지)
    map.getInteractions().forEach((i) => {
      if (i instanceof DoubleClickZoom) i.setActive(false);
    });

    // 스케치 소스/레이어 준비 및 추가
    if (!sketchSourceRef.current) {
      sketchSourceRef.current = new VectorSource();
    }
    if (!sketchLayerRef.current) {
      sketchLayerRef.current = new VectorLayer({
        source: sketchSourceRef.current,
      });
      map.addLayer(sketchLayerRef.current);
    }

    // 인터랙션 추가 (스케치 소스 사용)
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

  // 첫 점 클릭 시 마무리
  const handleLeftClickFinishOnFirst = useCallback(
    (e: MouseEvent) => {
      if (!isActive || !drawRef.current || !firstPointCoordRef.current) return;
      // 현재 클릭 위치 픽셀과 첫 점 픽셀 거리 비교
      const clickPixel = map.getEventPixel(e as any);
      const firstPixel = map.getPixelFromCoordinate(firstPointCoordRef.current);
      const dx = clickPixel[0] - firstPixel[0];
      const dy = clickPixel[1] - firstPixel[1];
      const dist = Math.sqrt(dx * dx + dy * dy);
      const tolerancePx = 8; // 허용 오차(px)
      if (dist <= tolerancePx) {
        e.preventDefault();
        drawRef.current.finishDrawing();
        // finishDrawing()은 drawend에서 호출되므로 여기서는 중복 호출하지 않음
      }
    },
    [isActive, map]
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
    viewport.addEventListener("click", handleLeftClickFinishOnFirst);

    return () => {
      viewport.removeEventListener("contextmenu", handleRightClick);
      viewport.removeEventListener("dblclick", handleDoubleClick);
      viewport.removeEventListener("click", handleLeftClickFinishOnFirst);
    };
  }, [handleRightClick, handleDoubleClick, handleLeftClickFinishOnFirst, map]);

  // Draw 이벤트 등록
  useEffect(() => {
    const drawingInstance = drawRef.current;
    if (!drawingInstance) return;

    const onStart = (ev: DrawEvent) => {
      // 첫 클릭 좌표 저장
      const geom = ev.feature.getGeometry() as any;
      if (geom && typeof geom.getCoordinates === "function") {
        const coords = geom.getCoordinates();
        if (Array.isArray(coords) && coords.length > 0) {
          firstPointCoordRef.current = coords[0];
        }
      }
    };

    drawingInstance.on("drawstart", onStart as any);
    drawingInstance.on("drawend", drawing);

    return () => {
      drawingInstance.un("drawstart", onStart as any);
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

      // 기존 인터랙션 제거
      if (drawRef.current) {
        map.removeInteraction(drawRef.current);
      }
      if (snapRef.current) {
        map.removeInteraction(snapRef.current);
        snapRef.current = null;
      }

      // 스케치 소스 보장
      if (!sketchSourceRef.current) {
        sketchSourceRef.current = new VectorSource();
      }

      if (vectorSources.length > 0) {
        const traceSource = vectorSources[0];

        // Draw 인터랙션 생성 (트레이스 가능)
        drawRef.current = new Draw({
          type: "LineString",
          source: sketchSourceRef.current,
          trace: true as any,
          traceSource: traceSource as any,
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

        map.addInteraction(drawRef.current);
        map.addInteraction(snapRef.current);
      } else {
        // 트레이스 대상이 없어도 기본 드로잉 가능하도록 구성
        drawRef.current = new Draw({
          type: "LineString",
          source: sketchSourceRef.current,
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

        map.addInteraction(drawRef.current);
      }
    } else {
      // 비활성화 시 정리
      if (drawRef.current) {
        map.removeInteraction(drawRef.current);
        drawRef.current = null;
      }
      if (snapRef.current) {
        map.removeInteraction(snapRef.current);
        snapRef.current = null;
      }
      if (sketchLayerRef.current) {
        map.removeLayer(sketchLayerRef.current);
        sketchLayerRef.current = null;
      }
      if (sketchSourceRef.current) {
        sketchSourceRef.current.clear();
        sketchSourceRef.current = null;
      }
      map.getViewport().style.cursor = "pointer";
      map.getInteractions().forEach((i) => {
        if (i instanceof DoubleClickZoom) i.setActive(true);
      });
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
        <LineSegment size={26} color={isActive ? "white" : "#455A64"} />
      </InnerButton>
    </Button>
  );
}
