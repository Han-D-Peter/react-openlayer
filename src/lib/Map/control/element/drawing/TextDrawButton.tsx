import React, { useId } from "react";
import { Button, ButtonProps } from "../Button";
import { useEffect, useRef } from "react";
import { Draw } from "ol/interaction";
import { useFeatureStore, useMap } from "../../../hooks";
import Style from "ol/style/Style";
import { DrawEvent } from "ol/interaction/Draw";
import Fill from "ol/style/Fill";
import Text from "ol/style/Text";
import Stroke from "ol/style/Stroke";
import { useControlSection } from "../../layout";
import { RxText } from "react-icons/rx";
import { InnerButton } from "../InnerButton";
import {
  FeatureFromGeojson,
  useFeaturesStore,
} from "src/lib/Map/FeaturesStore";
import { positionsFromFeature } from "src/lib/utils";
import { Coordinate } from "ol/coordinate";
import { makeGeojsonShape } from "src/lib/utils/makeGeojsonShape";

export interface TextDrawButtonProps extends ButtonProps {
  /**
   * @description You can get Multipoint feature what was made by callback function.
   */
  onEnd?: (features: FeatureFromGeojson) => void;

  /**
   * @default false
   * @description Well... Sometimes you need this drawing tool with using server waht containes DB. if 'onCanvas' set false, react-openlayer will not draw feature on canvas.
   */
  onCanvas?: boolean;
}

export function TextDrawButton({
  onEnd,
  onClick,
  onCanvas = false,
  disabled,
  ...props
}: TextDrawButtonProps) {
  const map = useMap();
  const id = useId();
  const buttonId = `controlbutton-${id}`;
  const { selectButton, selectedButtonId } = useControlSection();
  const isActive = buttonId === selectedButtonId;
  const { selectFeature } = useFeatureStore();
  const { addGeoJson } = useFeaturesStore();

  const drawRef = useRef(
    new Draw({
      source: undefined,
      type: "Point",
      style: new Style({
        text: new Text({
          text: "unknown",
          font: "15px Arial",
          fill: new Fill({
            color: "black",
          }),
          overflow: true,
          offsetX: 0,
          offsetY: -15,
          stroke: new Stroke({
            color: "white",
            width: 3,
          }),
        }),
      }),
    })
  );

  useEffect(() => {
    drawRef.current = new Draw({
      source: undefined,
      type: "Point",
      style: new Style({
        text: new Text({
          text: "unknown",
          font: "15px Arial",
          fill: new Fill({
            color: "black",
          }),
          overflow: true,
          offsetX: 0,
          offsetY: -15,
          stroke: new Stroke({
            color: "white",
            width: 3,
          }),
        }),
      }),
    });
  }, [onCanvas]);

  const startDrawing = () => {
    if (onClick) {
      onClick();
    }
    map.setProperties({ isDrawing: true });
    map.addInteraction(drawRef.current);
  };

  const drawing = React.useCallback(
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
        selectFeature(newGeoJson);
      }
      setTimeout(() => map.setProperties({ isDrawing: false }), 100);
    },
    [selectButton, map, onEnd, onCanvas, addGeoJson, selectFeature]
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
      hasPopup
      isDisabled={disabled}
      disabled={disabled}
      popupText="Text"
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
        <RxText size={24} color={isActive ? "white" : "black"} />
      </InnerButton>
    </Button>
  );
}
