import React, { useId } from "react";
import { Button, ButtonProps } from "../Button";
import { useEffect, useRef } from "react";
import { Draw } from "ol/interaction";
import { useMap } from "../../../hooks";
import Style from "ol/style/Style";
import { DrawEvent, createBox } from "ol/interaction/Draw";
import Stroke from "ol/style/Stroke";
import Fill from "ol/style/Fill";
import { RectangleIcon } from "../../../constants/icons/RectangleIcon";
import { useControlSection } from "../../layout";
import { InnerButton } from "../InnerButton";
import { useCallback } from "react";
import { ANNOTATION_COLOR } from "src/lib/Map/constants";
import {
  FeatureFromGeojson,
  useFeaturesStore,
} from "src/lib/Map/FeaturesStore";
import { positionsFromFeature } from "src/lib/utils";
import { makeGeojsonShape } from "src/lib/utils/makeGeojsonShape";
import { Coordinate } from "ol/coordinate";

export interface RectangleDrawButtonProps extends ButtonProps {
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

export function RectangleDrawButton({
  onEnd,
  onClick,
  onCanvas = false,
  onStart,
  color = "BLUE",
  disabled,
  ...props
}: RectangleDrawButtonProps) {
  const map = useMap();
  const id = useId();
  const buttonId = `controlbutton-${id}`;
  const { selectButton, selectedButtonId } = useControlSection();

  const isActive = buttonId === selectedButtonId;
  const { addGeoJson } = useFeaturesStore();
  const createDraw = useCallback(
    () =>
      new Draw({
        source: undefined,
        type: "Circle",
        geometryFunction: createBox(),
        style: new Style({
          zIndex: 1000,
          stroke: new Stroke({
            color: ANNOTATION_COLOR[color].stroke(1),
            width: 2,
          }),
          fill: new Fill({
            color: ANNOTATION_COLOR[color].fill(1),
          }),
        }),
      }),
    [color]
  );

  const drawRef = useRef(createDraw());
  const isCancellingRef = useRef(false);

  useEffect(() => {
    // 색상 등 변경 시 새 Draw 인스턴스로 교체
    drawRef.current = createDraw();
  }, [onCanvas, color, createDraw]);

  const startDrawing = () => {
    if (onClick) {
      onClick();
    }

    if (onStart) {
      onStart();
    }
    isCancellingRef.current = false;
    map.getViewport().style.cursor = "crosshair";
    map.setProperties({ isDrawing: true });
    map.addInteraction(drawRef.current);
  };

  const drawing = useCallback(
    (event: DrawEvent) => {
      if (isCancellingRef.current) {
        // 사용자가 우클릭으로 취소한 경우 결과를 저장하지 않고 종료 처리만 수행
        isCancellingRef.current = false;
        selectButton("");
        map.getViewport().style.cursor = "pointer";
        map.removeInteraction(drawRef.current);
        setTimeout(() => map.setProperties({ isDrawing: false }), 100);
        return;
      }
      const feature = event.feature;

      const newPosition = positionsFromFeature(feature, true) as Coordinate[][];

      const newGeoJson = makeGeojsonShape(
        {
          type: "Polygon",
          coordinates: newPosition,
        },
        {
          title: "unknown",
          comment: "",
          issueDegree: "심각도",
          issue: "이슈 사항",
          issueGrade: 1,
          type: "rectangle",
          color: "blue",
          opacity: 1,
          fontSize: 12,
          original_type: "rectangle",
          isSelected: true,
        }
      );

      selectButton("");
      map.getViewport().style.cursor = "pointer";
      map.removeInteraction(drawRef.current);

      if (onEnd) {
        onEnd(newGeoJson);
      }
      if (onCanvas) {
        addGeoJson(newGeoJson);
      }
      setTimeout(() => map.setProperties({ isDrawing: false }), 100);
    },
    [selectButton, map, onEnd, onCanvas, addGeoJson]
  );

  useEffect(() => {
    const drawingInstance = drawRef.current;

    drawingInstance.on("drawend", drawing);
    return () => {
      drawingInstance.un("drawend", drawing);
    };
  }, [drawing]);

  // 우클릭(컨텍스트 메뉴)로 그리기 취소
  useEffect(() => {
    const viewport = map.getViewport();
    const onContextMenu = (e: MouseEvent) => {
      if (!isActive) return;
      e.preventDefault();
      e.stopPropagation();
      isCancellingRef.current = true;
      // 즉시 UI/상태 해제 처리 (버튼 선택 해제, 커서 복원, isDrawing 해제)
      selectButton("");
      map.getViewport().style.cursor = "pointer";
      setTimeout(() => map.setProperties({ isDrawing: false }), 0);

      // OpenLayers 드로잉 중단 및 인터랙션 제거
      if (drawRef.current) {
        try {
          // @ts-ignore - abortDrawing 존재
          drawRef.current.abortDrawing();
        } catch (_) {
          // 일부 버전 호환: 인터랙션 제거로 대체
        }
        map.removeInteraction(drawRef.current);
        // 재시작 가능하도록 새 Draw 인스턴스 준비
        drawRef.current = createDraw();
      }
    };
    viewport.addEventListener("contextmenu", onContextMenu);
    return () => {
      viewport.removeEventListener("contextmenu", onContextMenu);
    };
  }, [isActive, map, selectButton, createDraw]);

  useEffect(() => {
    if (!isActive) {
      map.removeInteraction(drawRef.current);
    }
  }, [isActive, map]);

  return (
    <Button
      id={buttonId}
      hasPopup
      disabled={disabled}
      isDisabled={disabled}
      popupText="Rectangle"
      onClick={() => {
        if (isActive) {
          selectButton("");
          map.setProperties({ isDrawing: false });
          map.getViewport().style.cursor = "pointer";
        } else {
          selectButton(buttonId);
          startDrawing();
        }
      }}
      isActive={isActive}
      {...props}
    >
      <InnerButton isActive={isActive}>
        <RectangleIcon size={26} color={isActive ? "white" : "#455A64"} />
      </InnerButton>
    </Button>
  );
}
