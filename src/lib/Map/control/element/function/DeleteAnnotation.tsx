import React, { useId } from "react";
import { Button, ButtonProps } from "../Button";
import { useCallback, useEffect, useRef } from "react";
import Select from "ol/interaction/Select";
import { SelectEvent } from "ol/interaction/Select";
import { EraserIcon } from "../../../constants/icons/EraserIcon";
import { useMap } from "../../../hooks";
import { useControlSection } from "../../layout";
import { InnerButton } from "../InnerButton";
import { useFeaturesStore } from "src/lib/Map/FeaturesStore";
import { FeatureFromGeojson } from "src/lib/Map/FeaturesStore";

export interface DeleteAnnotationProps extends ButtonProps {
  onDeleteChange?: (e: FeatureFromGeojson | undefined) => void;
}

export const DeleteAnnotation = ({
  onDeleteChange,
  disabled = false,
  ...props
}: DeleteAnnotationProps) => {
  const map = useMap();
  const { selectButton, selectedButtonId } = useControlSection();
  const buttonId = useId();
  const isActive = buttonId === selectedButtonId;

  const { removeGeoJson } = useFeaturesStore();
  const selectRef = useRef(
    new Select({
      style: null,
    })
  );

  const onSelect = useCallback(
    (event: SelectEvent) => {
      const selectedFeatures = event.selected;
      if (selectedFeatures.length > 0) {
        const feature = selectedFeatures[0];
        const properties = feature.getProperties();

        if (properties.shape) {
          // Feature를 삭제
          const layer = properties.layer;
          if (layer) {
            const source = layer.getSource();
            if (source) {
              source.removeFeature(feature);
            }
          }

          // GeoJSON에서도 삭제
          if (properties.id) {
            removeGeoJson(properties.id);
          }

          onDeleteChange && onDeleteChange(undefined);
        }
      }
    },
    [removeGeoJson, onDeleteChange]
  );

  useEffect(() => {
    const selectInstance = selectRef.current;
    selectInstance.on("select", onSelect);

    return () => {
      selectInstance.un("select", onSelect);
    };
  }, [onSelect]);

  useEffect(() => {
    if (!isActive) {
      map.removeInteraction(selectRef.current);
    } else {
      map.addInteraction(selectRef.current);
    }
  }, [isActive, map]);

  return (
    <Button
      id={buttonId}
      isDisabled={disabled}
      disabled={disabled}
      hasPopup
      popupText="Delete"
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
        <EraserIcon size={26} color={isActive ? "white" : "black"} />
      </InnerButton>
    </Button>
  );
};
