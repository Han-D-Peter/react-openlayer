import React, { useCallback, useId } from "react";
import { Button, ButtonProps } from "../Button";
import { useEffect, useRef } from "react";
import { Draw } from "ol/interaction";
import { useMap } from "../../../hooks";
import Style from "ol/style/Style";
import { DrawEvent } from "ol/interaction/Draw";
import Stroke from "ol/style/Stroke";
import Fill from "ol/style/Fill";
import { useControlSection } from "../../layout";
import { LineSegment } from "@phosphor-icons/react";
import { InnerButton } from "../InnerButton";
import { ANNOTATION_COLOR } from "src/lib/Map/constants";
import {
  FeatureFromGeojson,
  useFeaturesStore,
} from "src/lib/Map/FeaturesStore";
import { positionsFromFeature } from "src/lib/utils";
import { Coordinate } from "ol/coordinate";
import { makeGeojsonShape } from "src/lib/utils/makeGeojsonShape";

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

  const { addGeoJson } = useFeaturesStore();

  const drawRef = useRef(
    new Draw({
      source: undefined,
      type: "LineString",
      style: new Style({
        stroke: new Stroke({
          color: ANNOTATION_COLOR[color].stroke(1),
          width: 2,
        }),
        fill: new Fill({
          color: ANNOTATION_COLOR[color].fill(1),
        }),
        // image: new Icon({
        //   src: "/images/polyline.svg", // 마커 이미지 경로
        //   anchor: [0.5, 1], // 마커 이미지의 앵커 위치
        // }),
      }),
    })
  );

  useEffect(() => {
    drawRef.current = new Draw({
      source: undefined,
      type: "LineString",
      style: new Style({
        stroke: new Stroke({
          color: ANNOTATION_COLOR[color].stroke(1),
          width: 2,
        }),
        fill: new Fill({
          color: ANNOTATION_COLOR[color].fill(1),
        }),
        // image: new Icon({
        //   src: "/images/polyline.svg", // 마커 이미지 경로
        //   anchor: [0.5, 1], // 마커 이미지의 앵커 위치
        // }),
      }),
    });
  }, [onCanvas, color]);
  const startDrawing = () => {
    if (onClick) {
      onClick();
    }

    if (onStart) {
      onStart();
    }
    map.getViewport().style.cursor = "crosshair";
    map.setProperties({ isDrawing: true });
    map.addInteraction(drawRef.current);
  };

  const finishDrawingByRightClick = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      drawRef.current.finishDrawing();
      map.getViewport().style.cursor = "pointer";
    },
    [map]
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
    if (selectedButtonId !== buttonId) {
      map.removeInteraction(drawRef.current);
    }
  }, [map, selectedButtonId, buttonId]);

  useEffect(() => {
    const drawingInstance = drawRef.current;
    drawingInstance.on("drawend", drawing);
    map
      .getViewport()
      .addEventListener("contextmenu", finishDrawingByRightClick);
    return () => {
      drawingInstance.un("drawend", drawing);
      map
        .getViewport()
        .removeEventListener("contextmenu", finishDrawingByRightClick);
    };
  }, [drawing, finishDrawingByRightClick, map]);

  useEffect(() => {
    if (!isActive) {
      map.removeInteraction(drawRef.current);
    }
  }, [isActive, map]);

  return (
    <Button
      id={buttonId}
      isDisabled={disabled}
      disabled={disabled}
      hasPopup
      popupText="Polyline"
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
        <LineSegment size={26} color={isActive ? "white" : "black"} />
      </InnerButton>
    </Button>
  );
}
