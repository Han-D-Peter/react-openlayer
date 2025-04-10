import React, { useId } from "react";
import { Button, ButtonProps } from "../Button";
import { useCallback, useEffect, useRef } from "react";
import { Modify, Snap } from "ol/interaction";
import { altShiftKeysOnly, doubleClick } from "ol/events/condition";
import { Collection, Feature } from "ol";
import { ModifyEvent } from "ol/interaction/Modify";
import { BiSolidPencil } from "react-icons/bi";
import { useMap, useSelectAnnotation } from "../../../hooks";
import { useControlSection } from "../../layout";
import { InnerButton } from "../InnerButton";
import { Geometry } from "ol/geom";

export interface ModifyAnnotationProps extends ButtonProps {
  onModifyChange?: (e: ModifyEvent) => void;
  target: Feature<Geometry> | null;
}

export function ModifyAnnotation({
  onModifyChange,
  target,
  disabled,
  ...props
}: ModifyAnnotationProps) {
  const clickedAnnotation = useSelectAnnotation();

  const modifyInteractionRef = useRef<Modify | null>(null);
  const snapInteractionRef = useRef<Snap | null>(null);

  const map = useMap();
  const id = useId();
  const buttonId = `controlbutton-${id}`;
  const { selectButton, selectedButtonId } = useControlSection();
  const isActive = buttonId === selectedButtonId;
  const onModifyStart = useCallback(() => {
    if (clickedAnnotation) {
      const existProperties = clickedAnnotation.getProperties();
      const existMapProperties = map.getProperties();
      clickedAnnotation.setProperties({
        ...existProperties,
        isModifying: true,
      });

      map.setProperties({ ...existMapProperties, isModifying: true });
      return;
    } else if (target) {
      const existProperties = target.getProperties();
      const existMapProperties = map.getProperties();
      target.setProperties({
        ...existProperties,
        isModifying: true,
      });

      map.setProperties({ ...existMapProperties, isModifying: true });
      return;
    }
  }, [clickedAnnotation, map, target]);

  const onModifyEnd = useCallback(
    (event: ModifyEvent) => {
      if (onModifyChange) {
        onModifyChange(event);
      }
      if (clickedAnnotation) {
        const existProperties = clickedAnnotation.getProperties();
        clickedAnnotation.setProperties({
          ...existProperties,
          isModifying: true,
        });
        return;
      } else if (target) {
        const existProperties = target.getProperties();
        target.setProperties({
          ...existProperties,
          isModifying: true,
        });
        return;
      }
    },
    [clickedAnnotation, onModifyChange, target]
  );

  // 수정중임을 map 에 명시
  useEffect(() => {
    const existMapProperties = map.getProperties();
    map.setProperties({ ...existMapProperties, isModifying: isActive });
  }, [isActive]);

  useEffect(() => {
    if (clickedAnnotation && !target && isActive) {
      if (!modifyInteractionRef.current) {
        modifyInteractionRef.current = new Modify({
          features: new Collection([clickedAnnotation]),
          deleteCondition: altShiftKeysOnly,
        });
        snapInteractionRef.current = new Snap({
          features: new Collection([clickedAnnotation]),
        });

        modifyInteractionRef.current.on("modifystart", onModifyStart);
        modifyInteractionRef.current.on("modifyend", onModifyEnd);
        map.addInteraction(snapInteractionRef.current);
        map.addInteraction(modifyInteractionRef.current);
      }
    }
    // else {
    //   if (modifyInteractionRef.current && snapInteractionRef.current) {
    //     modifyInteractionRef.current.un("modifystart", onModifyStart);
    //     modifyInteractionRef.current.un("modifyend", onModifyEnd);
    //     map.removeInteraction(modifyInteractionRef.current);
    //     modifyInteractionRef.current = null;
    //     map.removeInteraction(snapInteractionRef.current);
    //     snapInteractionRef.current = null;
    //   }
    // }

    return () => {
      if (modifyInteractionRef.current && snapInteractionRef.current) {
        modifyInteractionRef.current.un("modifystart", onModifyStart);
        modifyInteractionRef.current.un("modifyend", onModifyEnd);
        map.removeInteraction(modifyInteractionRef.current);
        map.removeInteraction(snapInteractionRef.current);
        modifyInteractionRef.current = null;
        snapInteractionRef.current = null;
      }
    };
  }, [clickedAnnotation, map, onModifyEnd, onModifyStart, isActive, target]);

  useEffect(() => {
    if (!clickedAnnotation && target && isActive) {
      if (!modifyInteractionRef.current) {
        modifyInteractionRef.current = new Modify({
          features: new Collection([target]),
          deleteCondition: altShiftKeysOnly,
        });
        snapInteractionRef.current = new Snap({
          features: new Collection([target]),
        });

        modifyInteractionRef.current.on("modifystart", onModifyStart);
        modifyInteractionRef.current.on("modifyend", onModifyEnd);
        map.addInteraction(snapInteractionRef.current);
        map.addInteraction(modifyInteractionRef.current);
      }
    }
    // else {
    //   if (modifyInteractionRef.current && snapInteractionRef.current) {
    //     modifyInteractionRef.current.un("modifystart", onModifyStart);
    //     modifyInteractionRef.current.un("modifyend", onModifyEnd);
    //     map.removeInteraction(modifyInteractionRef.current);
    //     modifyInteractionRef.current = null;
    //     map.removeInteraction(snapInteractionRef.current);
    //     snapInteractionRef.current = null;
    //   }
    // }

    return () => {
      if (modifyInteractionRef.current && snapInteractionRef.current) {
        modifyInteractionRef.current.un("modifystart", onModifyStart);
        modifyInteractionRef.current.un("modifyend", onModifyEnd);
        map.removeInteraction(modifyInteractionRef.current);
        map.removeInteraction(snapInteractionRef.current);
        modifyInteractionRef.current = null;
        snapInteractionRef.current = null;
      }
    };
  }, [clickedAnnotation, map, onModifyEnd, onModifyStart, isActive, target]);
  useEffect(() => {
    if (clickedAnnotation && target && isActive) {
      if (!modifyInteractionRef.current) {
        modifyInteractionRef.current = new Modify({
          features: new Collection([target]),
          deleteCondition: altShiftKeysOnly,
        });
        snapInteractionRef.current = new Snap({
          features: new Collection([target]),
        });

        modifyInteractionRef.current.on("modifystart", onModifyStart);
        modifyInteractionRef.current.on("modifyend", onModifyEnd);
        map.addInteraction(snapInteractionRef.current);
        map.addInteraction(modifyInteractionRef.current);
      }
    }
    // else {
    //   if (modifyInteractionRef.current && snapInteractionRef.current) {
    //     modifyInteractionRef.current.un("modifystart", onModifyStart);
    //     modifyInteractionRef.current.un("modifyend", onModifyEnd);
    //     map.removeInteraction(modifyInteractionRef.current);
    //     modifyInteractionRef.current = null;
    //     map.removeInteraction(snapInteractionRef.current);
    //     snapInteractionRef.current = null;
    //   }
    // }

    return () => {
      if (modifyInteractionRef.current && snapInteractionRef.current) {
        modifyInteractionRef.current.un("modifystart", onModifyStart);
        modifyInteractionRef.current.un("modifyend", onModifyEnd);
        map.removeInteraction(modifyInteractionRef.current);
        map.removeInteraction(snapInteractionRef.current);
        modifyInteractionRef.current = null;
        snapInteractionRef.current = null;
      }
    };
  }, [clickedAnnotation, map, onModifyEnd, onModifyStart, isActive, target]);

  return (
    <Button
      id={buttonId}
      isDisabled={disabled}
      disabled
      hasPopup
      popupText="Modify"
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
        <BiSolidPencil size={24} color={isActive ? "white" : "black"} />
      </InnerButton>
    </Button>
  );
}
