import React, { useCallback, useId } from "react";
import { Button, ButtonProps } from "../Button";
import { useEffect, useRef } from "react";
import { Draw } from "ol/interaction";
import { useMap } from "../../../hooks";
import Style from "ol/style/Style";
import { icon, makeText } from "../../../utils/object";
import Icon from "ol/style/Icon";
import { DrawEvent } from "ol/interaction/Draw";
import { PointIcon } from "../../../constants/icons/PointIcon";
import { useControlSection } from "../../layout";
import { InnerButton } from "../InnerButton";
import { positionsFromFeature } from "src/lib/utils";
import { makeGeojsonShape } from "src/lib/utils/makeGeojsonShape";
import { Coordinate } from "ol/coordinate";
import {
  FeatureFromGeojson,
  useFeaturesStore,
} from "src/lib/Map/FeaturesStore";

export interface PointDrawButtonProps extends ButtonProps {
  /**
   * @description You can get Multipoint feature what was made by callback function.
   */
  onEnd: (feature: FeatureFromGeojson) => void;

  /**
   * @description You can set callback Fn on 'start' event.
   */
  onStart?: () => void;

  /**
   * @default false
   * @description Well... Sometimes you need this drawing tool with using server waht containes DB. if 'onCanvas' set false, react-openlayer will not draw feature on canvas.
   */
  onCanvas?: boolean;
}

export function PointDrawButton({
  onEnd,
  onClick,
  onCanvas = false,
  onStart,
  disabled,
  ...props
}: PointDrawButtonProps) {
  const map = useMap();
  const id = useId();
  const buttonId = `controlbutton-${id}`;
  const { selectButton, selectedButtonId } = useControlSection();
  const isActive = buttonId === selectedButtonId;

  const { addGeoJson } = useFeaturesStore();

  const drawRef = useRef(
    new Draw({
      source: undefined,
      type: "Point",
      style: new Style({
        text: makeText({
          text: "unknown",
          size: 15,
          color: "black",
          outline: true,
          isMarker: true,
        }),
        image: new Icon({
          scale: 0.07,
          src: icon.marker, // 마커 이미지 경로
          anchor: [0.5, 1], // 마커 이미지의 앵커 위치
        }),
      }),
    })
  );

  useEffect(() => {
    drawRef.current = new Draw({
      source: undefined,
      type: "Point",
      style: new Style({
        text: makeText({
          text: "unknown",
          size: 15,
          color: "black",
          outline: true,
          isMarker: true,
        }),
        image: new Icon({
          scale: 0.07,
          src: icon.marker, // 마커 이미지 경로
          anchor: [0.5, 1], // 마커 이미지의 앵커 위치
        }),
      }),
    });
  }, [onCanvas]);
  const startDrawing = () => {
    if (onClick) {
      onClick();
    }
    if (onClick) {
      onClick();
    }
    map.setProperties({ isDrawing: true });
    map.addInteraction(drawRef.current);
  };

  const drawing = useCallback(
    (event: DrawEvent) => {
      const feature = event.feature;

      const newPosition = positionsFromFeature(feature, true) as Coordinate;

      const newGeoJson = makeGeojsonShape(
        {
          type: "Point",
          coordinates: newPosition,
        },
        {
          title: "unknown",
          comment: "",
          issueDegree: "심각도",
          issue: "이슈 사항",
          issueGrade: 1,
          type: "marker",
          color: "blue",
          opacity: 1,
          fontSize: 12,
          original_type: "point",
          isSelected: true,
        }
      );

      selectButton("");

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
      popupText="Point"
      onClick={() => {
        if (isActive) {
          selectButton("");
          map.setProperties({ isDrawing: false });
        } else {
          map.getViewport().style.cursor = "pointer";
          selectButton(buttonId);
          startDrawing();
        }
      }}
      isActive={isActive}
      {...props}
    >
      <InnerButton isActive={isActive}>
        <PointIcon size={22} color={isActive ? "white" : "#455A64"} />
      </InnerButton>
    </Button>
  );
}
