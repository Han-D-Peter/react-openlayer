import React, { useId } from "react";
import { useCallback, useEffect, useRef } from "react";
import { Collection, Feature } from "ol";
import { Translate } from "ol/interaction";
import { TranslateEvent } from "ol/interaction/Translate";
import { Button, ButtonProps } from "../Button";
import { useFeatureStore, useMap, useSelectAnnotation } from "../../../hooks";
import { MovementIcon } from "../../../constants/icons/MovementIcon";
import { useControlSection } from "../../layout";
import { InnerButton } from "../InnerButton";
import { Geometry } from "ol/geom";
import { useFeaturesStore } from "src/lib/Map/FeaturesStore";
import { positionsFromFeature } from "src/lib/utils";
import { Coordinate } from "ol/coordinate";
import { MakeGeojsonShape } from "src/lib/utils/makeGeojsonShape";

export interface MoveAnnotationProps extends ButtonProps {
  onMoveChange?: (e: TranslateEvent) => void;
  target: Feature<Geometry> | null;
}

export function MoveAnnotation({
  onMoveChange,
  target,
  disabled,
  ...props
}: MoveAnnotationProps) {
  const translateInteractionRef = useRef<Translate | null>(null);
  const clickedAnnotation = useSelectAnnotation();
  const { selectedFeature, unSelectFeature } = useFeatureStore();

  const { updateGeoJson, getGeoJsonElement } = useFeaturesStore();
  const map = useMap();
  const id = useId();
  const buttonId = `controlbutton-${id}`;
  const { selectButton, selectedButtonId } = useControlSection();
  const isActive = buttonId === selectedButtonId;

  const onMoveEnd = useCallback(
    (event: TranslateEvent) => {
      const targetFeature = event.features.getArray()[0];
      const targetId = String(targetFeature.getId());
      const newPosition = positionsFromFeature(targetFeature, true) as
        | Coordinate
        | Coordinate[];
      const targetGeoJson = getGeoJsonElement(targetId)!;

      const hasChanged =
        JSON.stringify(targetGeoJson.geometry.coordinates) !==
        JSON.stringify(newPosition);

      const newGeometry =
        targetGeoJson.geometry.type === "Point"
          ? {
              type: "Point",
              coordinates: newPosition as Coordinate,
            }
          : {
              type: targetGeoJson.geometry.type,
              coordinates: newPosition as Coordinate[],
            };
      updateGeoJson(targetId, {
        ...targetGeoJson,
        geometry: newGeometry as MakeGeojsonShape,
        properties: {
          ...targetGeoJson.properties,
          isSelected: false,
        },
      });
      unSelectFeature();
      hasChanged && selectButton("");
      if (onMoveChange) {
        onMoveChange(event);
      }
      const existMapProperties = map.getProperties();
      map.setProperties({ ...existMapProperties, isModifying: false });
    },
    [
      getGeoJsonElement,
      updateGeoJson,
      unSelectFeature,
      selectButton,
      onMoveChange,
      map,
    ]
  );

  useEffect(() => {
    if (selectedFeature && clickedAnnotation && isActive) {
      translateInteractionRef.current = new Translate({
        features: new Collection([clickedAnnotation]),
      });
      translateInteractionRef.current.on("translateend", onMoveEnd);
      selectButton(buttonId);
      map.addInteraction(translateInteractionRef.current);
    }

    return () => {
      if (translateInteractionRef.current) {
        translateInteractionRef.current.un("translateend", onMoveEnd);
        map.removeInteraction(translateInteractionRef.current);
        translateInteractionRef.current = null;
      }
    };
  }, [
    buttonId,
    selectedFeature,
    clickedAnnotation,
    map,
    onMoveEnd,
    isActive,
    selectButton,
  ]);

  return (
    <Button
      id={buttonId}
      hasPopup
      isDisabled={disabled}
      disabled={disabled}
      popupText="Move"
      onClick={() => {
        if (isActive) {
          selectButton("");
        } else {
          selectButton(buttonId);
        }
      }}
      isActive={isActive}
      {...props}
    >
      <InnerButton isActive={isActive}>
        <MovementIcon size={26} color={isActive ? "white" : "black"} />
      </InnerButton>
    </Button>
  );
}
