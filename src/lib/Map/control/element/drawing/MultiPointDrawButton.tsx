import React, { useCallback, useId } from "react";
import { useEffect, useRef } from "react";
import { Draw } from "ol/interaction";
import { DrawEvent } from "ol/interaction/Draw";
import { useMap } from "../../../hooks";
import { Button, ButtonProps } from "../Button";
import { MultiPointIcon } from "../../../constants/icons/MultiPointIcon";
import { useControlSection } from "../../layout";
import { InnerButton } from "../InnerButton";
import {
  FeatureFromGeojson,
  useFeaturesStore,
} from "src/lib/Map/FeaturesStore";
import { positionsFromFeature } from "src/lib/utils";
import { Coordinate } from "ol/coordinate";
import { makeGeojsonShape } from "src/lib/utils/makeGeojsonShape";

export interface MultiPointDrawButtonProps extends ButtonProps {
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
}

export function MultiPointDrawButton({
  onEnd,
  onClick,
  onCanvas = false,
  onStart,
  disabled,
  ...props
}: MultiPointDrawButtonProps) {
  const map = useMap();

  const id = useId();
  const buttonId = `controlbutton-${id}`;
  const { selectButton, selectedButtonId } = useControlSection();
  const isActive = buttonId === selectedButtonId;
  const { addGeoJson } = useFeaturesStore();

  const drawRef = useRef(
    new Draw({
      source: undefined,
      type: "MultiPoint",
    })
  );

  const startDrawing = () => {
    if (onClick) {
      onClick();
    }

    if (onStart) {
      onStart();
    }
    map.setProperties({ isDrawing: true });
    map.addInteraction(drawRef.current);
  };

  const drawing = useCallback(
    (event: DrawEvent) => {
      const feature = event.feature;
      const newPosition = positionsFromFeature(feature, true) as Coordinate[];

      const newGeoJson = makeGeojsonShape(
        {
          type: "MultiPoint",
          coordinates: newPosition,
        },
        {
          title: "unknown",
          comment: "",
          issueDegree: "심각도",
          issue: "이슈 사항",
          issueGrade: 1,
          type: "multipoint",
          color: "blue",
          opacity: 1,
          fontSize: 12,
          original_type: "multipoint",
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
      isDisabled={disabled}
      disabled={disabled}
      id={buttonId}
      hasPopup
      popupText="Multi Point"
      onClick={() => {
        if (!isActive) {
          startDrawing();
          selectButton(buttonId);
        } else {
          selectButton("");
        }
      }}
      // isActive={isActive}
      isActive={selectedButtonId === buttonId}
      {...props}
    >
      <InnerButton isActive={isActive}>
        <MultiPointIcon size={26} color={isActive ? "white" : "#455A64"} />
      </InnerButton>
    </Button>
  );
}
