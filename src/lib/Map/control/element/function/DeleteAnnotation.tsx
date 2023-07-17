import React, { useCallback } from "react";
import { Button, ButtonProps } from "../Button";
import { useEffect, useRef } from "react";
import { Select } from "ol/interaction";
import { SelectEvent } from "ol/interaction/Select";
import VectorSource from "ol/source/Vector";
import { EraserIcon } from "../../../constants/icons/EraserIcon";
import { useMap, useSelectAnnotation } from "../../../hooks";
import { useFeatureStore } from "src/lib/Map/hooks/incontext/useFeatureStore";

export interface DeleteAnnotationProps extends ButtonProps {
  onChange?: (e: SelectEvent) => void;
}

export function DeleteAnnotation(props: DeleteAnnotationProps) {
  const clickedAnnotation = useSelectAnnotation();
  const { selectFeature } = useFeatureStore();
  const map = useMap();
  const selectInteractionRef = useRef<Select | null>(null);

  const removeSelectedFeatures = useCallback(
    (event: SelectEvent) => {
      const selectedFeatures = event.selected;
      selectFeature(null);

      const target = selectedFeatures.find((selectedFeature) =>
        selectedFeature.getGeometry()
      );

      if (target) {
        const vectorSource = target.getProperties().source as VectorSource;
        vectorSource.removeFeature(target);
        if (props.onChange) {
          props.onChange(event);
        }
      }
    },
    [props.onChange, selectFeature]
  );

  useEffect(() => {
    if (props.isActive) {
      if (!selectInteractionRef.current) {
        selectInteractionRef.current = new Select();
        selectInteractionRef.current.on("select", removeSelectedFeatures);
        map.addInteraction(selectInteractionRef.current);
      }
    } else {
      if (selectInteractionRef.current) {
        selectInteractionRef.current.un("select", removeSelectedFeatures);
        map.removeInteraction(selectInteractionRef.current);
        selectInteractionRef.current = null;
      }
    }
  }, [map, props.isActive, removeSelectedFeatures]);

  useEffect(() => {
    if (selectInteractionRef.current && clickedAnnotation) {
      selectInteractionRef.current.getFeatures().clear();
      selectInteractionRef.current.getFeatures().push(clickedAnnotation);
    }
  }, [clickedAnnotation]);

  return (
    <Button {...props}>
      <EraserIcon />
    </Button>
  );
}
