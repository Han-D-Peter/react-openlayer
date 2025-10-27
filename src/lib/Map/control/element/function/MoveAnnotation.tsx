import React, { useId } from "react";
import { Button, ButtonProps } from "../Button";
import { useCallback, useEffect, useRef } from "react";
import Translate from "ol/interaction/Translate";
import { TranslateEvent } from "ol/interaction/Translate";
import { MovementIcon } from "../../../constants/icons/MovementIcon";
import { useMap } from "../../../hooks";
import { useControlSection } from "../../layout";
import { InnerButton } from "../InnerButton";
import { Geometry } from "ol/geom";
import { useFeaturesStore } from "src/lib/Map/FeaturesStore";
import { Coordinate } from "ol/coordinate";
import { makeGeojsonShape } from "src/lib/utils/makeGeojsonShape";
import Feature from "ol/Feature";
import { Collection } from "ol";
import { positionsFromFeature } from "src/lib/utils";

export interface MoveAnnotationProps extends ButtonProps {
  target: Feature<Geometry> | null;
  onMoveChange?: (e: TranslateEvent) => void;
}

export const MoveAnnotation = ({
  target,
  onMoveChange,
  disabled = false,
  ...props
}: MoveAnnotationProps) => {
  const map = useMap();
  const { selectButton, selectedButtonId } = useControlSection();
  const buttonId = useId();
  const isActive = buttonId === selectedButtonId;

  const { updateGeoJson } = useFeaturesStore();
  const translateRef = useRef(
    new Translate({
      features: new Collection(),
    })
  );

  const onTranslate = useCallback(
    (event: TranslateEvent) => {
      const targetFeature = event.features.getArray()[0];
      if (targetFeature) {
        const newPosition = positionsFromFeature(targetFeature, true) as
          | Coordinate[]
          | Coordinate[][];

        const geometryType = targetFeature.getGeometry()?.getType();

        let geometry;
        if (geometryType === "Point") {
          const pointPosition = Array.isArray(newPosition[0])
            ? (newPosition as Coordinate[][])[0][0]
            : (newPosition as Coordinate[])[0];
          geometry = {
            type: "Point" as const,
            coordinates: pointPosition,
          };
        } else if (
          geometryType === "MultiPoint" ||
          geometryType === "LineString"
        ) {
          geometry = {
            type: geometryType as "MultiPoint" | "LineString",
            coordinates: newPosition as Coordinate[],
          };
        } else if (geometryType === "Polygon") {
          geometry = {
            type: "Polygon" as const,
            coordinates: newPosition as Coordinate[][],
          };
        } else {
          // 기본값으로 Point 사용
          const pointPosition = Array.isArray(newPosition[0])
            ? (newPosition as Coordinate[][])[0][0]
            : (newPosition as Coordinate[])[0];
          geometry = {
            type: "Point" as const,
            coordinates: pointPosition,
          };
        }

        const newGeoJson = makeGeojsonShape(geometry, {
          title: "unknown",
          comment: "",
          issueDegree: "심각도",
          issue: "이슈 사항",
          issueGrade: 1,
          type: geometryType?.toLowerCase() || "point",
          color: "blue",
          opacity: 1,
          fontSize: 12,
          original_type: geometryType?.toLowerCase() || "point",
          isSelected: true,
        });

        if (onMoveChange) {
          onMoveChange(event);
        }

        // GeoJSON 업데이트
        const properties = targetFeature.getProperties();
        if (properties.id) {
          updateGeoJson(properties.id, newGeoJson);
        }
      }
    },
    [updateGeoJson, onMoveChange]
  );

  useEffect(() => {
    const translateInstance = translateRef.current;
    translateInstance.on("translateend", onTranslate);

    return () => {
      translateInstance.un("translateend", onTranslate);
    };
  }, [onTranslate]);

  useEffect(() => {
    if (target && isActive) {
      const features = new Collection([target]);
      translateRef.current = new Translate({
        features: features,
      });
    } else {
      translateRef.current = new Translate({
        features: new Collection(),
      });
    }
  }, [target, isActive]);

  useEffect(() => {
    if (!isActive) {
      map.removeInteraction(translateRef.current);
    } else {
      map.addInteraction(translateRef.current);
    }
  }, [isActive, map]);

  return (
    <Button
      id={buttonId}
      isDisabled={disabled}
      disabled={disabled}
      hasPopup
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
        <MovementIcon size={26} color={isActive ? "white" : "#455A64"} />
      </InnerButton>
    </Button>
  );
};
