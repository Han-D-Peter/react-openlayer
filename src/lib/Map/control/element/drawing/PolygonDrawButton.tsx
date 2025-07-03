import React, { useCallback, useId, useState } from "react";
import { Button, ButtonProps } from "../Button";
import { useEffect, useRef } from "react";
import { Draw } from "ol/interaction";
import { useFeatureStore, useMap } from "../../../hooks";
import Style from "ol/style/Style";
import { DrawEvent } from "ol/interaction/Draw";
import Stroke from "ol/style/Stroke";
import Fill from "ol/style/Fill";
import { useControlSection } from "../../layout";
import { BoundingBox } from "@phosphor-icons/react";
import { InnerButton } from "../InnerButton";
import { ANNOTATION_COLOR } from "src/lib/Map/constants";
import {
  FeatureFromGeojson,
  useFeaturesStore,
} from "src/lib/Map/FeaturesStore";
import { positionsFromFeature } from "src/lib/utils";
import { Coordinate } from "ol/coordinate";
import { makeGeojsonShape } from "src/lib/utils/makeGeojsonShape";

export interface PolygonDrawButtonProps extends ButtonProps {
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

export function PolygonDrawButton({
  onEnd,
  onStart,
  onClick,
  onCanvas = false,
  color = "BLUE",
  disabled,
  ...props
}: PolygonDrawButtonProps) {
  const map = useMap();
  const id = useId();
  const buttonId = `controlbutton-${id}`;
  const { selectButton, selectedButtonId } = useControlSection();
  const [count, setCount] = useState(0);

  const isActive = buttonId === selectedButtonId;
  const { selectFeature } = useFeatureStore();

  const { addGeoJson } = useFeaturesStore();
  const drawRef = useRef(
    new Draw({
      source: undefined,
      type: "Polygon",
      style: new Style({
        zIndex: 1000,
        stroke: new Stroke({
          color: ANNOTATION_COLOR[color].stroke(1),
          width: 2,
        }),
        fill: new Fill({
          color: ANNOTATION_COLOR[color].fill(1),
        }),
        // image: new Icon({
        //   src: "/images/polygon.svg", // 마커 이미지 경로
        //   anchor: [0.5, 1], // 마커 이미지의 앵커 위치
        // }),
      }),
    })
  );

  useEffect(() => {
    drawRef.current = new Draw({
      source: undefined,
      type: "Polygon",
      style: new Style({
        zIndex: 1000,
        stroke: new Stroke({
          color: ANNOTATION_COLOR[color].stroke(1),
          width: 2,
        }),
        fill: new Fill({
          color: ANNOTATION_COLOR[color].fill(1),
        }),
        // image: new Icon({
        //   src: "/images/polygon.svg", // 마커 이미지 경로
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
    map.setProperties({ isDrawing: true });
    drawRef.current.setActive(true);
    map.getViewport().style.cursor = "crosshair";
  };

  const finishDrawingByRightClick = useCallback(
    (e: MouseEvent) => {
      setCount((prev) => prev + 1);
      if (e.button === 2) {
        e.preventDefault();
        if (count < 3) {
          drawRef.current.abortDrawing();
          setCount(0);
          selectButton("");
          drawRef.current.setActive(false);
          return;
        }
        drawRef.current.finishDrawing();
        map.getViewport().style.cursor = "pointer";
      }
    },
    [count, selectButton, map]
  );

  const drawing = useCallback(
    (event: DrawEvent) => {
      const feature = event.feature;

      const newPosition = positionsFromFeature(feature, true) as Coordinate[];

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
          type: "polygon",
          color: "blue",
          opacity: 1,
          fontSize: 12,
          original_type: "polygon",
          isSelected: true,
        }
      );

      selectButton("");
      map.getViewport().style.cursor = "pointer";
      drawRef.current.setActive(true);
      if (onEnd) {
        onEnd(newGeoJson);
      }
      if (onCanvas) {
        addGeoJson(newGeoJson);
        selectFeature(newGeoJson);
      }

      setTimeout(() => map.setProperties({ isDrawing: false }), 100);
    },
    [selectButton, map, onEnd, onCanvas, addGeoJson, selectFeature]
  );

  useEffect(() => {
    const drawingInstance = drawRef.current;

    drawingInstance.on("drawend", drawing);
    map.getViewport().addEventListener("mousedown", finishDrawingByRightClick);
    return () => {
      drawingInstance.un("drawend", drawing);
      map
        .getViewport()
        .removeEventListener("mousedown", finishDrawingByRightClick);
    };
  }, [drawing, finishDrawingByRightClick, map]);

  useEffect(() => {
    if (!isActive) {
      map.removeInteraction(drawRef.current);
    } else {
      map.addInteraction(drawRef.current);
    }
  }, [isActive, map]);

  return (
    <Button
      id={buttonId}
      isDisabled={disabled}
      disabled={disabled}
      hasPopup
      popupText="Polygon"
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
        <BoundingBox size={26} color={isActive ? "white" : "black"} />
      </InnerButton>
    </Button>
  );
}
