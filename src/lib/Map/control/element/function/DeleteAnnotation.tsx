import React, { useCallback, useId } from "react";
import { Button, ButtonProps } from "../Button";
import { useEffect, useRef } from "react";
import { Select } from "ol/interaction";
import { SelectEvent } from "ol/interaction/Select";
import { BiSolidEraser } from "react-icons/bi";
import { useMap, useSelectAnnotation } from "../../../hooks";
import { useFeatureStore } from "src/lib/Map/hooks/incontext/useFeatureStore";
import { useControlSection } from "../../layout";
import { InnerButton } from "../InnerButton";
import {
  FeatureFromGeojson,
  useFeaturesStore,
} from "src/lib/Map/FeaturesStore";

export interface DeleteAnnotationProps extends ButtonProps {
  onDeleteChange?: (e: FeatureFromGeojson | undefined) => void;
}

export function DeleteAnnotation({
  onDeleteChange,
  disabled,
  ...props
}: DeleteAnnotationProps) {
  const clickedAnnotation = useSelectAnnotation();
  const { selectFeature } = useFeatureStore();
  const { geoJson, removeGeoJson, getGeoJsonElement } = useFeaturesStore();
  const map = useMap();
  const id = useId();
  const buttonId = `controlbutton-${id}`;
  const { selectButton, selectedButtonId } = useControlSection();
  const isActive = buttonId === selectedButtonId;
  const selectInteractionRef = useRef<Select | null>(null);

  const removeSelectedFeatures = useCallback(
    (event: SelectEvent) => {
      const selectedFeatures = event.selected;
      selectFeature(null);

      const target = selectedFeatures.find((selectedFeature) =>
        selectedFeature.getGeometry()
      );

      if (target) {
        const targetId = target.getId();

        removeGeoJson(String(targetId));
        if (onDeleteChange) {
          onDeleteChange(getGeoJsonElement(String(targetId)));
        }

        selectButton("");
      }
    },
    [
      getGeoJsonElement,
      onDeleteChange,
      removeGeoJson,
      selectButton,
      selectFeature,
    ]
  );

  useEffect(() => {
    if (isActive) {
      if (!selectInteractionRef.current) {
        selectInteractionRef.current = new Select();
        selectInteractionRef.current.on("select", removeSelectedFeatures);
        selectButton(buttonId);
        map.addInteraction(selectInteractionRef.current);
      }
    } else {
      if (selectInteractionRef.current) {
        selectInteractionRef.current.un("select", removeSelectedFeatures);
        map.removeInteraction(selectInteractionRef.current);
        selectInteractionRef.current = null;
      }
    }
  }, [map, isActive, removeSelectedFeatures]);

  useEffect(() => {
    if (selectInteractionRef.current && clickedAnnotation) {
      selectInteractionRef.current.getFeatures().clear();
      selectInteractionRef.current.getFeatures().push(clickedAnnotation);
    }
  }, [clickedAnnotation]);

  return (
    <Button
      id={buttonId}
      hasPopup
      isDisabled={disabled}
      disabled={disabled}
      popupText="Delete"
      onClick={() => {
        if (!isActive) {
          selectButton(buttonId);
        } else {
          selectButton("");
        }
      }}
      isActive={isActive}
      {...props}
    >
      <InnerButton isActive={isActive}>
        <BiSolidEraser size={26} color={isActive ? "white" : "black"} />
      </InnerButton>
    </Button>
  );
}
