import React, { useId } from "react";
import { Button, ButtonProps } from "../Button";
import { useCallback, useEffect, useRef } from "react";
import Select from "ol/interaction/Select";
import { mouseActionButton } from "ol/events/condition";
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
  const id = useId();
  const buttonId = `controlbutton-${id}`;
  const isActive = buttonId === selectedButtonId;

  const { removeGeoJson, getGeoJsonElement } = useFeaturesStore();
  const selectRef = useRef(
    new Select({
      style: null,
      hitTolerance: 8,
      condition: (e) => e.type === "pointerdown" && mouseActionButton(e),
      // 모든 벡터 레이어에서 선택 허용 (필요 시 좁힐 수 있음)
      layers: () => true,
    })
  );

  const onSelect = useCallback(
    (event: SelectEvent) => {
      const selectedFeatures = event.selected;

      if (selectedFeatures.length > 0) {
        const feature = selectedFeatures[0];
        const properties = feature.getProperties();

        if (properties.type) {
          // Feature를 삭제
          const layer = properties.layer;

          if (layer) {
            const source = layer.getSource();
            if (source) {
              source.removeFeature(feature);
            }
          }
          const featureId = feature.getId() as string;
          // GeoJSON에서도 삭제

          if (featureId) {
            removeGeoJson(featureId);
            onDeleteChange && onDeleteChange(getGeoJsonElement(featureId));
            // 삭제 후 버튼 해제 및 인터랙션 정리
            selectButton("");
            try {
              map.removeInteraction(selectRef.current);
            } catch (_) {}
          }
        }
      }
    },
    [removeGeoJson, onDeleteChange, getGeoJsonElement, selectButton, map]
  );

  useEffect(() => {
    const selectInstance = selectRef.current;
    selectInstance.on("select", onSelect);

    return () => {
      selectInstance.un("select", onSelect);
    };
  }, [onSelect]);

  useEffect(() => {
    if (isActive) {
      map.addInteraction(selectRef.current);
    } else {
      map.removeInteraction(selectRef.current);
      // 비활성화 시 선택 상태 초기화
      try {
        selectRef.current.getFeatures().clear();
      } catch (_) {}
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
        <EraserIcon size={26} color={isActive ? "white" : "#455A64"} />
      </InnerButton>
    </Button>
  );
};
